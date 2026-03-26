import AiAdvisorChat from "@/components/ai-advisor-chat";

export default function AiAdvisorPage() {
  return (
    <section className="stack">
      <article className="hero">
        <p className="kicker">Support plateforme</p>
        <h1 className="h1">Parler a un conseiller IA</h1>
        <p className="p">
          Ce bot repond a toutes les questions frequentes sur TON FOOT: reservation, tarifs,
          coachs, creneaux, annulation et fonctionnement global.
        </p>
      </article>

      <AiAdvisorChat />
    </section>
  );
}
