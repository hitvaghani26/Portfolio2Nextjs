import type { Metadata } from 'next';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
import { MotionLab } from '../components/MotionLab';

export const metadata: Metadata = { title: 'Motion Lab', description: 'GSAP motion work and an interactive timing study by Hit Vaghani.' };

export default function LabPage() {
  return <main id="main-content" className="page-width"><section className="page-intro"><p className="eyebrow">Lab / Creative frontend</p><h1>A sense of timing.<br /><em>A little curiosity.</em></h1><p>A place for the expressive side of my development work: motion, interaction, and the details that give an interface its character.</p></section><MotionLab /><div className="page-cta"><h2>Motion with a purpose.</h2><Link className="text-link" href="/#contact">Talk about your website <BsArrowUpRight aria-hidden /></Link></div></main>;
}
