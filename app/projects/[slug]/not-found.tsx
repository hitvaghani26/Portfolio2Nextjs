import Link from 'next/link';

export default function ProjectNotFound() {
  return <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center"><p className="font-retail text-xs uppercase tracking-[0.2em] text-gray-500">Project not found</p><h1 className="font-swear-display text-4xl md:text-6xl">Let’s find your way back.</h1><p className="max-w-md font-retail text-gray-600">This project page isn’t available. You can explore the rest of my selected work.</p><Link href="/#projects" className="rounded-full bg-black px-6 py-3 font-retail text-sm text-white">Back to projects</Link></main>;
}
