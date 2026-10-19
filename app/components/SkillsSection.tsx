import Link from 'next/link';
import { skills } from '../Date';

export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="border-y border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="mb-5 font-retail text-xs text-gray-500">What I work with</p>
            <h2 id="skills-heading" className="font-swear-display text-4xl leading-tight md:text-5xl lg:text-6xl">Skills &amp; tools.</h2>
          </div>
          <p className="max-w-md font-retail text-base leading-relaxed text-gray-600 lg:col-span-5">Most of my recent work uses TypeScript, React, Next.js and Node.js. Here’s the rest of the toolkit, with a few projects that put it to use.</p>
        </div>
        <div className="border-b border-gray-200">
          {skills.map((category) => (
            <article key={category.skillTitle} className="skill-capability grid gap-x-8 gap-y-5 border-t border-gray-200 py-8 md:py-10 lg:grid-cols-12">
              <h3 className="font-swear-display text-2xl md:text-3xl lg:col-span-3">{category.skillTitle}</h3>
              <p className="max-w-sm font-retail text-sm leading-relaxed text-gray-500 lg:col-span-4">{category.description}</p>
              <ul className="flex flex-wrap content-start gap-x-6 gap-y-3 lg:col-span-5">
                {category.skills.map(([name, , link]) => (
                  <li key={name}><a href={link} target="_blank" rel="noopener noreferrer" aria-label={`${name} documentation (opens in a new tab)`} className="font-retail text-sm text-gray-800 decoration-gray-400 underline-offset-4 transition-colors hover:text-black hover:underline">
                    {name}
                  </a></li>
                ))}
              </ul>
              <Link href={category.relatedProject} className="inline-flex w-fit items-center gap-3 font-retail text-xs text-gray-500 underline-offset-4 hover:text-black hover:underline lg:col-span-5 lg:col-start-8">{category.relatedLabel}<span aria-hidden="true">↗</span></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
