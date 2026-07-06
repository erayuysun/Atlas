"use client";

import { useState } from "react";

const TABS = ["Overview"] as const;
type Tab = typeof TABS[number];

type InfoTab = "FAQ" | "Requirements" | "Payment" | "Insurance" | "Cancellation";
const INFO_TABS: InfoTab[] = ["FAQ", "Requirements", "Payment", "Insurance", "Cancellation"];

const FAQ_ITEMS = [
  { q: "What skillset and fitness level are required?", a: "" },
  { q: "What equipment is provided?", a: "" },
  { q: "Will I get my own guide?", a: "" },
  { q: "Will the expedition cost include travel?", a: "" },
];

const KEY_TAKEAWAYS = "• Flying altitudes: 1,000–2,000m (takeoffs) up to 4,000m (cold at height)\n• Kenyan conditions are stronger than most home sites – bring reliable gear\n• 2m radio (144–146 MHz) from quality brands – avoid Baofeng\n• Health: No mandatory vaccines for Europe/US; malaria low in dry season (Jan-Feb) above 2,000m\n• Helicopter rescue and good healthcare available";

const REQUIREMENTS_ITEMS = [
  { q: "Clothing: What to pack", a: "" },
  { q: "Equipment: Trustworthy gear", a: "" },
  { q: "Health: Preparation & local realities", a: "" },
];

const INFO_CONTENT: Record<InfoTab, string> = {
  FAQ: "",
  Requirements: "Requirements content will appear here.",
  Payment: "Payment details and options will appear here.",
  Insurance: "Insurance information and requirements will appear here.",
  Cancellation: "Cancellation policy details will appear here.",
};

