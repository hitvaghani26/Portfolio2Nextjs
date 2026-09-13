'use client';

import { useRef, type ReactNode } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from(ref.current, { y: 24, duration: 0.75, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 95%', once: true } });
    });
    return () => media.revert();
  }, { scope: ref });
  return <div ref={ref}>{children}</div>;
}
