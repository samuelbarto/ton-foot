"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  const isIntroPage = pathname === "/";

  return (
    <header className="nav">
      <div className="container navInner navInnerSimple">
        <Link
          aria-label="Retour a l accueil"
          className="brand"
          href={isIntroPage ? "/" : "/accueil"}
        >
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

        {isIntroPage ? null : (
          <Link className="btn btnPrimary navPrimaryCta" href="/accueil#waitlist-form">
            Rejoindre la waitlist
          </Link>
        )}
      </div>
    </header>
  );
}
