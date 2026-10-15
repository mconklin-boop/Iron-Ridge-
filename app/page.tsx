import Image from "next/image";
import "./shop/shop.css";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Facebook, Phone, ShieldCheck, ShoppingBag, Truck, Wrench } from "lucide-react";
import { DivisionCard } from "@/components/division-card";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";
import { departments, products } from "@/lib/catalog";

const featuredProducts = ["IRS-101", "IRS-201", "IRS-301", "IRS-401", "IRS-501", "IRS-601"].map(id => products.find(product => product.id === id)).filter(product => product !== undefined);
const departmentFeatures = departments.map(category => ({ category, product: products.find(product => product.category === category)! }));

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
            <div className="button-row"><Link className="button button-primary" href="/shop"><ShoppingBag size={18} /> Shop equipment & supplies <ArrowRight size={18} /></Link><a className="button button-secondary" href="#services">Explore repair services</a></div>
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

      <section className="home-store section" aria-labelledby="home-store-title">
        <div className="container">
          <div className="home-store-heading">
            <div><p className="eyebrow">Iron Ridge Equipment & Supply</p><h2 id="home-store-title">Equip the shop.<br /><span>Stock the truck.</span></h2><p>Tools, equipment, and everyday supplies for mechanics, contractors, and fleets. Find what your next job needs.</p></div>
            <div className="home-store-action"><p><strong>{products.length} selections</strong> across {departments.length} departments</p><Link className="button button-primary" href="/shop">Shop the full catalog <ArrowRight size={18} /></Link><Link className="home-store-quote" href="/shop#quote">Planning a larger order? Request a quote</Link></div>
          </div>
          <nav className="home-departments" aria-label="Shop by department">
            {departmentFeatures.map(({ category, product }) => <Link key={category} href={`/shop?department=${encodeURIComponent(category)}#catalog`}><Image src={product.image} alt="" width={160} height={120} sizes="120px" /><span>{category}</span><ArrowRight size={16} aria-hidden="true" /></Link>)}
          </nav>
          <div className="home-featured-heading"><h3>Explore the equipment</h3><Link href="/shop">View all {products.length} selections <ArrowRight size={16} /></Link></div>
          <div className="home-featured-grid">
            {featuredProducts.map(product => <article className="home-product" key={product.id}><Link className="home-product-image" href={`/shop/${product.slug}`} aria-label={`View ${product.name}`}><Image src={product.image} alt={`Representative photo: ${product.imageTitle}`} width={760} height={540} sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw" /><small>Representative photo</small></Link><div className="home-product-copy"><p>{product.category}</p><h4><Link href={`/shop/${product.slug}`}>{product.name}</Link></h4><Link className="home-product-link" href={`/shop/${product.slug}`}>View equipment & request pricing <ArrowRight size={16} /></Link></div></article>)}
          </div>
          <div className="home-store-bottom"><p>Single items or bulk orders. We confirm the exact model, availability, delivery, and total price with your quote.</p><Link className="button button-primary" href="/shop">Find your equipment <ArrowRight size={18} /></Link></div>
        </div>
      </section>

      <section className="division-section section" id="services">
        <div className="container">
          <SectionHeading eyebrow="Shop and mobile service" title="One reliable service team" description="Get the support that fits the job, with a focus on uptime, clear communication, and long-term customer relationships." />
          <div className="division-grid service-grid">{divisions.map((division, index) => <DivisionCard key={division.title} {...division} index={index + 1} />)}</div>
        </div>
      </section>

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
