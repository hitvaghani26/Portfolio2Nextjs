import Image from 'next/image';
import Link from 'next/link';
import { BsArrowDown, BsArrowUpRight } from 'react-icons/bs';
import type { Project } from '../content';
import { Reveal } from './Reveal';

export function HealthcareVisual() {
  return <div className="healthcare-visual" aria-label="Healthcare platform scope: customer journey, payment providers, and internal operations">
    <div className="system-top"><span>Diagnostics platform</span><span className="system-marker">Production work</span></div>
    <div className="system-flow"><div><small>01 / Customer</small><strong>Order. Register. Track.</strong><span>Checkout & sample-kit journey</span></div><BsArrowDown aria-hidden /><div><small>02 / Payments</small><strong>Stripe · Kaspi · OnePay</strong><span>Country-specific integrations</span></div><BsArrowDown aria-hidden /><div><small>03 / Operations</small><strong>Labs. Portals. Results.</strong><span>Role-based internal workflows</span></div></div>
    <div className="system-bottom"><span>US / Kazakhstan / Vietnam</span><span>Scope overview</span></div>
  </div>;
}

export function ProjectList({ items }: { items: Project[] }) {
  return <div className="project-list">{items.map((project, index) => <Reveal key={project.slug}><article className="work-row">
    <div className="work-info"><p className="eyebrow">{String(index + 1).padStart(2, '0')} / {project.category}</p><h3><Link href={`/work/${project.slug}`}>{project.name}</Link></h3><p>{project.summary}</p><div className="project-role"><small>My role</small><span>{project.role}</span></div><Link className="text-link" href={`/work/${project.slug}`}>View case study <BsArrowUpRight aria-hidden /></Link></div>
    <Link className={`work-media ${project.image ? '' : 'work-media-system'}`} href={`/work/${project.slug}`} aria-label={`View case study: ${project.name}`}>
      {project.image ? <Image src={project.image} alt={project.imageAlt || project.name} sizes="(max-width: 760px) 100vw, 58vw" /> : <HealthcareVisual />}
      <span className="media-arrow"><BsArrowUpRight aria-hidden /></span>
    </Link>
  </article></Reveal>)}</div>;
}
