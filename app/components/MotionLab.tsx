'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { BsPauseFill, BsPlayFill, BsArrowUpRight } from 'react-icons/bs';
import fashionImage from '../assets/photos/thumbnail3.png';

export function MotionLab() {
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    timeline.current = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 0.5 })
      .to('.motion-letter', { y: -24, stagger: 0.09, duration: 0.5, ease: 'power2.out' })
      .to('.motion-letter', { y: 0, stagger: 0.09, duration: 0.8, ease: 'elastic.out(1, 0.5)' });
    return () => { timeline.current?.kill(); };
  }, { scope: root });

  function toggle() {
    if (playing) timeline.current?.pause();
    else timeline.current?.play();
    setPlaying(!playing);
  }

  return <div className="lab-content">
    <section aria-labelledby="reel-title"><div className="lab-item-heading"><div><p className="eyebrow">01 / Recorded work</p><h2 id="reel-title">The GSAP reel.</h2></div><a className="text-link" href="https://www.youtube.com/watch?v=PkkDVHJpzlA" target="_blank" rel="noreferrer">YouTube <BsArrowUpRight aria-hidden /></a></div>
      <div className="reel">{loaded ? <iframe src="https://www.youtube-nocookie.com/embed/PkkDVHJpzlA?autoplay=1" title="Hit Vaghani GSAP showcase" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen /> : <button className="reel-poster" type="button" onClick={() => setLoaded(true)} aria-label="Play GSAP showcase video"><Image src={fashionImage} alt="Frontend project screenshot" sizes="(max-width: 1300px) 92vw, 1200px" /><span><BsPlayFill aria-hidden /> Play showcase</span></button>}</div><p className="media-caption">GSAP showcase / Frontend motion studies</p>
    </section>
    <section className="section-space" aria-labelledby="study-title"><div className="lab-item-heading"><div><p className="eyebrow">02 / Timing study</p><h2 id="study-title">A little personality.</h2></div><button className="icon-button" title={playing ? 'Pause timing study' : 'Play timing study'} aria-label={playing ? 'Pause timing study' : 'Play timing study'} aria-pressed={playing} onClick={toggle} type="button">{playing ? <BsPauseFill /> : <BsPlayFill />}</button></div><div className="motion-study" ref={root}><span className="motion-word" aria-label="hello.">{'hello.'.split('').map((letter, index) => <span className="motion-letter" key={index} aria-hidden>{letter}</span>)}</span><span className="eyebrow">GSAP / Stagger & spring</span></div></section>
  </div>;
}
