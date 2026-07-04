"use client";

import { useState, useRef, useEffect } from "react";

const podcastGuests = [
  {
    id: 1,
    image: "/Media/hp/Homepage Episode Tiles/a (1).webp",
    title: "FIELD PROTOCOLS FOR REWIRING RISK INTUITION",
    name: "WILL GADD"
  },
  {
    id: 2,
    image: "/Media/hp/Homepage Episode Tiles/a (2).webp",
    title: "CHALLENGES, CHANGE & FUTURE OF PARAGLIDING",
    name: "PAL TAKATS"
  },
  {
    id: 3,
    image: "/Media/hp/Homepage Episode Tiles/a (3).webp",
    title: "FLYING TO WIN",
    name: "HONORIN HAMARD"
  },
  {
    id: 4,
    image: "/Media/hp/Homepage Episode Tiles/a (4).webp",
    title: "THE JOURNEY WITHIN MAPPING OUR QUEST",
    name: "MAXIME PINOT"
  },
  {
    id: 5,
    image: "/Media/hp/Homepage Episode Tiles/a (5).webp",
    title: "MASTER FEAR, BUILD RESILIENCE & FIND JOY",
    name: "KINGA MASZTALERZ"
  },
  {
    id: 6,
    image: "/Media/hp/Homepage Episode Tiles/a (6).webp",
    title: "UNTOLD TRUTH ABOUT RESERVE DEPLOYMENT",
    name: "URS HAARI"
  },
  {
    id: 7,
    image: "/Media/hp/Homepage Episode Tiles/a (7).webp",
    title: "EPISODE 7",
    name: "GUEST NAME 7"
  },
  {
    id: 8,
    image: "/Media/hp/Homepage Episode Tiles/a (8).webp",
    title: "EPISODE 8",
    name: "GUEST NAME 8"
  },
  {
    id: 9,
    image: "/Media/hp/Homepage Episode Tiles/a (9).webp",
    title: "EPISODE 9",
    name: "GUEST NAME 9"
  },
  {
    id: 10,
    image: "/Media/hp/Homepage Episode Tiles/a (10).webp",
    title: "EPISODE 10",
    name: "GUEST NAME 10"
  },
  {
    id: 11,
    image: "/Media/hp/Homepage Episode Tiles/a (11).webp",
    title: "EPISODE 11",
    name: "GUEST NAME 11"
  }
];

type AnimPhase = 'idle' | 'exit' | 'enter-init' | 'enter';

export default function PodcastCarousel() {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [phase, setPhase] = useState<AnimPhase>('idle');
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const [isMobile, setIsMobile] = useState(false);
  const [prevPulse, setPrevPulse] = useState(false);
  const [nextPulse, setNextPulse] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const itemsPerPage = isMobile ? 4 : 5;

  // Preload all images as soon as the component mounts
  useEffect(() => {
    podcastGuests.forEach((guest) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = guest.image;
      document.head.appendChild(link);
    });
    // Also preload the overlay template
    const templateLink = document.createElement('link');
    templateLink.rel = 'preload';
    templateLink.as = 'image';
    templateLink.href = '/Media/hp/Homepage Episode Tiles/Template.webp';
    document.head.appendChild(templateLink);
  }, []);

  const totalPages = Math.ceil(podcastGuests.length / itemsPerPage);

  // Reset to first page when layout switches between mobile/desktop
  useEffect(() => {
    setDisplayIndex(0);
    setPhase('idle');
  }, [isMobile]);

  const goTo = (newIndex: number, dir: 'left' | 'right') => {
    if (phase !== 'idle') return;
    setDirection(dir);
    setPhase('exit');

    setTimeout(() => {
      setDisplayIndex(newIndex);
      setPhase('enter-init');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase('enter');
          setTimeout(() => setPhase('idle'), 350);
        });
      });
    }, 300);
  };

  const nextSlide = () => {
    setNextPulse(true);
    setTimeout(() => setNextPulse(false), 500);
    goTo((displayIndex + 1) % totalPages, 'left');
  };

  const prevSlide = () => {
    setPrevPulse(true);
    setTimeout(() => setPrevPulse(false), 500);
    goTo((displayIndex - 1 + totalPages) % totalPages, 'right');
  };

  const visibleGuests = podcastGuests.slice(
    displayIndex * itemsPerPage,
    (displayIndex + 1) * itemsPerPage
  );

  const slideStyle: React.CSSProperties =
    phase === 'exit'
      ? {
          transition: 'transform 300ms ease, opacity 300ms ease',
          transform: `translateX(${direction === 'left' ? '-80px' : '80px'})`,
          opacity: 0,
        }
      : phase === 'enter-init'
      ? {
          transition: 'none',
          transform: `translateX(${direction === 'left' ? '80px' : '-80px'})`,
          opacity: 0,
        }
      : {
          transition: 'transform 350ms ease, opacity 350ms ease',
          transform: 'translateX(0)',
          opacity: 1,
        };

  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative px-14 overflow-hidden">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-white/20 text-white flex items-center justify-center backdrop-blur-sm"
        style={{
          backgroundColor: prevPulse ? '#f97316' : 'rgba(0,0,0,0.6)',
          borderColor: prevPulse ? '#f97316' : 'rgba(255,255,255,0.2)',
          transition: prevPulse ? 'background-color 0ms, border-color 0ms' : 'background-color 500ms ease, border-color 500ms ease',
        }}
        aria-label="Previous"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6"
        style={{ ...slideStyle }}
      >
        {visibleGuests.map((guest) => (
          <div key={guest.id} className="text-center group">
            <div className="relative w-full rounded-lg overflow-hidden">
              {/* Portrait Image */}
              <img
                src={guest.image}
                alt={guest.name}
                className="w-full h-auto"
                loading="eager"
                fetchPriority="high"
              />
              
              {/* Hover Overlay with Template/Compass */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src="/Media/hp/Homepage Episode Tiles/Template.webp"
                  alt="Episode overlay"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-white/20 text-white flex items-center justify-center backdrop-blur-sm"
        style={{
          backgroundColor: nextPulse ? '#f97316' : 'rgba(0,0,0,0.6)',
          borderColor: nextPulse ? '#f97316' : 'rgba(255,255,255,0.2)',
          transition: nextPulse ? 'background-color 0ms, border-color 0ms' : 'background-color 500ms ease, border-color 500ms ease',
        }}
        aria-label="Next"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx, idx > displayIndex ? 'left' : 'right')}
            className={`w-2 h-2 rounded-full transition ${
              idx === displayIndex ? "bg-orange-500 w-8" : "bg-gray-600"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
