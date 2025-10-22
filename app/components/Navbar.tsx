"use client";
import { useState, useEffect } from 'react';
import { BsGithub, BsLinkedin, BsTwitterX, BsInstagram } from 'react-icons/bs';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Contact', href: '#contact' },
  ];



  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Floating Navbar */}
      <nav className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50 font-semibold">
        <div
          className={`flex items-center gap-2 px-6 py-3 rounded-full bg-white/40 backdrop-blur-xl shadow-2xl border border-white/30 transition-all duration-300 ${
            scrolled ? 'bg-white/50' : ''
          }`}
        >
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="px-5 py-2 rounded-full font-retail text-sm text-gray-700 hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Floating Button */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 rounded-full bg-white/40 backdrop-blur-xl shadow-2xl border border-white/30 text-gray-800 hover:bg-black hover:text-white transition-all duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute top-24 right-6 left-6 bg-white/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden transition-all duration-300 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="p-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="block px-6 py-3 rounded-2xl font-retail text-gray-800 hover:bg-black hover:text-white transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;