'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const links = [
  { label: 'Work', href: '/work' },
  { label: 'Expertise', href: '/#expertise' },
  { label: 'About', href: '/about' },
  { label: 'Lab', href: '/lab' },
  { label: 'Contact', href: '/#contact' },
];

export function PortfolioNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [open]);

  return <header className="site-header">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <nav className="page-width nav-inner" aria-label="Main navigation">
      <Link className="wordmark" href="/" aria-label="Hit Vaghani, home" onClick={() => setOpen(false)}>hit<span>.</span></Link>
      <span className="nav-caption">Developer & creative thinker</span>
      <button className="menu-toggle icon-button" ref={toggleRef} type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} title={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? <HiX /> : <HiMenuAlt3 />}</button>
      <div className={`nav-links ${open ? 'is-open' : ''}`} id="main-navigation">{links.map(link => <Link href={link.href} key={link.label} onClick={() => setOpen(false)} aria-current={link.href === pathname || (link.href === '/work' && pathname.startsWith('/work/')) ? 'page' : undefined}>{link.label}{link.label === 'Contact' && <BsArrowUpRight aria-hidden />}</Link>)}</div>
    </nav>
  </header>;
}
