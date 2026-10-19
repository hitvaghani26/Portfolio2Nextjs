'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const videoId = 'PkkDVHJpzlA';

export default function ShowcaseSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [poster, setPoster] = useState<string | null>(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);
  const player = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isPlaying) player.current?.focus();
  }, [isPlaying]);

  return (
    <section id="showcase" aria-labelledby="showcase-heading" className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mb-10 grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="mb-5 font-retail text-xs text-gray-500">A few things in motion</p>
          <h2 id="showcase-heading" className="font-swear-display text-4xl leading-tight md:text-5xl lg:text-6xl">React &amp; GSAP.</h2>
        </div>
        <p className="max-w-md font-retail text-base leading-relaxed text-gray-600 lg:col-span-5">Some of my frontend work and animation experiments, collected in one video.</p>
      </div>
      <div className="showcase-player relative aspect-video overflow-hidden bg-[#131313] text-white">
        {isPlaying ? <iframe ref={player} className="absolute inset-0 h-full w-full border-0" src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`} title="React and GSAP animation showcase by Hit Vaghani" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /> : <button type="button" onClick={() => setIsPlaying(true)} aria-label="Play React and GSAP animation showcase" className="showcase-play group absolute inset-0 h-full w-full cursor-pointer text-left focus-visible:outline-offset-[-6px] focus-visible:outline-white">
          {poster ? <Image src={poster} alt="Preview of my React and GSAP animation showcase" fill sizes="(max-width: 768px) 100vw, 1100px" unoptimized className="object-cover" onError={() => setPoster(current => current?.includes('maxresdefault') ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null)} /> : <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center font-swear-display text-5xl text-white/40 md:text-8xl">React + GSAP</div>}
          <span aria-hidden="true" className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/15" />
          <span className="showcase-play-control absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black transition-colors group-hover:bg-[#e9e9e6] md:h-24 md:w-24"><svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>
          <span className="absolute bottom-5 left-5 font-retail text-xs md:bottom-8 md:left-8 md:text-sm">Watch film <span aria-hidden="true" className="ml-3">↗</span></span>
        </button>}
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 pb-6 font-retail text-xs text-gray-500"><p>Selected frontend work</p><a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-black underline-offset-4 hover:underline">Watch on YouTube <span aria-hidden="true">↗</span></a></div>
    </section>
  );
}
