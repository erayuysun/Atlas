"use client";

import { useState, useRef, useEffect } from "react";

const podcastGuests = [
  {
    id: 1,
    image: "/Media/hp/Homepage Episode Tiles/a (1).png",
    title: "FIELD PROTOCOLS FOR REWIRING RISK INTUITION",
    name: "WILL GADD"
  },
  {
    id: 2,
    image: "/Media/hp/Homepage Episode Tiles/a (2).png",
    title: "CHALLENGES, CHANGE & FUTURE OF PARAGLIDING",
    name: "PAL TAKATS"
  },
  {
    id: 3,
    image: "/Media/hp/Homepage Episode Tiles/a (3).png",
    title: "FLYING TO WIN",
    name: "HONORIN HAMARD"
  },
  {
    id: 4,
    image: "/Media/hp/Homepage Episode Tiles/a (4).png",
    title: "THE JOURNEY WITHIN MAPPING OUR QUEST",
    name: "MAXIME PINOT"
  },
  {
    id: 5,
    image: "/Media/hp/Homepage Episode Tiles/a (5).png",
    title: "MASTER FEAR, BUILD RESILIENCE & FIND JOY",
    name: "KINGA MASZTALERZ"
  },
  {
    id: 6,
    image: "/Media/hp/Homepage Episode Tiles/a (6).png",
    title: "UNTOLD TRUTH ABOUT RESERVE DEPLOYMENT",
    name: "URS HAARI"
  },
  {
    id: 7,
    image: "/Media/hp/Homepage Episode Tiles/a (7).png",
    title: "EPISODE 7",
    name: "GUEST NAME 7"
  },
  {
    id: 8,
    image: "/Media/hp/Homepage Episode Tiles/a (8).png",
    title: "EPISODE 8",
    name: "GUEST NAME 8"
  },
  {
    id: 9,
    image: "/Media/hp/Homepage Episode Tiles/a (9).png",
    title: "EPISODE 9",
    name: "GUEST NAME 9"
  },
  {
    id: 10,
    image: "/Media/hp/Homepage Episode Tiles/a (10).png",
    title: "EPISODE 10",
    name: "GUEST NAME 10"
  },
  {
    id: 11,
    image: "/Media/hp/Homepage Episode Tiles/a (11).png",
    title: "EPISODE 11",
    name: "GUEST NAME 11"
  }
];

export default function PodcastCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const itemsPerPage = 5;
  const totalPages = Math.ceil(podcastGuests.length / itemsPerPage);

  const goTo = (newIndex: number, dir: 'left' | 'right') => {
    if (sliding) return;
    setDirection(dir);
    setSliding(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setSliding(false);
    }, 400);
  };

  const nextSlide = () => {
    goTo((currentIndex + 1) % totalPages, 'left');
  };

  const prevSlide = () => {
    goTo((currentIndex - 1 + totalPages) % totalPages, 'right');
  };

  const visibleGuests = podcastGuests.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const slideStyle: React.CSSProperties = {
    transition: sliding ? 'none' : 'transform 400ms ease, opacity 400ms ease',
    transform: sliding
      ? `translateX(${direction === 'left' ? '-60px' : '60px'})`
      : 'translateX(0)',
    opacity: sliding ? 0 : 1,
  };

  return (
    <div className="relative px-14">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
        aria-label="Previous"
      >
        ←
      </button>

      {/* Carousel Container */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6" style={slideStyle}>
        {visibleGuests.map((guest) => (
          <div key={guest.id} className="text-center group">
            <div className="relative w-full rounded-lg overflow-hidden">
              {/* Portrait Image */}
              <img
                src={guest.image}
                alt={guest.name}
                className="w-full h-auto"
              />
              
              {/* Hover Overlay with Template/Compass */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src="/Media/hp/Homepage Episode Tiles/Template.png"
                  alt="Episode overlay"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
        aria-label="Next"
      >
        →
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx, idx > currentIndex ? 'left' : 'right')}
            className={`w-2 h-2 rounded-full transition ${
              idx === currentIndex ? "bg-orange-500 w-8" : "bg-gray-600"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
