import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type DivisionCardProps = {
  title: string;
  eyebrow: string;
  description: string;
  services: readonly string[];
  href: string;
  icon: LucideIcon;
  index: number;
};

export function DivisionCard({ title, eyebrow, description, services, href, icon: Icon, index }: DivisionCardProps) {
  return (
    <article className="division-card">
      <span className="card-number">0{index}</span>
      <div className="card-icon"><Icon aria-hidden="true" size={27} /></div>
      <p className="eyebrow">{eyebrow}</p><h3>{title}</h3><p>{description}</p>
      <ul>{services.map((service) => <li key={service}>{service}</li>)}</ul>
      <Link className="text-link" href={href}>Start a request <ArrowUpRight size={17} /></Link>
    </article>
  );
}
