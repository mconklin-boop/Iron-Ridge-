import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the purpose and service approach behind Iron Ridge Service Group.",
};

export default function AboutPage() {
  return (
    <section className="simple-page">
      <div className="container">
        <header className="page-header">
          <p className="eyebrow">One reliable source</p>
          <h1>Service built around uptime.</h1>
          <p>Iron Ridge Service Group is being developed to connect mobile repair, shop service, fleet maintenance, and transportation under one professional Colorado brand.</p>
        </header>
        <div className="legal-copy">
          <h2>A practical service model</h2>
          <p>The goal is straightforward: make it easier for individual vehicle owners, contractors, fleets, and businesses to get clear communication and capable support without juggling unrelated providers.</p>
          <h2>Values</h2>
          <p>Reliability, integrity, safety, communication, quality workmanship, and long-term customer relationships guide how the company intends to serve its customers.</p>
        </div>
      </div>
    </section>
  );
}
