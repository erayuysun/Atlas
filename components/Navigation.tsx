"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navStyle: React.CSSProperties = scrolled
    ? {
        background: 'rgba(18, 18, 18, 0.98)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        transition: 'background 600ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 600ms cubic-bezier(0.4, 0, 0.2, 1)',
      }
    : {
        background: 'linear-gradient(to bottom, rgba(18, 18, 18, 0.95) 0%, rgba(18, 18, 18, 0.75) 55%, rgba(18, 18, 18, 0) 100%)',
        boxShadow: 'none',
        transition: 'background 600ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 600ms cubic-bezier(0.4, 0, 0.2, 1)',
      };

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50"
        style={{ boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.25)' : 'none', transition: 'box-shadow 600ms cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        {/* Gradient layer — visible at top, fades out when scrolled */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(18,18,18,0.95) 0%, rgba(18,18,18,0.75) 55%, rgba(18,18,18,0) 100%)',
            opacity: scrolled ? 0 : 1,
            transition: 'opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        {/* Solid layer — hidden at top, fades in when scrolled */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'rgba(18, 18, 18, 0.98)',
            opacity: scrolled ? 1 : 0,
            transition: 'opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        {/* Nav content sits above background layers */}
        <div className="relative container mx-auto px-4">
          <div className="relative flex justify-between items-center h-16 md:h-20">
            {/* Left Navigation */}
            <div className="hidden md:flex space-x-12 flex-1">
              <Link href="/" className="relative text-white text-lg font-semibold tracking-wide group">
                <span className="transition-colors duration-300 group-hover:text-orange-400">Home</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
              </Link>
              <Link href="/about" className="relative text-white text-lg font-semibold tracking-wide group">
                <span className="transition-colors duration-300 group-hover:text-orange-400">About Us</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
              </Link>
            </div>

            {/* Center Logo — absolutely centered so it stays perfectly centered at any screen size */}
            <Link href="/atlas/kenya" className="absolute left-1/2 -translate-x-1/2 flex-shrink-0">
              <img 
                src="/Media/hp/logonobg.png" 
                alt="ATLAS" 
                className="h-32 md:h-40 w-auto"
              />
            </Link>

            {/* Right Navigation */}
            <div className="hidden md:flex space-x-12 flex-1 justify-end">
              <Link href="/knowledge-base" className="relative text-white text-lg font-semibold tracking-wide group">
                <span className="transition-colors duration-300 group-hover:text-orange-400">Knowledge Base</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
              </Link>
              <Link href="/podcast" className="relative text-orange-500 text-lg font-semibold tracking-wide group">
                <span className="transition-colors duration-300 group-hover:text-orange-300">Podcast</span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="md:hidden pb-4 border-t border-gray-800 pt-4">
              <Link href="/" className="block py-2 text-white hover:text-orange-500">
                Home
              </Link>
              <Link href="/about" className="block py-2 text-white hover:text-orange-500">
                About Us
              </Link>
              <Link href="/knowledge-base" className="block py-2 text-white hover:text-orange-500">
                Knowledge Base
              </Link>
              <Link href="/podcast" className="block py-2 text-orange-500 hover:text-orange-400">
                Podcast
              </Link>
            </div>
          )}
        </div>
      </nav>
      {/* Spacer so content doesn't hide under fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  );
}
