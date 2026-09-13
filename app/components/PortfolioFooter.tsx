import Link from 'next/link';
import { BsArrowUpRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { profile } from '../content';

export function PortfolioFooter() {
  return <footer className="site-footer page-width">
    <Link className="wordmark" href="/" aria-label="Hit Vaghani, home">hit<span>.</span></Link>
    <span>&copy; {new Date().getFullYear()} Hit Vaghani</span>
    <div className="footer-links"><a href={profile.github} target="_blank" rel="noreferrer"><BsGithub aria-hidden /> GitHub <BsArrowUpRight aria-hidden /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><BsLinkedin aria-hidden /> LinkedIn <BsArrowUpRight aria-hidden /></a><a href={`mailto:${profile.email}?subject=CV%20request`}>Request CV <BsArrowUpRight aria-hidden /></a></div>
  </footer>;
}
