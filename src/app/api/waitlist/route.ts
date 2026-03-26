import { NextResponse } from "next/server";
import { insertWaitlistEntry } from "@/lib/waitlist-db";

export const runtime = "nodejs";

type WaitlistPayload = {
  parentName: unknown;
  contact: unknown;
  city: unknown;
  childAge: unknown;
  frequency: unknown;
  goals: unknown;
  notes: unknown;
};

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function asStringList(value: unknown) {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string" && item.trim().length > 0)
    : [];
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as WaitlistPayload;

    const parentName = asString(body.parentName);
    const contact = asString(body.contact);
    const city = asString(body.city);
    const frequency = asString(body.frequency);
    const notes = asString(body.notes);
    const goals = asStringList(body.goals);
    const age = Number(body.childAge);

    if (!parentName || !contact || !city || !frequency || goals.length === 0 || !Number.isFinite(age)) {
      return NextResponse.json(
        { ok: false, error: "Informations invalides ou incompletes." },
        { status: 400 },
      );
    }

    if (age < 6 || age > 13) {
      return NextResponse.json(
        { ok: false, error: "L age enfant doit etre compris entre 6 et 13 ans." },
        { status: 400 },
      );
    }

    const saved = await insertWaitlistEntry({
      parentName,
      contact,
      city,
      childAge: age,
      frequency,
      goals,
      notes,
    });

    return NextResponse.json({ ok: true, id: saved.id, createdAt: saved.createdAt });
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("waitlist POST error:", error);
    }

    const errorDetails =
      process.env.NODE_ENV !== "production" && error instanceof Error ? error.message : undefined;

    const message =
      error instanceof Error && error.message.includes("DATABASE_URL")
        ? "Configuration PostgreSQL manquante. Ajoute DATABASE_URL."
        : "Impossible d enregistrer cette preinscription pour le moment.";

    return NextResponse.json(
      { ok: false, error: message, details: errorDetails },
      { status: 500 },
    );
  }
}
