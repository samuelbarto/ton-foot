import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "TON FOOT",
  description: "Plateforme de coaching football pour enfants",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const year = new Date().getFullYear();

  return (
    <html lang="fr">
      <body>
        <header className="nav">
          <div className="container navInner">
            <Link className="brand" href="/">
              <Image
                alt="TON FOOT"
                className="brandLogo"
                height={72}
                priority
                src="/ton-foot-logo.svg"
                width={248}
              />
              <span className="badge">beta</span>
            </Link>

            <nav className="navLinks">
              <Link className="link" href="/accueil">Accueil</Link>
              <Link className="link" href="/comment-ca-marche">Comment ca marche</Link>
              <Link className="link" href="/waitlist">Waitlist</Link>
              <Link className="link" href="/coaches">Coachs</Link>
              <Link className="link" href="/conseiller-ia">Conseiller IA</Link>
            </nav>
          </div>
        </header>

        <main className="container main">{children}</main>

        <footer className="siteFooter">
          <div className="container footerInner">
            <div className="footerBrand">
              <p className="footerTitle">TON FOOT</p>
              <p className="footerText">Coaching foot enfants 6-13 ans - Paris et proche banlieue.</p>
              <p className="footerText">Contact: contact@ton-foot.fr</p>
            </div>

            <nav className="footerLinks" aria-label="Liens legaux">
              <Link className="footerLink" href="/mentions-legales">
                Mentions legales
              </Link>
              <Link className="footerLink" href="/politique-confidentialite">
                Politique de confidentialite
              </Link>
              <Link className="footerLink" href="/cgu">
                Conditions generales d utilisation
              </Link>
            </nav>
          </div>

          <div className="container footerBottom">
            <p className="footerText">(c) {year} TON FOOT. Tous droits reserves.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

