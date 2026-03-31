import Image from "next/image";
import Link from "next/link";

export default function IntroPage() {
  return (
    <section className="introShell">
      <article className="introMinimal">
        <Image
          alt="TON FOOT"
          className="introLogo"
          height={160}
          priority
          src="/ton-foot-logo.svg"
          width={560}
        />

        <h1 className="introTitle">Le terrain du plaisir, de la liberte et de la progression.</h1>
        <p className="introSubtitle">
          Coaching foot enfants 6-13 ans a Paris et proche banlieue.
        </p>

        <div className="actions introActions">
          <Link className="btn btnPrimary" href="/accueil">
            Commencer
          </Link>
        </div>
      </article>
    </section>
  );
}
