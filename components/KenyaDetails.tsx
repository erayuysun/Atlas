"use client";

import { useState } from "react";

const TABS = ["Overview"] as const;
type Tab = typeof TABS[number];

const GALLERY = [
  "/Media/Kenya/Gallery/1.jpg",
  "/Media/Kenya/Gallery/2.jpg",
  "/Media/Kenya/Gallery/3.jpg",
  "/Media/Kenya/Gallery/4.jpg",
  "/Media/Kenya/Gallery/5.jpg",
  "/Media/Kenya/Gallery/6.jpg",
];

const STATS = [
  { label: "Base Location",    value: "Kerio Valley" },
  { label: "Adventure Span",   value: "12 Days" },
  { label: "Pilot Rating",     value: "IPPI 2 Or Equivalent\nAPPI/National License" },
  { label: "Avg. Altitude",    value: "1500mtr AGL" },
  { label: "Expected Airtime", value: "2-7 Hours/Flight" },
  { label: "Skill Level",      value: "Self Launch & Outlanding\nCapabilities Needed" },
];

export default function KenyaDetails() {
  const [tab, setTab] = useState<Tab>("Overview");
  const [slide, setSlide] = useState(0);

  const prev = () => setSlide(i => (i - 1 + GALLERY.length) % GALLERY.length);
  const next = () => setSlide(i => (i + 1) % GALLERY.length);

  return (
    <div>

      {/* Tab bar + Enquire Now */}
      <div className="flex items-center bg-[#222] rounded-2xl overflow-hidden">
        <div className="flex overflow-x-auto flex-1">
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-shrink-0 px-5 py-3.5 text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap outline-none focus:outline-none ${
                tab === t
                  ? "text-orange-500"
                  : "text-gray-400 hover:text-white transition-colors"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        {/* Enquire Now — orange pill button */}
        <div className="flex-shrink-0 px-3">
          <a
            href="https://w.app/paragliding"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white pl-1.5 pr-4 py-1.5 rounded-full transition font-semibold text-xs whitespace-nowrap"
          >
            <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
              </svg>
            </span>
            Enquire Now
          </a>
        </div>
      </div>

      {/* Overview content — always visible */}
      <div className="grid grid-cols-3 px-4 py-6">
        {STATS.map((s) => (
          <div key={s.label} className="px-4 py-6 text-center">
            <p className="text-white font-bold text-sm mb-3">{s.label}</p>
            <p className="text-gray-400 text-xs leading-relaxed whitespace-pre-line">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Gallery — always visible below tab content */}
      <div className="relative mt-4">
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
          <img
            key={slide}
            src={GALLERY[slide]}
            alt={`Gallery ${slide + 1}`}
            className="w-full h-full object-cover"
            style={{ animation: "fadeIn 0.4s ease" }}
          />
          <div className="absolute inset-0 pointer-events-none" style={{background:"linear-gradient(to right,rgba(10,10,10,0.4) 0%,transparent 15%,transparent 85%,rgba(10,10,10,0.4) 100%)"}}/>
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 flex items-center justify-center transition" aria-label="Previous">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 flex items-center justify-center transition" aria-label="Next">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </button>
          <div className="absolute bottom-3 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded-full">{slide + 1} / {GALLERY.length}</div>
        </div>
        <div className="flex justify-center gap-1.5 py-3">
          {GALLERY.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} className={`rounded-full transition-all ${i === slide ? "bg-orange-500 w-4 h-1.5" : "bg-gray-600 w-1.5 h-1.5"}`}/>
          ))}
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }`}</style>
    </div>
  );
}
