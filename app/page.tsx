import Link from 'next/link';
import Image from 'next/image';
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { capabilities, projects } from './content';
import { ProjectList } from './components/ProjectList';
import { ContactSection } from './components/ContactSection';
import { Reveal } from './components/Reveal';
import fashionImage from './assets/photos/thumbnail3.png';

export default function Home() {
  return (
    <main id="main-content">
      <section className="intro page-width" id="home" aria-labelledby="intro-title">
        <div className="eyebrow intro-top"><span>Independent thinking. Full-stack building.</span><span>Surat, India / Working across borders</span></div>
        <h1 id="intro-title">Hit Vaghani<span className="name-period">.</span></h1>
        <div className="intro-bottom">
          <h2>Full-stack developer.<br /><em>A feel for the frontend.</em></h2>
          <div><p>I build websites with character and web applications that work behind the scenes. React, Next.js, Node.js, and a little well-placed motion.</p>
            <div className="link-row"><Link className="button button-dark" href="#projects">Explore my work <BsArrowDownRight aria-hidden /></Link><Link className="text-link" href="#contact">Let&apos;s talk <BsArrowUpRight aria-hidden /></Link></div>
          </div>
        </div>
        <div className="intro-index">
          <Link href="/work/healthcare-platform"><span className="index-number">01</span><span>Healthcare software<br /><small>Three country versions</small></span><BsArrowUpRight aria-hidden /></Link>
          <Link href="/work/content-management"><Image src={projects[1].image!} alt="" sizes="100px" priority /><span>Editable websites<br /><small>Content + admin tools</small></span><BsArrowUpRight aria-hidden /></Link>
          <Link href="/work/eevee-gold"><Image src={projects[2].image!} alt="" sizes="100px" priority /><span>Connected commerce<br /><small>Live data + transactions</small></span><BsArrowUpRight aria-hidden /></Link>
        </div>
      </section>

      <section className="work-section section-space" id="projects" aria-labelledby="work-title">
        <div className="page-width">
          <Reveal><div className="section-heading"><div><p className="eyebrow">01 / Selected work</p><h2 id="work-title">A closer look at<br /><em>what I build.</em></h2></div><Link className="text-link" href="/work">All work <BsArrowUpRight aria-hidden /></Link></div></Reveal>
          <ProjectList items={projects.slice(0, 3)} />
        </div>
      </section>

      <section className="section-space page-width" id="expertise" aria-labelledby="expertise-title">
        <Reveal><div className="section-heading"><div><p className="eyebrow">02 / How I can help</p><h2 id="expertise-title">From the first screen<br /><em>to the final detail.</em></h2></div><p className="heading-aside">For businesses building something new, and teams making an existing product better.</p></div></Reveal>
        <div className="capabilities">{capabilities.map(item => <article key={item.number}><span className="eyebrow">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><small>{item.items}</small></article>)}</div>
        <div className="collaboration"><h3>Working together</h3><ol><li><strong>Understand</strong><span>Agree on the problem, audience, scope, and priorities.</span></li><li><strong>Build & review</strong><span>Work through the interface and functionality with regular feedback.</span></li><li><strong>Deliver</strong><span>Check the responsive experience, integrations, and handover needs.</span></li></ol></div>
      </section>

      <section className="about-band section-space" aria-labelledby="about-title"><div className="page-width about-preview">
        <div><p className="eyebrow">03 / The person behind the work</p><h2 id="about-title">A developer who sees<br /><em>the whole picture.</em></h2><Link className="text-link" href="/about">More about me <BsArrowUpRight aria-hidden /></Link></div>
        <div><p className="large-copy">I&apos;m Hit, a full-stack developer based in Surat, India. I enjoy connecting a thoughtful interface to the engineering that makes it useful.</p><p>My work spans agency websites and production healthcare software: checkout, payments, lab portals, APIs, and deployment. I&apos;m interested in freelance collaborations and software engineering opportunities with German teams.</p><div className="about-facts"><span>English <strong>Professional</strong></span><span>German <strong>A1 / Learning</strong></span><span>Experience <strong>Production + agency</strong></span></div></div>
      </div></section>

      <section className="section-space page-width lab-preview" aria-labelledby="lab-title">
        <div><p className="eyebrow">04 / A little room to experiment</p><h2 id="lab-title">Serious about building.<br /><em>Curious about motion.</em></h2><p>Alongside product work, I explore timing, transitions, and interactive ideas with GSAP. This is where the playful side of my frontend work lives.</p><Link className="text-link" href="/lab">Visit the motion lab <BsArrowUpRight aria-hidden /></Link></div>
        <Link className="lab-image" href="/lab"><Image src={fashionImage} alt="Fashion homepage from my frontend work" sizes="(max-width: 760px) 100vw, 45vw" /><span>Frontend & motion <BsArrowUpRight aria-hidden /></span></Link>
      </section>
      <ContactSection />
    </main>
  );
}
