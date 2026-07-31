import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <div className="brand"><strong>IRON RIDGE</strong><span>SERVICE GROUP</span></div>
          <p>Professional mobile service, shop repair, fleet support, and transportation solutions for Colorado businesses and vehicle owners.</p>
        </div>
        <div className="footer-column">
          <h2>Divisions</h2>
          <span>{siteConfig.divisions.mobile}</span><span>{siteConfig.divisions.shop}</span><span>{siteConfig.divisions.logistics}</span>
        </div>
        <div className="footer-column">
          <h2>Company</h2>
          <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link>
        </div>
        <div className="footer-column">
          <h2>Contact</h2>
          <a href={siteConfig.links.phone}>{siteConfig.phone}</a><a href={siteConfig.links.email}>{siteConfig.email}</a><span>{siteConfig.serviceArea}</span><span>{siteConfig.hours}</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}. Services, availability, operating areas, licensing, and transportation authority are subject to confirmation.</span>
        <div className="footer-legal"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
    </footer>
  );
}
