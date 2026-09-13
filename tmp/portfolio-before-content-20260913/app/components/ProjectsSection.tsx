"use client";
import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import projectsData from '../Date';

gsap.registerPlugin(ScrollTrigger);
const ProjectsSection = () => {
  const container: React.RefObject<null> = useRef(null);
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
        <div className="project-title font-swear-display text-3xl md:text-5xl lg:text-6xl px-4 md:px-12 lg:px-20 text-center">
          Projects
        </div>
      </div>
      <div
        className="project-cards relative w-full h-full bg-black overflow-hidden"
        ref={container}
      >
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className="w-full h-screen flex items-center px-4 md:px-12 lg:px-20 will-change-transform bg-white project-card overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
              {/* Left big number */}
              <div className="lg:col-span-3 flex justify-start">
                <span className="text-[10vw] lg:text-[6vw] font-retail leading-none">
                  ({String(index + 1).padStart(2, '0')})
                </span>
              </div>

              {/* Right section */}
              <div className="lg:col-span-9 h-full flex flex-col justify-center">
                {/* Heading */}
                <h2 className=" text-xl sm:text-3xl lg:text-4xl font-swear-display leading-tight mb-6">
                  {project.title.toUpperCase()}
                </h2>

                {/* Image */}
                <div className="w-full mb-6">
                  <Image
                    src={project.image.src}
                    alt={project.title}
                    width={800}
                    height={480}
                    className="h-[50vh] aspect-[5/3] object-contain w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                  />
                </div>

                {/* Paragraph */}
                <p className="text-base sm:text-lg font-retail text-black  max-w-3xl">
                  {project.description}
                </p>

                {/* Tags */}
                {/* <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm border border-black rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
