"use client";
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Skill from "./components/Skill";
import ProjectsSection from "./components/ProjectsSection";
import Gsap from "./components/Gsap";
import ContactMe from "./components/ContactMe";
import Navbar from "./components/Navbar";
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const lenis = useLenis((lenis) => {

  })

  useEffect(() => {
    function update(time: number) {
      lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])
  return (
    <>
      <ReactLenis root />
      <Navbar />
      <HeroSection />
      <Skill />
      <ProjectsSection />
      <Gsap />
      <ContactMe />
    </>
  );
}