const GALLERY = [
  "/Media/Kenya/Gallery/1.webp",
  "/Media/Kenya/Gallery/2.webp",
  "/Media/Kenya/Gallery/3.webp",
  "/Media/Kenya/Gallery/4.webp",
  "/Media/Kenya/Gallery/5.webp",
  "/Media/Kenya/Gallery/6.webp",
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
  const [virtualSlide, setVirtualSlide] = useState(0);
  const slide = ((virtualSlide % GALLERY.length) + GALLERY.length) % GALLERY.length;
  const [infoTab, setInfoTab] = useState<InfoTab>("FAQ");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openReq, setOpenReq] = useState<number | null>(null);
  const [takeawaysOpen, setTakeawaysOpen] = useState(false);
  const [itineraryTab, setItineraryTab] = useState<"Atlas Itinerary" | "What's Included">("Atlas Itinerary");
  const [uniqueOpen, setUniqueOpen] = useState(false);

  const prev = () => setVirtualSlide(i => i - 1);
  const next = () => setVirtualSlide(i => i + 1);

  return (
    <div>

      {/* Tab bar + Enquire Now */}
      <div className="relative z-20 flex h-14 min-h-14 items-center overflow-hidden rounded-[14px] bg-[#222] opacity-100">
        <div className="flex overflow-x-auto flex-1">
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`h-full flex-shrink-0 px-6 lg:px-8 text-sm md:text-base lg:text-xl font-semibold tracking-wide whitespace-nowrap outline-none focus:outline-none ${
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
            className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white pl-1.5 pr-4 py-1.5 lg:pl-2 lg:pr-5 lg:py-2.5 rounded-full transition font-semibold text-xs lg:text-sm whitespace-nowrap"
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
            <p className="text-white font-bold text-sm lg:text-xl mb-3">{s.label}</p>
            <p className="text-gray-400 text-xs lg:text-base leading-relaxed whitespace-pre-line">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Gallery — landscape fan/strip carousel with infinite loop */}
      <div className="relative mt-6 select-none w-screen ml-[calc(50%-50vw)]">
        {/* Fan strip */}
        <div className="relative h-48 md:h-[42vw] max-h-[600px] flex items-center justify-center" style={{ perspective: "1400px" }}>
          {GALLERY.map((src, i) => {
            // Compute shortest circular offset so loop feels seamless
            let offset = i - slide;
            const half = GALLERY.length / 2;
            if (offset > half)  offset -= GALLERY.length;
            if (offset < -half) offset += GALLERY.length;
            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;
            const rotateY = offset * 26;
            const translateX = offset * 52;
            const translateZ = isCenter ? 0 : -100 - absOffset * 40;
            const scale = isCenter ? 1 : 1 - absOffset * 0.18;
            const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.25;
            const zIndex = GALLERY.length - absOffset;
            return (
              <button
                key={src}
                onClick={() => setVirtualSlide(v => v + offset)}
                className="absolute rounded-xl overflow-hidden focus:outline-none"
                style={{
                  width: "clamp(220px, 52vw, 760px)",
                  aspectRatio: "16/9",
                  transform: `translateX(${translateX}%) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  transition: "all 0.45s cubic-bezier(0.25,0.46,0.45,0.94)",
                  boxShadow: isCenter ? "0 20px 60px rgba(0,0,0,0.7)" : "0 8px 30px rgba(0,0,0,0.5)",
                }}
              >
                <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" draggable={false}/>
                {!isCenter && <div className="absolute inset-0 bg-black/40"/>}
              </button>
            );
          })}
        </div>

        {/* Dot indicators + arrows */}
        <div className="flex items-center justify-center gap-4 pt-5">
          <button onClick={prev} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition" aria-label="Previous">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div className="flex gap-1.5">
            {GALLERY.map((_, i) => {
              // shortest-path jump so loop direction is always coherent
              let d = i - slide;
              if (d > GALLERY.length / 2)  d -= GALLERY.length;
              if (d < -GALLERY.length / 2) d += GALLERY.length;
              return <button key={i} onClick={() => setVirtualSlide(v => v + d)} className={`rounded-full transition-all ${i === slide ? "bg-orange-500 w-4 h-1.5" : "bg-gray-600 w-1.5 h-1.5"}`}/>;
            })}
          </div>
          <button onClick={next} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition" aria-label="Next">
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      {/* Season Packages */}
      <div className="relative isolate mt-10 pt-[10vw] text-center">
        <img
          src="/Media/Kenya/BackGorun%20figures/pngtree-majestic-african-acacia-tree-png-image_19976616%20(1).webp"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-0 w-[90%] max-w-[840px] -translate-x-1/2 saturate-50 brightness-110 contrast-90 opacity-25"
          style={{
            clipPath: "inset(0 0 25% 50%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 50%, black 58%, black 90%, transparent 100%), linear-gradient(to bottom, black 0%, black 60%, transparent 75%)",
            WebkitMaskComposite: "source-in",
            maskImage:
              "linear-gradient(to right, transparent 50%, black 58%, black 90%, transparent 100%), linear-gradient(to bottom, black 0%, black 60%, transparent 75%)",
            maskComposite: "intersect",
          }}
        />
        <h2 className="relative z-10 text-orange-500 font-bold text-2xl lg:text-4xl mb-2">2026 Season Packages</h2>
        <p className="relative z-10 text-gray-400 text-base lg:text-xl">Please see the packages we offer for the 2026 season below.</p>
      </div>

      <div  className="mt-[10vw] flex flex-col gap-10 px-2">
        {[
          { name: "Adventure Tour 1", dates: "19th Jan to 1st Feb 2027" },
          { name: "Adventure Tour 2", dates: "3rd Feb  to 15th Feb 2027" },
          { name: "Adventure Tour 3", dates: "18th Feb to 1st Mar 2027" },
        ].map((pkg) => (
          <div key={pkg.name} className="flex items-center justify-between px-4 py-5 hover:bg-gray-800 transition rounded-lg cursor-pointer"> 
            <span className="text-base font-bold text-white lg:text-3xl">{pkg.name}</span>
            <span className="text-base text-white lg:text-3xl">{pkg.dates}</span>
          </div>
        ))}
      </div>

      {/* FAQ / Requirements / Payment / Insurance / Cancellation tab bar */}
      <div className="mt-[8vw]  flex overflow-x-auto bg-[#1a1a1a] rounded-2xl p-1 gap-1">
        {INFO_TABS.map(t => (
          <button
            key={t}
            onClick={() => setInfoTab(t)}
            className={`flex-1 py-4 lg:py-5 text-sm lg:text-lg font-semibold tracking-wide whitespace-nowrap transition-colors outline-none focus:outline-none rounded-2xl ${
              infoTab === t ? "text-orange-500 bg-[#2a2a2a]" : "text-gray-400 hover:text-white hover:bg-[#252525]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Info tab content */}
      <div className="px-2 py-8">
        {infoTab === "FAQ" ? (
          <div className="flex flex-col divide-y divide-white/10">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 px-4 text-left outline-none group rounded-xl transition-all duration-200 hover:bg-[#1a1a1a] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.5),_0_0_30px_rgba(255,255,255,0.25),_0_0_60px_rgba(255,255,255,0.12)]"
                >
                  <span className="text-white text-base lg:text-xl font-semibold">
                    {i + 1}. {item.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-orange-500 flex-shrink-0 ml-4 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && item.a && (
                  <p className="pb-5 text-gray-400 text-sm lg:text-base leading-relaxed">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        ) : infoTab === "Requirements" ? (
          <div className="flex flex-col divide-y divide-white/10">
            {REQUIREMENTS_ITEMS.map((item, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenReq(openReq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 px-4 text-left outline-none rounded-xl transition-all duration-200 hover:bg-[#1a1a1a] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.5),_0_0_30px_rgba(255,255,255,0.25),_0_0_60px_rgba(255,255,255,0.12)]"
                >
                  <span className="text-white text-base lg:text-xl font-semibold">{item.q}</span>
                  <svg
                    className={`w-5 h-5 text-orange-500 flex-shrink-0 ml-4 transition-transform ${openReq === i ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openReq === i && item.a && (
                  <p className="pb-5 text-gray-400 text-sm lg:text-base leading-relaxed whitespace-pre-line">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 text-base lg:text-xl leading-relaxed">{INFO_CONTENT[infoTab]}</p>
        )}
      </div>

      {/* Key Takeaways standalone accordion */}
      <div className="relative isolate mt-6 border-t border-white/10">
        <button
          onClick={() => setTakeawaysOpen(o => !o)}
          className="relative z-10 w-full flex items-center justify-between py-5 px-4 text-left outline-none rounded-xl transition-all duration-200 hover:bg-[#1a1a1a] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.5),_0_0_30px_rgba(255,255,255,0.25),_0_0_60px_rgba(255,255,255,0.12)]"
        >
          <span className="text-white text-base lg:text-xl font-semibold">Key Takeaways: Before You Fly</span>
          <svg
            className={`w-5 h-5 text-orange-500 flex-shrink-0 ml-4 transition-transform ${takeawaysOpen ? "rotate-180" : ""}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {takeawaysOpen && (
          <div className="relative z-10 pb-5 flex flex-col gap-4 pl-6">
            {KEY_TAKEAWAYS.split("\n").map((line, i) => (
              <p key={i} className="text-gray-200 text-base lg:text-lg">{line}</p>
            ))}
          </div>
        )}
      </div>

      {/* Itinerary Section */}
      <div className="mt-10 border border-gray-600 rounded-3xl p-8 lg:p-14">
        {/* Tab headers */}
        <div className="flex border-b rounded-3xl border-gray-700 mb-10">
          {(["Atlas Itinerary", "What's Included"] as const).map(t => (
            <button
              key={t}
              onClick={() => setItineraryTab(t)}
              className={`flex-1 pb-5 text-lg lg:text-2xl font-semibold tracking-wide transition-all outline-none focus:outline-none focus-visible:outline-none rounded-lg hover:bg-white/10 hover:text-white ${
                itineraryTab === t ? "text-white border-b-2 py-4 border-orange-500" : "text-gray-500 hover:text-gray-300  "
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {itineraryTab === "Atlas Itinerary" ? (
          <>
            <p className="text-gray-400 text-base lg:text-lg mb-4">This tried and tested itinerary is formed by decades of flying experience.</p>
            <p className="text-gray-400 text-base lg:text-lg mb-4">As with all adventurous activities of this type, circumstances may arise where Paragliding Atlas is forced to make alterations, possibly at short notice.</p>
            <p className="text-gray-400 text-base lg:text-lg mb-10">While making every effort to adhere to this published schedule, we kindly ask for your patience if the weather or other naturally occurring circumstances intervene.</p>

            <p className="text-orange-500 font-bold text-xl lg:text-3xl mb-8">Our Flying Plans</p>

            <div className="grid grid-cols-2 gap-x-10 gap-y-8">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="py-2">
                  <p className="text-orange-500 font-bold italic text-lg lg:text-2xl mb-2">Day {i + 1}</p>
                  <p className="text-gray-500 text-base lg:text-lg">Arrival in Nairobi &amp; transfer to the hotel.</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="text-gray-400 text-base lg:text-lg">What&apos;s included content will appear here.</p>
        )}
      </div>

      {/* What Makes Paragliding Atlas Unique — accordion */}
      <div className="mt-6 border-white/10">
        <button
          onClick={() => setUniqueOpen(o => !o)}
          className="border border-white/20 w-full flex items-center justify-between py-5 px-4 text-left outline-none rounded-xl transition-all duration-200 hover:bg-[#1a1a1a] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.5),_0_0_30px_rgba(255,255,255,0.25),_0_0_60px_rgba(255,255,255,0.12)]"
        >
          <span className="text-white text-base lg:text-xl font-semibold text-center w-full">What Makes Paragliding Atlas Unique?</span>
          <svg
            className={`w-5 h-5 text-orange-500 flex-shrink-0 ml-4 transition-transform ${uniqueOpen ? "rotate-180" : ""}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {uniqueOpen && (
          <div className="pb-8">
            <p className=" pt-10  text-white font-semibold text-sm lg:text-base text-center max-w-3xl mx-auto mb-14 leading-relaxed">
              Experience intimate, expert led flying in world class destinations. Skip the crowds with small group tours in iconic skies over untamed terrains, fully guided from launch to landing and beyond
            </p>

            <div className="border-t border-white/10 pt-10 grid grid-cols-2 gap-8 mb-14">
              <div className="text-center">
                <p className="text-white font-bold text-base lg:text-xl mb-3">Because We Care to Share</p>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  Sharing our passion for the art of flight isn&apos;t just meaningful, it&apos;s our purpose. We go the extra mile because your breakthroughs, safety, and joy in the skies matter to us. And this goodwill soars beyond just the skies: By flying with us, you help uplift local communities through welfare, training, and opportunities for the next generation. Join us to turn your flights into lasting impact.
                </p>
              </div>
              <div className="text-center">
                <p className="text-orange-500 font-bold text-base lg:text-xl mb-3">Flight Safety – First &amp; Always</p>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  In aviation, there&apos;s a saying: if it&apos;s controllable, then control it. We don&apos;t leave things to chance, because when the air is perfect, flying feels effortless. But when turbulence hits, Paragliding Atlas has your back. On-site fixes, weather mastery, and rescue readiness mean we master every detail beforehand, ensuring that you stay safe aloft so you can soar worry free and have a trip of a lifetime.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-white font-bold text-base lg:text-xl mb-3">Exclusive Journeys</p>
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-xl mx-auto">
                We&apos;re a group of like minded Pilots who meticulously craft each trip with passion, creativity, and teamwork. We handcraft each one of our tours with obsessive precision so Paragliding Atlas delivers flights that feel like they were dreamed up just for your soul.
              </p>
            </div>
          </div>
        )}
      </div>


      <style>{`@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }`}</style>
    </div>
  );
}
