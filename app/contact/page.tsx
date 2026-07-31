import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Iron Ridge Service Group for mobile service, shop repair, fleet support, or transportation.",
};

export default function ContactPage() {
  return (
    <section className="simple-page">
      <div className="container">
        <header className="page-header">
          <p className="eyebrow">Start a conversation</p>
          <h1>Tell us what you need.</h1>
          <p>The first-version contact details below are placeholders. Update them in the central site configuration before launch.</p>
        </header>
        <div className="division-grid">
          <article className="division-card">
            <p className="eyebrow">General contact</p><h3>Call or email</h3>
            <p><a className="text-link" href={siteConfig.links.phone}>{siteConfig.phone}</a></p>
            <p><a className="text-link" href={siteConfig.links.email}>{siteConfig.email}</a></p>
          </article>
          <article className="division-card">
            <p className="eyebrow">Urgent roadside service</p><h3>Call for availability</h3>
            <p>For a disabled vehicle or urgent roadside need, call the emergency placeholder number. Response time is subject to confirmation.</p>
            <a className="button button-primary" href={siteConfig.links.emergencyPhone}>{siteConfig.emergencyPhone}</a>
          </article>
          <article className="division-card">
            <p className="eyebrow">Service area</p><h3>Colorado support</h3>
            <p>{siteConfig.serviceArea}</p><p>{siteConfig.address}</p><p>{siteConfig.hours}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
