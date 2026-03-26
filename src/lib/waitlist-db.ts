import { randomUUID } from "node:crypto";
import { Pool } from "pg";

export type WaitlistInput = {
  parentName: string;
  contact: string;
  city: string;
  childAge: number;
  frequency: string;
  goals: string[];
  notes: string;
};

export type WaitlistRow = {
  id: string;
  parentName: string;
  contact: string;
  city: string;
  childAge: number;
  frequency: string;
  goals: string[];
  notes: string;
  createdAt: string;
};

declare global {
  var __tonFootPgPoolState:
    | {
        pool: Pool;
        databaseUrl: string;
        useSsl: boolean;
      }
    | undefined;
}

let initPromise: Promise<void> | null = null;

function getConnectionConfig() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL manquante. Configure la connexion PostgreSQL.");
  }

  const forceSsl = process.env.DATABASE_SSL === "true";
  const disableSsl = process.env.DATABASE_SSL === "false";
  const useSsl = disableSsl ? false : forceSsl || process.env.NODE_ENV === "production";

  return { databaseUrl, useSsl };
}

function getPool() {
  const { databaseUrl, useSsl } = getConnectionConfig();

  const state = global.__tonFootPgPoolState;
  if (state && state.databaseUrl === databaseUrl && state.useSsl === useSsl) {
    return state.pool;
  }

  if (state) {
    void state.pool.end().catch(() => undefined);
  }

  const pool = new Pool({
    connectionString: databaseUrl,
    ssl: useSsl ? { rejectUnauthorized: false } : undefined,
  });

  global.__tonFootPgPoolState = {
    pool,
    databaseUrl,
    useSsl,
  };

  return pool;
}

function isAuthError(error: unknown) {
  return error instanceof Error && error.message.toLowerCase().includes("password authentication failed");
}

async function resetPool() {
  const state = global.__tonFootPgPoolState;
  global.__tonFootPgPoolState = undefined;
  initPromise = null;

  if (state) {
    try {
      await state.pool.end();
    } catch {
      // Ignore pool shutdown errors during reconnect attempts.
    }
  }
}

async function withReconnect<T>(operation: () => Promise<T>) {
  try {
    return await operation();
  } catch (error) {
    if (!isAuthError(error)) {
      throw error;
    }

    await resetPool();
    return operation();
  }
}

async function ensureSchema() {
  if (initPromise) {
    return initPromise;
  }

  const pool = getPool();
  initPromise = pool
    .query(`
      CREATE TABLE IF NOT EXISTS waitlist_entries (
        id UUID PRIMARY KEY,
        parent_name TEXT NOT NULL,
        contact TEXT NOT NULL,
        city TEXT NOT NULL,
        child_age INTEGER NOT NULL,
        frequency TEXT NOT NULL,
        goals JSONB NOT NULL,
        notes TEXT NOT NULL DEFAULT '',
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
    `)
    .then(() => undefined)
    .catch((error) => {
      initPromise = null;
      throw error;
    });

  return initPromise;
}

function parseGoals(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map((item) => String(item));
  }

  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed.map((item) => String(item)) : [];
    } catch {
      return [];
    }
  }

  return [];
}

export async function insertWaitlistEntry(input: WaitlistInput) {
  return withReconnect(async () => {
    await ensureSchema();
    const pool = getPool();

    const id = randomUUID();
    const createdAt = new Date().toISOString();

    await pool.query(
      `
        INSERT INTO waitlist_entries (
          id,
          parent_name,
          contact,
          city,
          child_age,
          frequency,
          goals,
          notes,
          created_at
        ) VALUES ($1, $2, $3, $4, $5, $6, $7::jsonb, $8, $9)
      `,
      [
        id,
        input.parentName,
        input.contact,
        input.city,
        input.childAge,
        input.frequency,
        JSON.stringify(input.goals),
        input.notes,
        createdAt,
      ],
    );

    return { id, createdAt };
  });
}

export async function listWaitlistEntries(limit = 50): Promise<WaitlistRow[]> {
  return withReconnect(async () => {
    await ensureSchema();
    const pool = getPool();

    const result = await pool.query(
      `
        SELECT
          id,
          parent_name,
          contact,
          city,
          child_age,
          frequency,
          goals,
          notes,
          created_at
        FROM waitlist_entries
        ORDER BY created_at DESC
        LIMIT $1
      `,
      [limit],
    );

    return result.rows.map((row) => ({
      id: String(row.id),
      parentName: String(row.parent_name),
      contact: String(row.contact),
      city: String(row.city),
      childAge: Number(row.child_age),
      frequency: String(row.frequency),
      goals: parseGoals(row.goals),
      notes: String(row.notes ?? ""),
      createdAt:
        row.created_at instanceof Date
          ? row.created_at.toISOString()
          : new Date(String(row.created_at)).toISOString(),
    }));
  });
}
