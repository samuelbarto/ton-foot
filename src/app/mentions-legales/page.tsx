import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions legales | TON FOOT",
  description: "Mentions legales de la plateforme TON FOOT.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="stack legalPage">
      <header className="legalHeader">
        <h1 className="legalTitle">Mentions legales</h1>
        <p className="legalMeta">Derniere mise a jour: 5 mars 2026</p>
      </header>

      <article className="legalSection">
        <h2 className="legalSectionTitle">Editeur du site</h2>
        <p className="cardMeta">
          Nom de la marque: TON FOOT
          <br />
          Responsable de publication: [A COMPLETER]
          <br />
          Structure juridique: [A COMPLETER]
          <br />
          Adresse du siege: [A COMPLETER]
          <br />
          Email de contact: contact@ton-foot.fr
        </p>
      </article>

      <article className="legalSection">
        <h2 className="legalSectionTitle">Hebergement</h2>
        <p className="cardMeta">
          Le site est heberge par Vercel Inc.
          <br />
          Adresse: 440 N Barranca Ave #4133, Covina, CA 91723, Etats-Unis
          <br />
          Site: https://vercel.com
        </p>
      </article>

      <article className="legalSection">
        <h2 className="legalSectionTitle">Propriete intellectuelle</h2>
        <p className="cardMeta">
          Les elements du site TON FOOT (textes, visuels, logo, structure) sont proteges par le droit de la
          propriete intellectuelle. Toute reproduction, adaptation ou diffusion sans autorisation prealable est
          interdite.
        </p>
      </article>

      <article className="legalSection">
        <h2 className="legalSectionTitle">Responsabilite</h2>
        <p className="cardMeta">
          TON FOOT met en oeuvre les moyens raisonnables pour assurer la fiabilite des informations diffusees
          sur le site. Toutefois, des erreurs ou omissions peuvent subsister. L utilisateur reste responsable de
          l usage qu il fait des informations fournies.
        </p>
      </article>
    </section>
  );
}
