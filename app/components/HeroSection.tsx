"use client";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const HeroSection = () => {
  const rounde1Ref = useRef(null);
  const rounde2Ref = useRef(null);
  const rounde3Ref = useRef(null);
  const squareRef = useRef(null);

  useGSAP(() => {
    gsap.to(rounde1Ref.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'linear',
    });
    gsap.to(rounde2Ref.current, {
      rotation: 360,
      duration: 14,
      repeat: -1,
      ease: 'linear',
    });
    gsap.to(rounde3Ref.current, {
      rotation: 360,
      duration: 12,
      repeat: -1,
      ease: 'linear',
    });
  });

  return (
    <div className="relative h-screen w-full " id='home'>
      {/* Text Section */}
      {/* Animated Shapes */}
      <div className="flex w-full h-screen justify-center items-center absolute top-0 left-0 overflow-hidden z-[-1]">
        <div ref={rounde1Ref} className="rounde1 flex items-center">
          <div ref={rounde2Ref} className="rounde2 flex items-center">
            <div ref={rounde3Ref} className="rounde3 flex items-center">
              <div ref={squareRef} className="square" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center z-20">
        <h1 className="leading-tight text-2xl sm:text-4xl lg:text-6xl xl:text-7xl">
          <span className="font-swear-display font-extralight">Hi, I’m</span>{' '}
          <span className="font-retail">Hit Vaghani</span>
          <br />
          <span className="font-swear-display font-extralight">a</span>{' '}
          <span className="font-retail">Full-Stack Developer</span>
          <br />
          <span className="font-swear-display font-extralight">
            who loves
          </span>{' '}
          <span className="font-retail">modern web & tea</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
