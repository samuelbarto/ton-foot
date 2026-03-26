import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGU | TON FOOT",
  description: "Conditions generales d utilisation de TON FOOT.",
};

export default function CguPage() {
  return (
    <section className="stack legalPage">
      <header className="legalHeader">
        <h1 className="legalTitle">Conditions generales d utilisation</h1>
        <p className="legalMeta">Derniere mise a jour: 5 mars 2026</p>
      </header>

      <article className="legalSection">
        <h2 className="legalSectionTitle">Objet</h2>
        <p className="cardMeta">
          Les presentes CGU encadrent l acces et l utilisation du site TON FOOT et de ses services de
          preinscription et d information.
        </p>
      </article>

      <article className="legalSection">
        <h2 className="legalSectionTitle">Acces au service</h2>
        <p className="cardMeta">
          L acces au site est gratuit hors cout de connexion internet. TON FOOT peut suspendre temporairement
          le service pour maintenance ou evolution, sans preavis.
        </p>
      </article>

      <article className="legalSection">
        <h2 className="legalSectionTitle">Engagement de l utilisateur</h2>
        <ul className="legalList">
          <li>Fournir des informations exactes et a jour</li>
          <li>Ne pas usurper l identite d un tiers</li>
          <li>Ne pas perturber le fonctionnement du site</li>
          <li>Respecter la loi et les droits des tiers</li>
        </ul>
      </article>

      <article className="legalSection">
        <h2 className="legalSectionTitle">Preinscription</h2>
        <p className="cardMeta">
          La preinscription via waitlist ne vaut pas validation definitive d une place. L ouverture des groupes
          depend de la zone, des disponibilites et de l organisation interne TON FOOT.
        </p>
      </article>

      <article className="legalSection">
        <h2 className="legalSectionTitle">Responsabilite</h2>
        <p className="cardMeta">
          TON FOOT ne saurait etre tenu responsable des dommages indirects lies a l utilisation du site
          (interruption, incompatibilite, perte de donnees, etc.).
        </p>
      </article>

      <article className="legalSection">
        <h2 className="legalSectionTitle">Modification des CGU</h2>
        <p className="cardMeta">
          TON FOOT peut modifier les presentes CGU a tout moment. La version en ligne fait foi a la date de
          consultation.
        </p>
      </article>

      <article className="legalSection">
        <h2 className="legalSectionTitle">Droit applicable</h2>
        <p className="cardMeta">
          Les presentes CGU sont soumises au droit francais. En cas de litige, les juridictions competentes
          seront determinees selon les regles de droit commun.
        </p>
      </article>
    </section>
  );
}
