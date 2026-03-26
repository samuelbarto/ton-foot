import { listWaitlistEntries, type WaitlistRow } from "@/lib/waitlist-db";

export const dynamic = "force-dynamic";

export default async function WaitlistAdminPage() {
  let entries: WaitlistRow[] = [];
  let dbError = "";

  try {
    entries = await listWaitlistEntries(200);
  } catch (error) {
    dbError =
      error instanceof Error && error.message.includes("DATABASE_URL")
        ? "Configuration PostgreSQL manquante. Ajoute DATABASE_URL pour lire les inscriptions."
        : "Impossible de charger les inscriptions pour le moment.";
  }

  return (
    <section className="stack">
      <article className="hero">
        <p className="kicker">Admin waitlist</p>
        <h1 className="h1">Inscriptions collectees</h1>
        <p className="p">
          Total: <strong>{entries.length}</strong> demandes en base.
        </p>
      </article>

      <section className="card">
        {dbError ? (
          <p className="p">{dbError}</p>
        ) : entries.length === 0 ? (
          <p className="p">Aucune inscription pour le moment.</p>
        ) : (
          <div className="adminList">
            {entries.map((entry) => (
              <article className="adminItem" key={entry.id}>
                <p className="cardTitle">
                  {entry.parentName} - {entry.city}
                </p>
                <p className="cardMeta">
                  Contact: {entry.contact} | Age: {entry.childAge} ans | Frequence: {entry.frequency}
                </p>
                <p className="cardMeta">Objectifs: {entry.goals.join(", ")}</p>
                {entry.notes ? <p className="cardMeta">Notes: {entry.notes}</p> : null}
                <p className="cardMeta">Cree le: {new Date(entry.createdAt).toLocaleString("fr-FR")}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
