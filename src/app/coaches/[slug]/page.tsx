import Link from "next/link";
import { notFound } from "next/navigation";
import { coaches, getCoachBySlug } from "@/data/coaches";

type CoachDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return coaches.map((coach) => ({ slug: coach.slug }));
}

export default async function CoachDetailPage({ params }: CoachDetailPageProps) {
  const { slug } = await params;
  const coach = getCoachBySlug(slug);

  if (!coach) {
    notFound();
  }

  return (
    <section className="stack">
      <Link className="linkInline" href="/coaches">
        Retour aux coachs
      </Link>

      <article className="card detailCard">
        <h1 className="h1" style={{ marginBottom: 10 }}>
          {coach.name}
        </h1>
        <p className="p">{coach.bio}</p>

        <div className="cardRow" style={{ marginTop: 16 }}>
          <span className="chip">{coach.specialty}</span>
          <span className="chip">{coach.area}</span>
          <span className="chip">{coach.ageRange}</span>
          <span className="chip">{coach.pricePerHour} EUR/h</span>
        </div>
      </article>

      <article className="card">
        <p className="cardTitle">Axes de travail</p>
        <div className="cardRow">
          {coach.focus.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </article>

      <article className="card">
        <p className="cardTitle">Creneaux disponibles</p>
        <div className="cardRow">
          {coach.slots.map((slot) => (
            <span className="chip" key={slot}>
              {slot}
            </span>
          ))}
        </div>
      </article>

      <div className="actions">
        <Link className="btn btnPrimary" href={`/booking/${coach.slug}`}>
          Reserver ce coach
        </Link>
      </div>
    </section>
  );
}
