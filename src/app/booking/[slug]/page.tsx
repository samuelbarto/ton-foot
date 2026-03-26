import Link from "next/link";
import { notFound } from "next/navigation";
import BookingForm from "@/components/booking-form";
import { getCoachBySlug } from "@/data/coaches";

type BookingPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BookingPage({ params }: BookingPageProps) {
  const { slug } = await params;
  const coach = getCoachBySlug(slug);

  if (!coach) {
    notFound();
  }

  return (
    <section className="stack">
      <Link className="linkInline" href={`/coaches/${coach.slug}`}>
        Retour au profil coach
      </Link>

      <article className="hero">
        <p className="kicker">Reservation</p>
        <h1 className="h1">Choisir les objectifs de progression</h1>
        <p className="p">
          Tu peux personnaliser la seance selon les besoins de ton enfant: dribble, passe, frappe,
          vitesse, technique et plus.
        </p>
      </article>

      <BookingForm coachName={coach.name} slots={coach.slots} />
    </section>
  );
}
