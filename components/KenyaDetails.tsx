"use client";

import { useState } from "react";

const TABS = ["Overview", "Gallery", "Details", "Practical Info", "Enquire Now"] as const;
type Tab = typeof TABS[number];

const GALLERY = [
  "/Media/Kenya/hero.png",
  "/Media/Kenya/row2.png",
  "/Media/Kenya/row3.png",
  "/Media/Kenya/row4.png",
  "/Media/Kenya/row5.png",
  "/Media/Kenya/eh/row1.png",
  "/Media/Kenya/eh/row2.png",
  "/Media/Kenya/eh/row3.png",
  "/Media/Kenya/eh/row4.png",
  "/Media/Kenya/eh/row5.png",
];

const STATS = [
  { label: "Base Location",     value: "Kerio Valley" },
  { label: "Adventure Span",    value: "12 Days" },
  { label: "Pilot Rating",      value: "IPPI 2 Or Equivalent\nAPPI/National License" },
  { label: "Avg. Altitude",     value: "1500mtr AGL" },
  { label: "Expected Airtime",  value: "2-7 Hours/Flight" },
  { label: "Skill Level",       value: "Self Launch & Outlanding\nCapabilities Needed" },
];

export default function KenyaDetails() {
  const [tab, setTab] = useState<Tab>("Overview");
  const [slide, setSlide] = useState(0);

  const prev = () => setSlide(i => (i - 1 + GALLERY.length) % GALLERY.length);
  const next = () => setSlide(i => (i + 1) % GALLERY.length);

  return (
    <div className="rounded-2xl overflow-hidden">

      {/* Tab bar */}
      <div className="flex overflow-x-auto bg-[#222] rounded-2xl">
        {TABS.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-shrink-0 px-5 py-3.5 text-xs md:text-sm font-semibold tracking-wide transition-colors whitespace-nowrap ${
              tab === t
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Overview */}
      {tab === "Overview" && (
        <div className="bg-[#0d0d0d] grid grid-cols-2 md:grid-cols-3 gap-0">
          {STATS.map((s) => (
            <div key={s.label} className="px-6 py-6">
              <p className="text-white text-xs font-semibold mb-2">{s.label}</p>
              <p className="text-gray-400 text-xs leading-relaxed whitespace-pre-line">{s.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Gallery slideshow */}
      {tab === "Gallery" && (
        <div className="bg-[#0d0d0d] relative">
          <div className="relative aspect-[16/9] overflow-hidden">
            <img
              key={slide}
              src={GALLERY[slide]}
              alt={`Gallery ${slide + 1}`}
              className="w-full h-full object-cover"
              style={{ animation: "fadeIn 0.4s ease" }}
            />
            {/* Gradient sides */}
            <div className="absolute inset-0 pointer-events-none" style={{background:"linear-gradient(to right, rgba(10,10,10,0.4) 0%, transparent 15%, transparent 85%, rgba(10,10,10,0.4) 100%)"}}/>

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 flex items-center justify-center transition"
              aria-label="Previous"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 flex items-center justify-center transition"
              aria-label="Next"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            {/* Counter */}
            <div className="absolute bottom-3 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
              {slide + 1} / {GALLERY.length}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 py-3">
            {GALLERY.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`rounded-full transition-all ${i === slide ? "bg-orange-500 w-4 h-1.5" : "bg-gray-600 w-1.5 h-1.5"}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Details */}
      {tab === "Details" && (
        <div className="bg-[#0d0d0d] px-8 py-10 text-center">
          <p className="text-gray-400 text-sm">Trip details coming soon.</p>
        </div>
      )}

      {/* Practical Info */}
      {tab === "Practical Info" && (
        <div className="bg-[#0d0d0d] px-8 py-10 text-center">
          <p className="text-gray-400 text-sm">Practical information coming soon.</p>
        </div>
      )}

      {/* Enquire Now */}
      {tab === "Enquire Now" && (
        <div className="bg-[#0d0d0d] px-8 py-10 text-center">
          <p className="text-gray-400 text-sm mb-6">Ready to book? Get in touch with us directly.</p>
          <a
            href="https://w.app/paragliding"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white pl-2 pr-6 py-2.5 rounded-full transition font-semibold text-sm"
          >
            <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
              </svg>
            </span>
            Contact Us
          </a>
        </div>
      )}

      <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
    </div>
  );
}
