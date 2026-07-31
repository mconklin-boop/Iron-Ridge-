import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Car,
  CheckCircle2,
  ClipboardCheck,
  Cog,
  Construction,
  Container,
  HeartHandshake,
  MapPin,
  MessageSquare,
  Phone,
  SearchCheck,
  Settings,
  ShieldCheck,
  Tractor,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import "./about.css";

export const metadata: Metadata = {
  title: "About Iron Ridge Service Group | Automotive, Diesel & Fleet Repair",
  description: "Learn about Iron Ridge Service Group, providing professional automotive, diesel, fleet, equipment, shop, and mobile repair services throughout Colorado.",
  openGraph: {
    title: "About Iron Ridge Service Group | Automotive, Diesel & Fleet Repair",
    description: "Professional automotive, diesel, fleet, equipment, shop, and mobile repair services throughout Colorado.",
    url: "/about",
    images: [{
      url: "/images/branding/iron-ridge-brand-banner.jpg",
      width: 1400,
      height: 583,
      alt: "Iron Ridge Service Group shop and mobile repair services",
    }],
  },
};

const equipment = [
  { label: "Passenger cars and SUVs", icon: Car },
  { label: "Gas and diesel pickup trucks", icon: Truck },
  { label: "Commercial vans", icon: Container },
  { label: "Medium-duty trucks", icon: Truck },
  { label: "Heavy-duty Class 6–8 trucks", icon: Tractor },
  { label: "Commercial fleet vehicles", icon: ClipboardCheck },
  { label: "Construction equipment", icon: Construction },
  { label: "Industrial equipment", icon: Cog },
  { label: "Trailers", icon: Container },
  { label: "Specialty vehicles", icon: Settings },
] as const;

const commitments = [
  { label: "Honest recommendations", icon: HeartHandshake },
  { label: "No unnecessary repairs", icon: ShieldCheck },
  { label: "Transparent communication", icon: MessageSquare },
  { label: "Professional diagnostics", icon: SearchCheck },
  { label: "Skilled technicians", icon: Users },
  { label: "Quality workmanship", icon: BadgeCheck },
  { label: "Dependable repairs", icon: CheckCircle2 },
  { label: "Exceptional customer service", icon: HeartHandshake },
] as const;

