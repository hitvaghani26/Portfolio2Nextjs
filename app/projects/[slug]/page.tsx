import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import projects, { getProject } from '../../data/projects';
import ProjectVisual from '../../components/ProjectVisual';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project not found | Hit Vaghani' };
  return { title: `${project.title} | Hit Vaghani`, description: project.description };
}

const contents = [
  ['overview', 'Overview'],
  ['challenge', 'The challenge'],
  ['contribution', 'My contribution'],
  ['decisions', 'Approach & decisions'],
  ['outcome', 'The outcome'],
  ['learning', 'What I learned'],
] as const;

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className="min-h-screen bg-white text-black">
      <a href="#case-study" className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-50 focus:bg-white focus:p-3">Skip to case study</a>
      <header className="border-b border-black/10">
        <nav aria-label="Project navigation" className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-6 font-retail md:px-12 lg:px-20">
          <Link href="/" className="text-base font-medium">Hit Vaghani</Link>
          <Link href="/#projects" className="text-sm text-gray-600 transition-colors hover:text-black"><span aria-hidden="true">← </span>All projects</Link>
        </nav>
      </header>
      <main id="case-study" className="mx-auto max-w-7xl px-6 pb-16 pt-14 md:px-12 md:pt-20 lg:px-20">
        <div className="max-w-5xl">
          <p className="mb-5 font-retail text-xs uppercase tracking-[0.18em] text-gray-500">Selected work / {project.category}</p>
          {project.status && <p className="mb-6 inline-block rounded-full border border-gray-300 px-4 py-1.5 font-retail text-xs text-gray-600">{project.status}</p>}
          <h1 className="font-swear-display text-4xl leading-[1.1] sm:text-5xl lg:text-7xl">{project.title}</h1>
          <p className="mt-7 max-w-3xl font-retail text-lg leading-relaxed text-gray-600 md:text-xl">{project.description}</p>
        </div>
        <dl className="mb-12 mt-10 grid gap-6 border-y border-black/10 py-7 font-retail sm:grid-cols-3">
          {[
            ['Project context', project.organization],
            ['My role', project.role],
            ['Period', project.period],
          ].map(([label, value]) => <div key={label}><dt className="mb-2 text-[10px] uppercase tracking-[0.15em] text-gray-500">{label}</dt><dd className="text-sm">{value}</dd></div>)}
        </dl>
        <figure className="case-study-visual mb-14">
          {project.image ? <Image src={project.image} alt={`${project.title} website preview`} className="mx-auto max-h-[520px] w-full rounded-2xl bg-gray-50 object-contain" sizes="(max-width: 768px) 100vw, 1100px" priority /> : <ProjectVisual kind={project.visual} />}
          {!project.image && <figcaption className="mt-3 font-retail text-xs text-gray-500">An overview of the implementation, illustrated for this case study.</figcaption>}
        </figure>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-3">
            <nav aria-label="On this page" className="lg:sticky lg:top-10">
              <p className="mb-5 font-retail text-[10px] uppercase tracking-[0.18em] text-gray-500">Inside the project</p>
              <ul className="flex flex-wrap gap-x-5 gap-y-3 font-retail text-sm text-gray-600 lg:flex-col">{contents.map(([id, label]) => <li key={id}><a href={`#${id}`} className="transition-colors hover:text-black">{label}</a></li>)}</ul>
            </nav>
          </aside>
          <article className="case-study-body lg:col-span-9">
            <section id="overview"><p className="case-section-label">01 / The context</p><h2>What this project involved</h2><p>{project.overview}</p></section>
            <section id="challenge"><p className="case-section-label">02 / The problem</p><h2>The challenge</h2><p>{project.challenge}</p></section>
            <section id="contribution"><p className="case-section-label">03 / My part</p><h2>What I contributed</h2><ul>{project.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul></section>
            <section id="decisions"><p className="case-section-label">04 / The approach</p><h2>How I approached the work</h2><p className="case-introduction">The main choices behind the implementation, and why they mattered.</p><div className="space-y-8">{project.decisions.map((decision, index) => <div key={decision.title} className="grid grid-cols-[28px_1fr] gap-4"><span aria-hidden="true" className="pt-1 font-retail text-xs text-gray-400">{String(index + 1).padStart(2, '0')}</span><div><h3>{decision.title}</h3><p>{decision.explanation}</p></div></div>)}</div></section>
            <section id="outcome"><p className="case-section-label">05 / The result</p><h2>The outcome</h2>{project.metric && <div className="mb-7 rounded-2xl border border-black/10 bg-black/[0.025] p-6 md:p-8"><p className="metric-value">{project.metric.before} <span aria-hidden="true">→</span> {project.metric.after}</p><p className="metric-label">{project.metric.label}</p><p className="metric-context">{project.metric.context}</p></div>}<p>{project.outcome}</p></section>
            <section id="learning"><p className="case-section-label">06 / Looking back</p><h2>What I learned</h2><p>{project.takeaway}</p><div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-gray-200 px-3 py-1 font-retail text-xs text-gray-600">{tag}</span>)}</div></section>
          </article>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-8 border-t border-black/10 pt-10 sm:flex-row sm:items-end">
          <Link href="/#projects" className="font-retail text-sm text-gray-600 hover:text-black">← Back to selected work</Link>
          <Link href={`/projects/${nextProject.slug}`} className="group max-w-md"><span className="mb-2 block font-retail text-xs uppercase tracking-[0.15em] text-gray-500">Explore the next project</span><span className="font-swear-display text-2xl leading-tight transition-colors group-hover:text-gray-500">{nextProject.title} <span aria-hidden="true">↗</span></span></Link>
        </div>
      </main>
      <footer className="border-t border-black/10 px-6 py-8 text-center font-retail text-sm text-gray-500">Have a project in mind? <Link href="/#contact" className="ml-1 border-b border-gray-400 text-black">Let’s talk</Link></footer>
    </div>
  );
}
