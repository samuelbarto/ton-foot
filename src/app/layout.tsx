import type { Metadata, Viewport } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "TON FOOT",
  description: "Plateforme de coaching football pour enfants",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const year = new Date().getFullYear();

  return (
    <html lang="fr">
      <body>
        <SiteHeader />

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

