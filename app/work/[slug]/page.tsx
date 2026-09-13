import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BsArrowLeft, BsArrowUpRight } from 'react-icons/bs';
import { projects } from '../../content';
import { HealthcareVisual } from '../../components/ProjectList';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  return { title: project?.name || 'Project not found', description: project?.summary };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const index = projects.findIndex(project => project.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return <main id="main-content" className="page-width case-study">
    <section className="page-intro"><Link className="text-link back-link" href="/work"><BsArrowLeft aria-hidden /> All work</Link><p className="eyebrow">{project.category}</p><h1>{project.name}</h1><p>{project.summary}</p>
      <dl className="case-meta"><div><dt>My role</dt><dd>{project.role}</dd></div><div><dt>Context</dt><dd>{project.context}</dd></div><div><dt>Tools & focus</dt><dd>{project.technologies.join(' / ')}</dd></div></dl>
    </section>
    <figure className={`case-image ${project.image ? '' : 'case-system'}`}>{project.image ? <Image src={project.image} alt={project.imageAlt || project.name} sizes="(max-width: 1300px) 92vw, 1200px" priority /> : <HealthcareVisual />}<figcaption>{project.image ? 'Project screenshot from my selected work.' : 'A high-level overview of my work. This diagram is not a screenshot of the client application.'}</figcaption></figure>
    <section className="case-section"><p className="eyebrow">01 / The context</p><div><h2>The problem to solve.</h2><p className="large-copy">{project.challenge}</p></div></section>
    <section className="case-section"><p className="eyebrow">02 / My contribution</p><div><h2>Where I got involved.</h2><div className="contributions">{project.contributions.map((item, number) => <article key={item.title}><span className="eyebrow">{String(number + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div></div></section>
    <section className="case-section"><p className="eyebrow">03 / The outcome</p><div><h2>What this made possible.</h2><p className="large-copy">{project.result}</p><Link className="text-link" href="/#contact">Discuss a similar project <BsArrowUpRight aria-hidden /></Link></div></section>
    <div className="page-cta"><div><p className="eyebrow">Next project</p><h2>{next.name}</h2></div><Link className="text-link" href={`/work/${next.slug}`}>Explore project <BsArrowUpRight aria-hidden /></Link></div>
  </main>;
}
