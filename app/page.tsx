"use client";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Skill from "./components/Skill";
import ProjectsSection from "./components/ProjectsSection";
import Gsap from "./components/Gsap";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";
import { ReactLenis } from 'lenis/react';

export default function Home() {
  return (
    <>
      <ReactLenis root />
      <Navbar />
      <main>
      <HeroSection />
      <AboutSection />
      <Skill />
      <ProjectsSection />
      <Gsap />
      <ContactMe />
      </main>
    </>
  );
}
