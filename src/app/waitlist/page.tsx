import WaitlistForm from "@/components/waitlist-form";

export default function WaitlistPage() {
  return (
    <section className="stack">
      <article className="hero">
        <p className="kicker">Lancement progressif</p>
        <h1 className="h1">Rejoindre la liste d attente</h1>
        <p className="p">
          TON FOOT ouvre progressivement sur Paris et proche banlieue. Laisse tes infos pour etre
          prioritaire quand les groupes 6-13 ans de ta zone ouvrent.
        </p>
      </article>

      <section className="card bookingCard">
        <p className="cardTitle">Preinscription parent</p>
        <p className="cardMeta">
          2 minutes pour nous indiquer les besoins de ton enfant et tes disponibilites.
        </p>
        <WaitlistForm />
      </section>
    </section>
  );
}
