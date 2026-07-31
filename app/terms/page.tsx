import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using the Iron Ridge Service Group website.",
};

export default function TermsPage() {
  return (
    <section className="legal-page">
      <div className="container">
        <header className="page-header">
          <p className="eyebrow">Website information</p>
          <h1>Terms of Use</h1>
          <p>Starter website terms. Review with qualified counsel and update before launch.</p>
        </header>
        <div className="legal-copy">
          <h2>Informational use</h2>
          <p>Website content is general information and does not create a service agreement, quote, warranty, or guarantee of availability.</p>
          <h2>Service confirmation</h2>
          <p>Services, operating areas, response times, transportation authority, licensing, insurance, and pricing must be confirmed directly with Iron Ridge before work is scheduled.</p>
          <h2>Website accuracy</h2>
          <p>Iron Ridge may update or correct website content without notice. Visitors should verify important information before relying on it.</p>
          <h2>Contact</h2>
          <p>Questions about these terms may be directed to the general contact information on this website. Last updated: July 2026.</p>
        </div>
      </div>
    </section>
  );
}
