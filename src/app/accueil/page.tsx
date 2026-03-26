import Link from "next/link";
import { coaches } from "@/data/coaches";

const avgPrice =
  coaches.reduce((sum, coach) => sum + coach.pricePerHour, 0) / coaches.length;

export default function MainHomePage() {
  return (
    <div className="homeStack">
      <section className="heroLarge sectionBlock sectionHero">
        <div>
          <p className="kicker">Coaching foot enfants a Paris</p>
          <h1 className="h1 heroTitle">
            Un vrai cadre pour faire progresser ton enfant, sans stress.
          </h1>
          <p className="p heroText">
            TON FOOT connecte les parents avec des coachs fiables: objectifs clairs, creneaux
            simples a reserver, progression visible semaine apres semaine.
          </p>

          <div className="actions">
            <Link className="btn btnPrimary" href="/waitlist">
              Rejoindre la waitlist
            </Link>
            <Link className="btn" href="/comment-ca-marche">
              Voir comment ca marche
            </Link>
          </div>

          <div className="heroBadges">
            <span className="chip">Ouverture progressive</span>
            <span className="chip">Paris + proche banlieue</span>
            <span className="chip">Groupes 6-13 ans</span>
          </div>
        </div>

        <aside className="heroPanel">
          <p className="panelTitle">Pourquoi les parents choisissent TON FOOT</p>
          <div className="statList">
            <div className="statItem">
              <p className="statValue">{coaches.length}</p>
              <p className="statLabel">coachs actifs</p>
            </div>
            <div className="statItem">
              <p className="statValue">{Math.round(avgPrice)} EUR/h</p>
              <p className="statLabel">tarif moyen</p>
            </div>
            <div className="statItem">
              <p className="statValue">6-13 ans</p>
              <p className="statLabel">tranches d age</p>
            </div>
          </div>

          <Link className="btn btnPrimary fullWidthBtn" href="/waitlist">
            Preinscription prioritaire
          </Link>
        </aside>
      </section>

      <section className="trustStrip sectionBlock sectionTrust">
        <article className="trustItem">
          <p className="cardTitle">Groupes adaptes</p>
          <p className="cardMeta">6-7, 8-10, 11-13 pour eviter les ecarts trop grands.</p>
        </article>
        <article className="trustItem">
          <p className="cardTitle">Volume de groupe</p>
          <p className="cardMeta">5 a 10 enfants par seance pour garder un bon encadrement.</p>
        </article>
        <article className="trustItem">
          <p className="cardTitle">Cadre rassurant</p>
          <p className="cardMeta">Sans selection, sans pression resultat, avec bienveillance.</p>
        </article>
        <article className="trustItem">
          <p className="cardTitle">Annulation claire</p>
          <p className="cardMeta">Gratuite jusqu a 24h avant, puis seance perdue.</p>
        </article>
      </section>

      <section className="card sectionBlock sectionOffer">
        <p className="cardTitle">L offre TON FOOT en un coup d oeil</p>
        <p className="cardMeta">
          Tout ce qu un parent doit comprendre rapidement avant de rejoindre la waitlist.
        </p>

        <div className="offerGrid">
          <article className="offerCard">
            <p className="offerLabel">Pour qui</p>
            <p className="offerValue">6-13 ans</p>
            <p className="cardMeta">Groupes separes par tranche d age pour garder un bon cadre.</p>
          </article>

          <article className="offerCard">
            <p className="offerLabel">Ou</p>
            <p className="offerValue">Paris + proche banlieue</p>
            <p className="cardMeta">Priorite sur Paris, Creteil, Charenton et Maisons-Alfort.</p>
          </article>

          <article className="offerCard">
            <p className="offerLabel">Format</p>
            <p className="offerValue">1h par seance</p>
            <p className="cardMeta">Groupes de 5 a 10 enfants, 2 seances par semaine en moyenne.</p>
          </article>

          <article className="offerCard">
            <p className="offerLabel">Tarif</p>
            <p className="offerValue">Accessible</p>
            <p className="cardMeta">Positionnement pense pour rester simple, rentable et familial.</p>
          </article>
        </div>
      </section>

      <section className="card sectionBlock sectionSafety">
        <p className="cardTitle">Pourquoi un parent peut nous faire confiance</p>
        <p className="cardMeta">
          Le but n est pas juste de faire jouer les enfants. Le but est de les faire progresser dans un
          cadre clair, rassurant et facile a suivre pour les parents.
        </p>

        <div className="trustFocusGrid">
          <article className="trustFocusItem">
            <p className="offerLabel">Securite a la sortie</p>
            <p className="cardMeta">
              Le parent peut indiquer si l enfant rentre seul ou s il doit attendre un adulte apres la
              seance.
            </p>
          </article>

          <article className="trustFocusItem">
            <p className="offerLabel">Suivi apres chaque seance</p>
            <p className="cardMeta">
              Espace parent prevu avec note sur 10 et commentaire simple pour suivre l evolution sans
              pression.
            </p>
          </article>

          <article className="trustFocusItem">
            <p className="offerLabel">Objectifs choisis a la reservation</p>
            <p className="cardMeta">
              Dribble, passe, frappe, vitesse, technique, confiance: la seance s adapte au besoin reel.
            </p>
          </article>

          <article className="trustFocusItem">
            <p className="offerLabel">Regles claires</p>
            <p className="cardMeta">
              Annulation jusqu a 24h avant, puis seance perdue. Un fonctionnement simple et lisible.
            </p>
          </article>
        </div>
      </section>

      <section className="card sectionBlock sectionProcess">
        <p className="cardTitle">Comment ca marche</p>
        <div className="featureGrid">
          <article className="featureItem">
            <p className="featureIndex">1</p>
            <p className="cardTitle">Tu rejoins la waitlist</p>
            <p className="cardMeta">Tu indiques age, zone et objectifs de progression.</p>
          </article>
          <article className="featureItem">
            <p className="featureIndex">2</p>
            <p className="cardTitle">On construit les groupes</p>
            <p className="cardMeta">Groupes de 5 a 10 enfants selon la tranche d age.</p>
          </article>
          <article className="featureItem">
            <p className="featureIndex">3</p>
            <p className="cardTitle">Tu recois les creneaux</p>
            <p className="cardMeta">Tu es contacte en priorite des que ta zone ouvre.</p>
          </article>
        </div>
        <div className="actions">
          <Link className="btn" href="/comment-ca-marche">
            Detail du fonctionnement
          </Link>
        </div>
      </section>

      <section className="lppSection sectionBlock sectionLpp">
        <p className="kicker">Mission TON FOOT</p>
        <h2 className="lppTitle">LPP: Liberte, Plaisir, Progression</h2>
        <p className="p lppIntro">
          Notre methode protege l envie de jouer, supprime la pression inutile et construit une
          progression reelle qui rassure les parents.
        </p>

        <div className="lppGrid">
          <article className="lppCard">
            <p className="lppLabel">Liberte</p>
            <p className="cardMeta">
              L enfant reste libre avant, pendant et apres la seance. Pas de logique de selection,
              pas d obligation de championnat.
            </p>
          </article>

          <article className="lppCard">
            <p className="lppLabel">Plaisir</p>
            <p className="cardMeta">
              Sans plaisir, tout s effondre. Ici, les enfants kiffent, sans peur d etre juges et
              sans pression sur le resultat.
            </p>
          </article>

          <article className="lppCard">
            <p className="lppLabel">Progression</p>
            <p className="cardMeta">
              Un apprentissage cible et rythme pour chaque jeune: devenir meilleur sans stress,
              avec une evolution visible.
            </p>
          </article>
        </div>
      </section>

      <section className="card sectionBlock sectionPlans">
        <p className="cardTitle">Formules prevues</p>
        <div className="planGrid">
          <article className="planCard">
            <p className="lppLabel">Seance unitaire</p>
            <p className="cardMeta">Flexible pour tester la methode et le groupe.</p>
          </article>
          <article className="planCard">
            <p className="lppLabel">Pack seances</p>
            <p className="cardMeta">Ideal pour installer la regularite avec un meilleur suivi.</p>
          </article>
          <article className="planCard">
            <p className="lppLabel">Abonnement</p>
            <p className="cardMeta">Option la plus stable pour une progression continue.</p>
          </article>
        </div>
      </section>

      <section className="card sectionBlock sectionContact">
        <p className="cardTitle">Parler avec TON FOOT</p>
        <p className="cardMeta">
          Si un parent a une question avant de reserver, il doit pouvoir nous joindre facilement.
        </p>

        <div className="contactGrid">
          <article className="contactCard">
            <p className="offerLabel">Email direct</p>
            <p className="cardMeta">Pour une question simple, une demande parent ou un premier contact.</p>
            <a className="btn" href="mailto:contact@ton-foot.fr">
              contact@ton-foot.fr
            </a>
          </article>

          <article className="contactCard">
            <p className="offerLabel">Conseiller IA</p>
            <p className="cardMeta">Pour comprendre le fonctionnement, les coachs, les tarifs et la reservation.</p>
            <Link className="btn" href="/conseiller-ia">
              Ouvrir le conseiller IA
            </Link>
          </article>

          <article className="contactCard">
            <p className="offerLabel">Preinscription prioritaire</p>
            <p className="cardMeta">Le moyen le plus simple pour etre recontacte quand la zone ouvre.</p>
            <Link className="btn btnPrimary" href="/waitlist">
              Rejoindre la waitlist
            </Link>
          </article>
        </div>
      </section>

      <section className="highlightBlock sectionBlock sectionCta">
        <p className="cardTitle">Reservation personnalisee en 3 minutes</p>
        <p className="p">
          Pendant la reservation, tu choisis les performances a ameliorer: dribble, passe, frappe,
          vitesse, technique, confiance. Le coach adapte la seance au besoin reel de ton enfant.
        </p>
        <div className="heroBadges">
          <span className="chip">Objectifs sur mesure</span>
          <span className="chip">Groupe 5-10 enfants</span>
          <span className="chip">6-13 ans</span>
        </div>
        <div className="actions">
          <Link className="btn btnPrimary" href="/waitlist">
            Demarrer la preinscription
          </Link>
          <Link className="btn" href="/conseiller-ia">
            Poser une question
          </Link>
        </div>
      </section>

      <section className="card sectionBlock sectionFaq">
        <p className="cardTitle">Questions frequentes</p>
        <div className="faqGrid">
          <article className="faqItem">
            <p className="lppLabel">Les enfants sont-ils evalues ?</p>
            <p className="cardMeta">Oui, avec une approche bienveillante et sans jugement.</p>
          </article>
          <article className="faqItem">
            <p className="lppLabel">Est-ce reserve aux joueurs deja forts ?</p>
            <p className="cardMeta">Non, debutants et intermediaires sont les bienvenus.</p>
          </article>
          <article className="faqItem">
            <p className="lppLabel">Quand les seances ouvrent-elles ?</p>
            <p className="cardMeta">Par zone, selon la demande et la composition des groupes.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
