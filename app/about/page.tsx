import type { Metadata } from 'next';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
import { experience, profile } from '../content';

export const metadata: Metadata = { title: 'About', description: 'Meet Hit Vaghani, a full-stack developer in Surat, India, with production healthcare and agency experience, interested in freelance work and German software teams.' };

const stack = [
  ['Frontend', 'TypeScript, JavaScript, React, Next.js, TanStack Query, GSAP'],
  ['Backend & data', 'Node.js, Express, REST APIs, PostgreSQL, MongoDB, MySQL'],
  ['Integrations', 'Stripe, PhonePe, Kaspi, OnePay, OAuth, OTP, webhooks'],
  ['Delivery', 'Git, Docker, Ubuntu, AWS S3 & Secrets Manager, Cloudflare R2'],
];

export default function AboutPage() {
  return <main id="main-content"><div className="page-width">
    <section className="page-intro about-intro"><p className="eyebrow">About / A little context</p><h1>Hi, I&apos;m Hit.<br /><em>I like making things work.</em></h1><p>I&apos;m a full-stack developer based in Surat, India. I work across interfaces, APIs, and the details that connect them, with a particular interest in thoughtful frontend experiences.</p></section>
    <section className="about-story"><div><p className="eyebrow">The way I think</p><h2>Good on the surface.<br /><em>Considered underneath.</em></h2></div><div><p className="large-copy">A clear interface matters. So does what happens after someone clicks.</p><p>My experience runs from agency websites and CMS tools to production healthcare software used across different countries. I&apos;ve worked on customer checkout, authentication, payments, internal portals, and deployment.</p><p>I enjoy owning a feature across the stack: understanding the requirements, working through the data and API, and making the interface feel right. GSAP and creative frontend work give me another way to explore that attention to detail.</p><p>Outside the code, there&apos;s usually a cup of tea nearby. I&apos;m also learning German, currently at A1.</p></div></section>
    <section className="section-space" aria-labelledby="experience-title"><div className="section-heading"><div><p className="eyebrow">Experience</p><h2 id="experience-title">Where I&apos;ve<br /><em>put it into practice.</em></h2></div><a className="text-link" href={`mailto:${profile.email}?subject=CV%20request`}>Request full CV <BsArrowUpRight aria-hidden /></a></div><div className="experience-list">{experience.map(job => <article key={job.company}><span className="eyebrow">{job.date}</span><div><h3>{job.company}</h3><span className="job-role">{job.role}</span><p>{job.text}</p></div></article>)}</div></section>
    <section className="stack-section" aria-labelledby="stack-title"><div><p className="eyebrow">The toolkit</p><h2 id="stack-title">Tools I work with.</h2></div><dl>{stack.map(([title, tools]) => <div key={title}><dt>{title}</dt><dd>{tools}</dd></div>)}</dl></section>
    <section className="section-space about-details"><div><p className="eyebrow">Education</p><h3>B.E. Computer Engineering</h3><p>Gujarat Technological University<br />2020 - 2024</p></div><div><p className="eyebrow">Communication</p><h3>Across languages</h3><p>English: professional<br />German: A1, actively learning<br />Hindi & Gujarati: native</p></div><div><p className="eyebrow">What&apos;s next</p><h3>Freelance & engineering teams</h3><p>Interested in useful web products, creative frontend work, and software engineering opportunities with German companies.</p></div></section>
    <div className="page-cta"><h2>Let&apos;s build something useful.</h2><Link className="text-link" href="/#contact">Start a conversation <BsArrowUpRight aria-hidden /></Link></div>
  </div></main>;
}
