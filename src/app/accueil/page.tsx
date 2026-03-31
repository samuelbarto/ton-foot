import Image from "next/image";
import WaitlistForm from "@/components/waitlist-form";

export default function AccueilPage() {
  return (
    <div className="homeStack">
      <section className="introShell waitlistIntroShell">
        <article className="introMinimal waitlistIntroCard">
          <Image
            alt="TON FOOT"
            className="introLogo"
            height={160}
            priority
            src="/ton-foot-logo.svg"
            width={560}
          />

          <p className="kicker">Preinscription prioritaire</p>
          <h1 className="introTitle">Le terrain du plaisir, de la liberte et de la progression.</h1>
          <p className="introSubtitle">
            Coaching foot enfants 6-13 ans a Paris et proche banlieue. Tu laisses tes infos aujourd hui,
            on te recontacte des que les premiers groupes de ta zone ouvrent.
          </p>

          <div className="heroBadges waitlistIntroBadges">
            <span className="chip">6-13 ans</span>
            <span className="chip">Paris + proche banlieue</span>
            <span className="chip">Sans pression</span>
          </div>
        </article>
      </section>

      <section className="card bookingCard waitlistPanel" id="waitlist-form">
        <p className="kicker">Waitlist</p>
        <p className="cardTitle waitlistPanelTitle">Rejoindre la waitlist</p>
        <p className="cardMeta">
          2 minutes pour nous dire ou tu habites, l age de ton enfant et ce qu il a envie d ameliorer.
        </p>
        <WaitlistForm />
      </section>
    </div>
  );
}
