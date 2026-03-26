import Link from "next/link";
import { coaches } from "@/data/coaches";

export default function CoachesPage() {
  return (
    <>
      <h1 className="h1" style={{ marginBottom: 10 }}>
        Coachs
      </h1>
      <p className="p">
        Choisis un coach selon le niveau et l&apos;objectif de ton enfant, puis reserve un creneau.
      </p>

      <div className="grid" style={{ marginTop: 18 }}>
        {coaches.map((coach) => (
          <article className="card" key={coach.slug}>
            <p className="cardTitle">{coach.name}</p>
            <p className="cardMeta">{coach.specialty}</p>

            <div className="cardRow" style={{ marginBottom: 12 }}>
              <span className="chip">{coach.area}</span>
              <span className="chip">{coach.pricePerHour} EUR/h</span>
              <span className="chip">{coach.ageRange}</span>
            </div>

            <Link className="btn btnPrimary" href={`/coaches/${coach.slug}`}>
              Voir le profil
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
