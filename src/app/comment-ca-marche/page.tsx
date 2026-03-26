import Link from "next/link";

export default function HowItWorksPage() {
  return (
    <section className="stack">
      <article className="hero sectionBlock sectionHero">
        <p className="kicker">Mode lancement</p>
        <h1 className="h1">Comment TON FOOT fonctionne</h1>
        <p className="p">
          Le service est en construction. L objectif actuel est de prequalifier les familles, former
          les groupes par age, puis ouvrir les premiers creneaux a Paris et proche banlieue.
        </p>
      </article>

      <section className="card sectionBlock sectionProcess">
        <p className="cardTitle">Parcours parent en 4 etapes</p>
        <div className="featureGrid">
          <article className="featureItem">
            <p className="featureIndex">1</p>
            <p className="cardTitle">Preinscription</p>
            <p className="cardMeta">
              Le parent rejoint la waitlist et indique age, objectifs et disponibilites.
            </p>
          </article>
          <article className="featureItem">
            <p className="featureIndex">2</p>
            <p className="cardTitle">Creation des groupes</p>
            <p className="cardMeta">
              Nous constituons des groupes de 5 a 10 enfants par tranches 6-7, 8-10, 11-13.
            </p>
          </article>
          <article className="featureItem">
            <p className="featureIndex">3</p>
            <p className="cardTitle">Ouverture des creneaux</p>
            <p className="cardMeta">
              Les familles prioritaires sont contactees des que les sessions de leur zone ouvrent.
            </p>
          </article>
        </div>
      </section>

      <section className="lppSection sectionBlock sectionLpp">
        <p className="kicker">LPP</p>
        <h2 className="lppTitle">La base de notre methode</h2>
        <div className="lppGrid">
          <article className="lppCard">
            <p className="lppLabel">Liberte</p>
            <p className="cardMeta">
              Les jeunes se sentent libres avant, pendant et apres chaque seance, sans obligation
              de championnat.
            </p>
          </article>

          <article className="lppCard">
            <p className="lppLabel">Plaisir</p>
            <p className="cardMeta">
              Aucune crainte d etre juge, aucune pression de resultat. Le plaisir reste la base de
              toute progression durable.
            </p>
          </article>

          <article className="lppCard">
            <p className="lppLabel">Progression</p>
            <p className="cardMeta">
              Apprentissage cible, rythme adapte, objectif clair: devenir meilleur sans stress et
              rassurer les parents.
            </p>
          </article>
        </div>
      </section>

      <section className="card sectionBlock sectionTrust">
        <p className="cardTitle">Ce qui est deja defini</p>
        <div className="cardRow">
          <span className="chip">Age 6-13 ans</span>
          <span className="chip">Sans pression</span>
          <span className="chip">Plaisir en priorite</span>
          <span className="chip">2 seances/semaine recommande</span>
          <span className="chip">Annulation gratuite jusqu a 24h</span>
        </div>
        <div className="actions">
          <Link className="btn btnPrimary" href="/waitlist">
            Rejoindre la waitlist
          </Link>
        </div>
      </section>
    </section>
  );
}
