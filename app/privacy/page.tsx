import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy information for Iron Ridge Service Group website visitors." };

export default function PrivacyPage() {
  return <section className="legal-page"><div className="container"><header className="page-header"><p className="eyebrow">Website information</p><h1>Privacy Policy</h1><p>Starter privacy notice. Review with qualified counsel and update before collecting production customer information.</p></header><div className="legal-copy"><h2>Information collected</h2><p>When forms are added, the website may collect contact, vehicle, service, and transportation-request information that visitors voluntarily submit.</p><h2>How information may be used</h2><p>Submitted information may be used to respond to requests, coordinate services, prepare estimates, maintain business records, and improve customer communication.</p><h2>Third-party services</h2><p>Future form, analytics, mapping, and hosting providers may process information under their own policies. Those services will be documented when configured.</p><h2>Contact</h2><p>Questions about this notice may be sent to the general email address listed on the contact page. Last updated: July 2026.</p></div></div></section>;
}
