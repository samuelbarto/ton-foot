"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/accueil", label: "Accueil" },
  { href: "/comment-ca-marche", label: "Comment ca marche" },
  { href: "/waitlist", label: "Waitlist" },
  { href: "/coaches", label: "Coachs" },
  { href: "/conseiller-ia", label: "Conseiller IA" },
];

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container navInner">
        <Link
          aria-label="Retour a l accueil"
          className="brand"
          href="/"
          onClick={() => setIsMenuOpen(false)}
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

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="navToggle"
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="navToggleBar" />
          <span className="navToggleBar" />
          <span className="navToggleBar" />
        </button>

        <nav aria-label="Navigation principale" className="navLinks navLinksDesktop">
          {navItems.map((item) => (
            <Link className="link" href={item.href} key={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className={`mobileNavShell${isMenuOpen ? " mobileNavShellOpen" : ""}`}>
        <nav
          aria-label="Navigation mobile"
          className="container mobileNavPanel"
          id="mobile-navigation"
        >
          {navItems.map((item) => (
            <Link
              className="mobileNavLink"
              href={item.href}
              key={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
