import Image from "next/image";
import "./shop/shop.css";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Facebook, Phone, ShieldCheck, Truck, Wrench } from "lucide-react";
import { DivisionCard } from "@/components/division-card";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";

const divisions = [
  {
    title: siteConfig.divisions.mobile,
    eyebrow: "On-site support",
    description: "Mobile automotive, diesel, commercial truck, trailer, and equipment service brought to your location.",
    services: ["Roadside repair", "Fleet maintenance", "Advanced diagnostics"],
    href: "/contact?division=mobile",
    icon: Truck,
  },
  {
    title: siteConfig.divisions.shop,
    eyebrow: "Complete shop repair",
    description: "A professional service facility for automotive, diesel, commercial truck, trailer, and equipment repair.",
    services: ["Auto & diesel repair", "Commercial diagnostics", "Scheduled maintenance"],
    href: "/contact?division=shop",
    icon: Wrench,
  },
];

const capabilities = [
  "Automotive through Class 8 capabilities",
  "Mobile and in-shop service",
  "Fleet-focused maintenance support",
  "Advanced electrical and engine diagnostics",
  "Equipment sourcing and supply",
  "Clear, business-focused communication",
];

export default function Home() {
  return (
    <>
      <section className="home-brand-banner" aria-label="Iron Ridge Service services">
        <div className="home-brand-banner-inner">
          <Image className="home-brand-banner-image" src="/images/branding/iron-ridge-service-banner.jpg" alt="Iron Ridge Service automotive, diesel, fleet, equipment, and mobile service" width={1400} height={583} priority unoptimized />
          <a className="home-facebook-link" href={siteConfig.social.facebook} target="_blank" rel="noreferrer" aria-label="Visit Iron Ridge Service on Facebook"><Facebook size={25} /><span>Follow us on Facebook</span></a>
        </div>
      </section>

      <section className="hero">
        <div className="hero-grid container">
          <div className="hero-copy">
            <p className="eyebrow">Colorado fleet • repair • equipment</p>
            <h1>Complete Fleet, Repair and Equipment Support.</h1>
            <p className="hero-lede">Iron Ridge Service provides professional shop repair, mobile fleet service, roadside support, and equipment sales for businesses and vehicle owners throughout Colorado.</p>
            <div className="hero-trust" aria-label="Service highlights">
              <span><ShieldCheck size={18} /> Professional service</span>
              <span><CheckCircle2 size={18} /> Fleet-ready support</span>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-ribbon" aria-label="Iron Ridge service standard">
        <div className="container brand-ribbon-inner">
          <span>Shop repair</span><i aria-hidden="true" /><span>Mobile service</span><i aria-hidden="true" /><span>Fleet support</span><i aria-hidden="true" /><span>Equipment & Supply</span>
        </div>
      </section>

      <section className="division-section section" id="services">
        <div className="container">
          <SectionHeading eyebrow="Shop and mobile service" title="One reliable service team" description="Get the support that fits the job, with a focus on uptime, clear communication, and long-term customer relationships." />
          <div className="division-grid service-grid">{divisions.map((division, index) => <DivisionCard key={division.title} {...division} index={index + 1} />)}</div>
        </div>
      </section>

      <section className="shop-home-promo"><div className="container"><div><p className="eyebrow">Equipment & Supply</p><h2>Equip the shop. Stock the truck.</h2><p>Explore shop equipment, air tools, trailer supplies, pumps and portable power.</p></div><Link className="button button-primary" href="/shop">Explore equipment <ArrowRight size={18}/></Link></div></section>

      <section className="capabilities section">
        <div className="container capabilities-grid">
          <div>
            <SectionHeading eyebrow="Built to keep you moving" title="Practical support for vehicles, fleets, and businesses" description="From a single disabled unit to coordinated fleet maintenance and equipment support, Iron Ridge is structured to reduce downtime and simplify service." />
            <Link className="text-link" href="/about">Why Iron Ridge <ArrowRight size={17} /></Link>
          </div>
          <ul className="check-list">{capabilities.map((item) => <li key={item}><CheckCircle2 size={20} />{item}</li>)}</ul>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">Need service now?</p>
            <h2>Start with one call. We’ll help route your request.</h2>
            <p>Urgent roadside needs should be handled by phone. Service availability and response times are subject to confirmation.</p>
          </div>
          <a className="button button-light" href={siteConfig.links.emergencyPhone}><Phone size={18} /> Call {siteConfig.emergencyPhone}</a>
        </div>
      </section>
    </>
  );
}
