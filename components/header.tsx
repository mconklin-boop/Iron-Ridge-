"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/config/site";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/#divisions", label: "Divisions" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link className="brand" href="/" aria-label={`${siteConfig.name} home`}>
          <strong>IRON RIDGE</strong><span>SERVICE GROUP</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="header-actions">
          <a className="header-call" href={siteConfig.links.phone}><Phone size={17} /><span>{siteConfig.phone}</span></a>
          <Link className="button button-primary button-small" href="/contact">Request service</Link>
          <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-panel" id="mobile-navigation">
          <nav className="container" aria-label="Mobile navigation">
            {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
            <Link href="/contact" onClick={() => setOpen(false)}>Request service →</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
