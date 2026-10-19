"use client";
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';
import projectsData from '../data/projects';
import ProjectVisual from './ProjectVisual';

gsap.registerPlugin(ScrollTrigger);
const ProjectsSection = () => {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const projectCards = document.querySelectorAll('.project-card');

      projectCards.forEach((card, index) => {
        if (index < projectCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            endTrigger: projectCards[projectCards.length - 1],
            end: 'top top',
            pin: true,
            pinSpacing: false,
          });
        }

        if (index < projectCards.length - 1) {
          ScrollTrigger.create({
            trigger: projectCards[index + 1],
            start: 'top bottom',
            end: 'top top',
            onUpdate: (self) => {
              const progress = self.progress;
              const scale: number = 1 - progress * 0.1;
              const rotation = (index % 2 === 0 ? 5 : -5) * progress;
              const afterOpacity = progress;
              gsap.set(card, {
                scale,
                rotation,
                '--after-opacity': afterOpacity,
              });
            },
          });
        }
      });
    },
    { scope: container }
  );

  return (
    <>
      <div className="project-title-text-section my-2 sm:my-4 md:my-6 lg:my-8 xl:my-12" id='projects'>
        <h2 className="project-title font-swear-display text-3xl md:text-5xl lg:text-6xl px-4 md:px-12 lg:px-20 text-center">Selected Work</h2>
        <p className="mx-auto mt-5 max-w-2xl px-6 text-center font-retail text-sm leading-relaxed text-gray-600 md:text-base">Healthcare platforms, backend improvements, and selected earlier work.</p>
      </div>
      <div
        className="project-cards relative w-full h-full bg-black overflow-hidden"
        ref={container}
      >
        {projectsData.map((project, index) => (
          <div
            key={project.slug}
            className="w-full h-screen flex items-center px-4 md:px-12 lg:px-20 will-change-transform bg-white project-card overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              {/* Left big number */}
              <div className="lg:col-span-3 flex justify-start">
                <span aria-hidden="true" className="text-[10vw] lg:text-[6vw] font-retail leading-none">
                  ({String(index + 1).padStart(2, '0')})
                </span>
              </div>

              {/* Right section */}
              <div className="lg:col-span-9 h-full flex flex-col justify-center">
                <div className="mb-3 flex flex-wrap items-center gap-3 font-retail text-[10px] uppercase tracking-[0.15em] text-gray-500 sm:text-xs">
                  <span>{project.category}</span>
                  {project.status && <span className="rounded-full border border-gray-300 px-3 py-1 text-[10px] tracking-normal">{project.status}</span>}
                </div>
                {/* Heading */}
                <h3 className="text-2xl sm:text-3xl xl:text-4xl font-swear-display leading-tight mb-5">
                  {project.title.toUpperCase()}
                </h3>

                {/* Image */}
                <div className="w-full mb-6">
                  {project.image ? <Image
                    src={project.image.src}
                    alt={project.title}
                    width={800}
                    height={480}
                    className="h-[clamp(180px,32vh,300px)] object-contain w-full rounded-xl bg-gray-50 shadow-[0_3px_10px_rgb(0,0,0,0.1)]"
                  /> : <ProjectVisual kind={project.visual} />}
                </div>

                {/* Paragraph */}
                <p className="project-card-description text-base xl:text-lg font-retail text-black max-w-3xl">
                  {project.description}
                </p>

                <div className="project-tags mt-5 flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 font-retail text-[11px] text-gray-600 border border-gray-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/projects/${project.slug}`} className="project-learn-link mt-6 inline-flex w-fit items-center gap-4 border-b border-black pb-1.5 font-retail text-sm text-black transition-colors hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black" aria-label={`Learn more about ${project.title}`}>
                  Learn more <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
