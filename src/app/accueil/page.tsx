import Link from "next/link";
import WaitlistForm from "@/components/waitlist-form";

export default function AccueilPage() {
  return (
    <div className="homeStack">
      <section className="heroLarge sectionBlock sectionHero">
        <div>
          <p className="kicker">Preinscription prioritaire</p>
          <h1 className="h1 heroTitle">Le terrain du plaisir, de la liberte et de la progression.</h1>
          <p className="p heroText">
            Coaching foot enfants 6-13 ans a Paris et proche banlieue. On garde l energie simple:
            des groupes adaptes, un cadre rassurant, des objectifs clairs et la waitlist pour etre
            prevenu en premier quand les creneaux ouvrent.
          </p>

          <div className="heroBadges">
            <span className="chip">6-13 ans</span>
            <span className="chip">Paris + proche banlieue</span>
            <span className="chip">Sans pression</span>
            <span className="chip">LPP</span>
          </div>

          <div className="actions">
            <Link className="btn btnPrimary" href="#waitlist-form">
              Rejoindre la waitlist
            </Link>
          </div>
        </div>

        <aside className="heroPanel">
          <p className="panelTitle">Pourquoi les parents accrochent</p>

          <div className="statList">
            <article className="statItem">
              <p className="statValue">6-13 ans</p>
              <p className="statLabel">tranches d age encadrees</p>
            </article>
            <article className="statItem">
              <p className="statValue">5 a 10</p>
              <p className="statLabel">enfants par seance</p>
            </article>
            <article className="statItem">
              <p className="statValue">24h</p>
              <p className="statLabel">annulation max avant seance</p>
            </article>
          </div>

          <Link className="btn btnPrimary fullWidthBtn" href="#waitlist-form">
            Preinscription prioritaire
          </Link>
        </aside>
      </section>

      <section className="card sectionBlock sectionProcess">
        <p className="kicker">Comment ca marche</p>
        <p className="cardTitle">Un parcours simple pour les familles</p>
        <div className="featureGrid">
          <article className="featureItem">
            <p className="featureIndex">1</p>
            <p className="cardTitle">Preinscription</p>
            <p className="cardMeta">
              Le parent indique sa zone, l age de l enfant et les points a travailler.
            </p>
          </article>

          <article className="featureItem">
            <p className="featureIndex">2</p>
            <p className="cardTitle">Groupes adaptes</p>
            <p className="cardMeta">
              Les groupes sont formes par age pour eviter de melanger les 6 ans avec les 12-13 ans.
            </p>
          </article>

          <article className="featureItem">
            <p className="featureIndex">3</p>
            <p className="cardTitle">Objectifs clairs</p>
            <p className="cardMeta">
              Dribble, passe, frappe, vitesse, technique, confiance: les priorites sont choisies a
              l avance.
            </p>
          </article>

          <article className="featureItem">
            <p className="featureIndex">4</p>
            <p className="cardTitle">Suivi rassurant</p>
            <p className="cardMeta">
              L objectif est simple: voir l enfant prendre du plaisir et progresser dans un cadre
              bienveillant.
            </p>
          </article>
        </div>
      </section>

      <section className="lppSection sectionBlock sectionLpp">
        <p className="kicker">LPP</p>
        <h2 className="lppTitle">La base de notre methode</h2>
        <p className="p lppIntro">
          TON FOOT repose sur trois idees simples: laisser respirer l enfant, remettre le plaisir
          au centre, puis faire progresser sans stress.
        </p>

        <div className="lppGrid">
          <article className="lppCard">
            <p className="lppLabel">Liberte</p>
            <p className="cardMeta">
              Les jeunes se sentent libres avant, pendant et apres chaque seance, sans obligation de
              championnat ni pression de selection.
            </p>
          </article>

          <article className="lppCard">
            <p className="lppLabel">Plaisir</p>
            <p className="cardMeta">
              Aucune crainte d etre juge, aucune pression de resultat. Le kiffe reste la base de
              toute progression durable.
            </p>
          </article>

          <article className="lppCard">
            <p className="lppLabel">Progression</p>
            <p className="cardMeta">
              Apprentissage cible, rythme adapte, objectifs choisis a la reservation: devenir
              meilleur sans perdre le plaisir.
            </p>
          </article>
        </div>
      </section>

      <section className="card sectionBlock sectionOffer">
        <p className="kicker">L essentiel</p>
        <p className="cardTitle">Ce qui est deja fixe</p>

        <div className="offerGrid">
          <article className="offerCard">
            <p className="offerLabel">Age</p>
            <p className="offerValue">6-13 ans</p>
            <p className="cardMeta">groupes 6-7, 8-10, 11-13</p>
          </article>

          <article className="offerCard">
            <p className="offerLabel">Zone</p>
            <p className="offerValue">Paris</p>
            <p className="cardMeta">et proche banlieue type Creteil, Charenton, Maisons-Alfort</p>
          </article>

          <article className="offerCard">
            <p className="offerLabel">Format</p>
            <p className="offerValue">1h</p>
            <p className="cardMeta">5 a 10 enfants par seance, 2 seances/semaine recommandees</p>
          </article>

          <article className="offerCard">
            <p className="offerLabel">Tarif</p>
            <p className="offerValue">Accessible</p>
            <p className="cardMeta">prix normal, pas premium, mais rentable et clair</p>
          </article>
        </div>
      </section>

      <section className="card sectionBlock sectionSafety">
        <p className="kicker">Reassurance parents</p>
        <p className="cardTitle">Ce qui rassure vraiment une famille</p>

        <div className="trustFocusGrid">
          <article className="trustFocusItem">
            <p className="cardTitle">Cadre rassurant</p>
            <p className="cardMeta">
              Pas de selection, pas de pression resultat, juste un cadre bienveillant ou l enfant
              vient pour s amuser et progresser.
            </p>
          </article>

          <article className="trustFocusItem">
            <p className="cardTitle">Sortie et securite</p>
            <p className="cardMeta">
              L application prevoit d indiquer si l enfant rentre seul ou attend un parent pour
              maximiser la securite.
            </p>
          </article>

          <article className="trustFocusItem">
            <p className="cardTitle">Annulation claire</p>
            <p className="cardMeta">
              Annulation au plus tard 24h avant. Sinon, la seance est consideree comme perdue.
            </p>
          </article>

          <article className="trustFocusItem">
            <p className="cardTitle">Suivi visible</p>
            <p className="cardMeta">
              Apres chaque seance, l idee est de donner un retour parent simple, bienveillant et
              utile pour voir l evolution.
            </p>
          </article>
        </div>
      </section>

      <section className="card bookingCard waitlistPanel sectionBlock sectionCta" id="waitlist-form">
        <p className="kicker">Waitlist</p>
        <p className="cardTitle waitlistPanelTitle">Rejoindre la waitlist</p>
        <p className="cardMeta">
          2 minutes pour nous dire ou tu habites, l age de ton enfant et ce qu il a envie
          d ameliorer. Tu es prioritaire quand les premiers groupes de ta zone ouvrent.
        </p>
        <WaitlistForm />
      </section>
    </div>
  );
}
