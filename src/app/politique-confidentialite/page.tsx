import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialite | TON FOOT",
  description: "Politique de confidentialite de la plateforme TON FOOT.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="stack legalPage">
      <header className="legalHeader">
        <h1 className="legalTitle">Politique de confidentialite</h1>
        <p className="legalMeta">Derniere mise a jour: 5 mars 2026</p>
      </header>

      <article className="legalSection">
        <h2 className="legalSectionTitle">Donnees collectees</h2>
        <p className="cardMeta">Lors de la preinscription, TON FOOT peut collecter:</p>
        <ul className="legalList">
          <li>Nom du parent</li>
          <li>Coordonnee de contact (email ou telephone)</li>
          <li>Ville</li>
          <li>Age de l enfant</li>
          <li>Objectifs de progression et notes optionnelles</li>
        </ul>
      </article>

      <article className="legalSection">
        <h2 className="legalSectionTitle">Finalites du traitement</h2>
        <ul className="legalList">
          <li>Gerer la waitlist et les ouvertures de groupes</li>
          <li>Recontacter les familles interessees</li>
          <li>Ameliorer le service et le parcours parent</li>
          <li>Assurer le suivi administratif et operationnel</li>
        </ul>
      </article>

      <article className="legalSection">
        <h2 className="legalSectionTitle">Base legale</h2>
        <p className="cardMeta">
          Le traitement repose sur l interet legitime de TON FOOT a organiser son activite et sur
          l execution de mesures precontractuelles demandees par l utilisateur.
        </p>
      </article>

      <article className="legalSection">
        <h2 className="legalSectionTitle">Conservation</h2>
        <p className="cardMeta">
          Les donnees sont conservees pendant une duree proportionnee a la finalite de la waitlist,
          puis supprimees ou anonymisees.
        </p>
      </article>

      <article className="legalSection">
        <h2 className="legalSectionTitle">Destinataires</h2>
        <p className="cardMeta">
          Les donnees sont accessibles uniquement par TON FOOT et ses prestataires techniques strictement
          necessaires (hebergement et base de donnees), dans la limite de leurs missions.
        </p>
      </article>

      <article className="legalSection">
        <h2 className="legalSectionTitle">Droits RGPD</h2>
        <p className="cardMeta">
          Conformement a la reglementation applicable, vous disposez d un droit d acces, de rectification,
          d effacement, de limitation, d opposition et de portabilite de vos donnees.
          <br />
          Pour exercer vos droits: contact@ton-foot.fr
          <br />
          Vous pouvez egalement introduire une reclamation aupres de la CNIL.
        </p>
      </article>
    </section>
  );
}
