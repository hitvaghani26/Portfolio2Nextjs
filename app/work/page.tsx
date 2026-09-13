import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
import { projects, otherWork } from '../content';
import { ProjectList } from '../components/ProjectList';

export const metadata: Metadata = { title: 'Selected Work', description: 'Selected production engineering and web development work by Hit Vaghani: healthcare, CMS websites, commerce, and frontend contributions.' };

export default function WorkPage() {
  return <main id="main-content"><div className="page-width">
    <section className="page-intro"><p className="eyebrow">The work / Selected projects</p><h1>Built for people.<br /><em>Connected to real work.</em></h1><p>From business websites to production applications. A selection of what I&apos;ve built and contributed to, with a closer look at my part in each.</p></section>
    <ProjectList items={projects} />
    <section className="section-space" aria-labelledby="contributions-title"><div className="section-heading"><div><p className="eyebrow">More frontend work</p><h2 id="contributions-title">Smaller scope.<br /><em>The same attention.</em></h2></div><p className="heading-aside">Selected frontend contributions. The scope below describes my part in each project.</p></div><div className="other-work">{otherWork.map(work => <article key={work.name}><Image src={work.image} alt={`${work.name} project screenshot`} sizes="(max-width: 760px) 100vw, 33vw" /><h3>{work.name}</h3><p>{work.scope}</p></article>)}</div></section>
    <div className="page-cta"><h2>Have something in mind?</h2><Link className="text-link" href="/#contact">Let&apos;s discuss it <BsArrowUpRight aria-hidden /></Link></div>
  </div></main>;
}