const values = [
  "Shop and Mobile Service",
  "Automotive Through Class 8",
  "Fleet-Focused Solutions",
  "Experienced Technicians",
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-overlay" />
        <div className="container about-hero-content">
          <p className="eyebrow">About Iron Ridge</p>
          <h1>Built to Keep You Moving.</h1>
          <p>Iron Ridge Service Group provides professional shop and mobile repair services for individual customers, owner-operators, commercial fleets, and businesses throughout Colorado.</p>
          <div className="button-row">
            <a className="button button-primary" href={siteConfig.links.phone}>Schedule Service <Phone size={18} /></a>
            <Link className="button button-secondary" href="/contact">Contact Our Team <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="about-intro section">
        <div className="container about-split">
          <div className="about-copy">
            <p className="eyebrow">Who we are</p>
            <h2>More Than a Repair Shop</h2>
            <p>At Iron Ridge Service Group, we believe every repair is about more than fixing a vehicle. It is about keeping families on the road, businesses operating, and fleets productive.</p>
            <p>Whether a customer brings a vehicle into our repair facility or requests one of our fully equipped mobile service trucks, our mission is simple: deliver exceptional workmanship, honest communication, and dependable service every time.</p>
            <p>We proudly provide professional automotive, diesel, fleet, and equipment repair for individual customers, commercial fleets, owner-operators, contractors, and businesses throughout Colorado.</p>
            <p>From routine maintenance to complex diagnostics and major mechanical repairs, our experienced technicians have the knowledge, tools, and commitment to get the job done right.</p>
          </div>
          <figure className="about-image-frame">
            <Image src="/images/branding/iron-ridge-brand-banner.jpg" alt="Iron Ridge service truck and professional repair facility" width={1400} height={583} unoptimized />
            <figcaption><MapPin size={18} /> Shop and mobile service throughout Colorado</figcaption>
          </figure>
        </div>
      </section>

      <section className="about-service-modes section">
        <div className="container">
          <header className="about-section-heading">
            <p className="eyebrow">Flexible professional service</p>
            <h2>One Team. Two Ways to Serve You.</h2>
          </header>
          <div className="about-service-grid">
            <article className="about-service-card">
              <div className="about-icon"><Building2 size={34} /></div>
              <p className="card-number">01</p>
              <h3>Full-Service Repair Facility</h3>
              <p>Our repair facility is equipped with professional diagnostic equipment, specialty tools, and experienced technicians capable of handling everything from routine maintenance to complex diagnostics and major mechanical repairs.</p>
              <p>Customers can bring their vehicles to our shop for dependable service, thorough inspections, and repairs completed to a professional standard.</p>
            </article>
            <article className="about-service-card about-service-card-accent">
              <div className="about-icon"><Truck size={34} /></div>
              <p className="card-number">02</p>
              <h3>Iron Ridge Mobile Service</h3>
              <p>When a vehicle cannot come to us, Iron Ridge Mobile Service brings professional repairs directly to the customer.</p>
              <p>Our fully equipped service trucks allow us to perform diagnostics, maintenance, emergency repairs, and scheduled fleet service at homes, businesses, job sites, fleet yards, and roadside locations.</p>
              <Link className="text-link" href="/contact">Learn About Mobile Service <ArrowRight size={17} /></Link>
            </article>
          </div>
        </div>
      </section>

      <section className="about-equipment section">
        <div className="container">
          <header className="about-section-heading">
            <p className="eyebrow">Automotive through Class 8</p>
            <h2>Complete Repair Solutions</h2>
          </header>
          <div className="about-equipment-grid">
            {equipment.map(({ label, icon: Icon }) => (
              <div className="about-equipment-item" key={label}><Icon size={27} aria-hidden="true" /><span>{label}</span></div>
            ))}
          </div>
          <p className="about-wide-copy">Whether you need preventive maintenance, electrical diagnostics, engine repairs, suspension work, brake service, cooling system repairs, aftertreatment diagnostics, or advanced drivability troubleshooting, our team is committed to providing reliable solutions that minimize downtime and maximize performance.</p>
        </div>
      </section>

      <section className="about-fleet section">
        <div className="container about-fleet-grid">
          <div>
            <p className="eyebrow">Commercial fleet support</p>
            <h2>Keeping Fleets Productive</h2>
          </div>
          <div className="about-fleet-copy">
            <p>We understand that vehicle downtime costs money. That is why Iron Ridge Service Group works closely with commercial customers to develop maintenance programs designed to reduce breakdowns, improve reliability, control repair costs, and keep equipment operating efficiently.</p>
            <p>Our fleet services may include scheduled preventive maintenance, inspections, diagnostics, repairs, emergency roadside support, and on-site fleet service tailored to the needs of each operation.</p>
            <p>Whether a business manages a few vehicles or a large commercial fleet, our goal is to become a dependable long-term maintenance partner.</p>
            <a className="button button-primary" href={siteConfig.links.phone}>Request Fleet Service <Phone size={18} /></a>
          </div>
        </div>
      </section>

      <section className="about-commitment section">
        <div className="container">
          <header className="about-section-heading">
            <p className="eyebrow">Our commitment</p>
            <h2>Service Built on Trust</h2>
          </header>
          <div className="about-commitment-grid">
            {commitments.map(({ label, icon: Icon }) => (
              <div className="about-commitment-item" key={label}><Icon size={25} aria-hidden="true" /><span>{label}</span></div>
            ))}
          </div>
          <p className="about-wide-copy">We believe trust is earned through honesty, quality workmanship, clear communication, and standing behind the work we perform. Our goal is not simply to repair vehicles. It is to build lasting relationships with every customer and business we serve.</p>
        </div>
      </section>

      <section className="about-values" aria-label="Iron Ridge capabilities">
        <div className="container about-values-grid">
          {values.map((value, index) => <div key={value}><span>0{index + 1}</span><strong>{value}</strong></div>)}
        </div>
      </section>

      <section className="about-future section">
        <div className="container about-future-grid">
          <div className="about-future-mark"><Wrench size={52} /><span>Built to Keep You Moving.</span></div>
          <div>
            <p className="eyebrow">Our road ahead</p>
            <h2>Built for the Road Ahead</h2>
            <p>Iron Ridge Service Group was created with a vision to become a trusted provider of automotive, diesel, fleet, and equipment repair throughout Colorado.</p>
            <p>As we grow, our commitment will remain the same: invest in our people, our tools, our technology, and our customers while delivering dependable service businesses and families can rely on.</p>
            <p>Whether a customer needs service at our repair facility or on-site through Iron Ridge Mobile Service, our team is ready to help.</p>
          </div>
        </div>
      </section>

      <section className="about-final-cta">
        <div className="container about-final-cta-inner">
          <div><p className="eyebrow">Shop or mobile service</p><h2>Ready to Get Back on the Road?</h2><p>Schedule professional shop or mobile service with Iron Ridge Service Group.</p></div>
          <div className="button-row">
            <a className="button button-light" href={siteConfig.links.phone}>Schedule Service</a>
            <a className="button about-call-button" href={siteConfig.links.phone}><Phone size={18} /> Call Iron Ridge</a>
          </div>
        </div>
      </section>
    </>
  );
}
