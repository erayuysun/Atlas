import Footer from "@/components/Footer";
import TripEssentials from "@/components/TripEssentials";
import KnowBeforeYouGo from "@/components/KnowBeforeYouGo";
import KenyaDetails from "@/components/KenyaDetails";

export default function KenyaPage() {
  return (
    <div className="overflow-x-hidden bg-[#0a0a0a] text-white">

      {/* Hero */}
      <section className="relative -mt-16 h-[calc(66.67vw+4rem)] max-h-[100svh] w-full overflow-hidden md:h-auto min-[1030px]:-mt-20">
        <img src="/Media/Kenya/hero.webp" alt="Kenya paragliding" className="absolute inset-0 h-full w-full object-cover object-top md:relative md:h-auto"/>
        <div className="absolute inset-0" style={{background:"linear-gradient(to bottom,rgba(10,10,10,0.35) 0%,transparent 18%,transparent 50%,rgba(10,10,10,0.55) 75%,rgba(10,10,10,0.92) 92%,#0a0a0a 100%)"}}/>
        <div className="absolute top-0 left-0 px-4 md:px-14 pt-20 md:pt-32">
          <h1 className="text-4xl md:text-9xl tracking-widest leading-none mb-2" style={{fontFamily:"var(--font-barlow)",fontWeight:300,textShadow:"0 2px 20px rgba(0,0,0,0.5)"}}>KENYA</h1>
          <p className="text-base md:text-2xl lg:text-3xl text-gray-200 font-light leading-snug" style={{textShadow:"0 1px 8px rgba(0,0,0,0.7)"}}>
            Fly where humankind first walked<br/>Rift Valley&#39;s endless skies await
          </p>
        </div>
        <div className="absolute bottom-[5%] left-0 w-1/2 h-[30%] md:h-[40%] bg-contain bg-no-repeat bg-left-bottom pointer-events-none" style={{backgroundImage:"url('/Media/Kenya/footprints.webp')"}}/>
      </section>

      {/* Tagline */}
      <div className="border-t border-orange-500/20 bg-[#0a0a0a]">
        <p className="text-center text-orange-500 text-sm md:text-base font-medium italic py-5 px-4">
          Ona Kenya kama Miungu walivyoiona &#8211; See Kenya as the Gods saw it.
        </p>
      </div>

      {/* 5-row zigzag grid */}
      <section className="relative isolate overflow-hidden px-4 md:px-10 py-8 space-y-3">

        <img
          src="/Media/Kenya/BackGorun%20figures/afrika-white.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-48 min-[451px]:top-64 md:top-[22rem] z-0 w-[85%] max-w-4xl -translate-x-1/2 opacity-10"
        />

        {/* Row 1 — text left, image right */}
        <div className="relative z-10 flex h-56 max-[450px]:h-40 md:h-80">
          <div className="w-1/2 flex items-center justify-end">
            <div className="w-4/5 border border-white/30 rounded-l-xl border-r-0 flex flex-col items-center justify-center py-14 max-[450px]:py-6 px-5 md:px-8 text-center">
              <p className="text-orange-500 text-xs max-[450px]:text-[8px] md:text-sm tracking-[0.2em] uppercase mb-3">Kenya · East Africa</p>
              <p className="text-white text-2xl max-[450px]:text-base md:text-4xl tracking-widest" style={{fontFamily:"var(--font-barlow)",fontWeight:300}}>Rift Valley</p>
              <p className="text-gray-300 text-sm max-[450px]:text-[11px] md:text-base tracking-widest mt-2" style={{fontFamily:"var(--font-barlow)"}}>National Park</p>
            </div>
          </div>
          <div className="w-1/2 rounded-xl overflow-hidden relative">
            <img src="/Media/Kenya/row1.webp" alt="Kenya map" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 rounded-xl" style={{background:"linear-gradient(to right, rgba(10,10,10,0.55) 0%, transparent 40%)"}}/>
          </div>
        </div>

        {/* Row 2 — image left, text right */}
        <div className="relative z-10 flex h-56 max-[450px]:h-40 md:h-80">
          <div className="w-1/2 rounded-xl overflow-hidden relative">
            <img src="/Media/Kenya/row2.webp" alt="Rift Valley" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 rounded-xl" style={{background:"linear-gradient(to left, rgba(10,10,10,0.55) 0%, transparent 40%)"}}/>
          </div>
          <div className="w-1/2 flex items-center justify-start">
            <div className="w-4/5 border border-white/30 rounded-r-xl border-l-0 flex flex-col items-center justify-center py-14 max-[450px]:py-6 px-5 md:px-8 text-center">
              <p className="text-orange-500 text-xs max-[450px]:text-[8px] md:text-sm tracking-[0.2em] uppercase mb-3">Paragliding Area</p>
              <p className="text-white text-2xl max-[450px]:text-base md:text-4xl tracking-widest" style={{fontFamily:"var(--font-barlow)",fontWeight:300}}>Kijabe Hill</p>
              <p className="text-gray-300 text-sm max-[450px]:text-[11px] md:text-base tracking-widest mt-2" style={{fontFamily:"var(--font-barlow)"}}>Mt. Longonot Crater</p>
            </div>
          </div>
        </div>

        {/* Row 3 — text left, image right */}
        <div className="relative z-10 flex h-56 max-[450px]:h-40 md:h-80">
          <div className="w-1/2 flex items-center justify-end">
            <div className="w-4/5 border border-white/30 rounded-l-xl border-r-0 flex flex-col items-center justify-center py-14 max-[450px]:py-6 px-5 md:px-8 text-center">
              <p className="text-orange-500 text-xs max-[450px]:text-[8px] md:text-sm tracking-[0.2em] uppercase mb-3">Scenic Highland</p>
              <p className="text-white text-2xl max-[450px]:text-base md:text-4xl tracking-widest" style={{fontFamily:"var(--font-barlow)",fontWeight:300}}>Machakos Hills</p>
              <p className="text-gray-300 text-sm max-[450px]:text-[11px] md:text-base tracking-widest mt-2" style={{fontFamily:"var(--font-barlow)"}}>South-Eastern Kenya</p>
            </div>
          </div>
          <div className="w-1/2 rounded-xl overflow-hidden relative">
            <img src="/Media/Kenya/row3.webp" alt="Kijabe Hill" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 rounded-xl" style={{background:"linear-gradient(to right, rgba(10,10,10,0.55) 0%, transparent 40%)"}}/>
          </div>
        </div>

        {/* Row 4 — image left, text right */}
        <div className="relative z-10 flex h-56 max-[450px]:h-40 md:h-80">
          <div className="w-1/2 rounded-xl overflow-hidden relative">
            <img src="/Media/Kenya/row4.webp" alt="Machakos Hills" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 rounded-xl" style={{background:"linear-gradient(to left, rgba(10,10,10,0.55) 0%, transparent 40%)"}}/>
          </div>
          <div className="w-1/2 flex items-center justify-start">
            <div className="w-4/5 border border-white/30 rounded-r-xl border-l-0 flex flex-col items-center justify-center py-14 max-[450px]:py-6 px-5 md:px-8 text-center">
              <p className="text-orange-500 text-xs max-[450px]:text-[8px] md:text-sm tracking-[0.2em] uppercase mb-3">Safari Route</p>
              <p className="text-white text-2xl max-[450px]:text-base md:text-4xl tracking-widest" style={{fontFamily:"var(--font-barlow)",fontWeight:300}}>Chyulu Hills</p>
              <p className="text-gray-300 text-sm max-[450px]:text-[11px] md:text-base tracking-widest mt-2" style={{fontFamily:"var(--font-barlow)"}}>Volcanic Range · 2,188m</p>
            </div>
          </div>
        </div>

        {/* Row 5 — text left, image right */}
        <div className="relative z-10 flex h-56 max-[450px]:h-40 md:h-80">
          <div className="w-1/2 flex items-center justify-end">
            <div className="w-4/5 border border-white/30 rounded-l-xl border-r-0 flex flex-col items-center justify-center py-14 max-[450px]:py-6 px-5 md:px-8 text-center">
              <p className="text-orange-500 text-xs max-[450px]:text-[8px] md:text-sm tracking-[0.2em] uppercase mb-3">Young Lava Fields</p>
              <p className="text-white text-2xl max-[450px]:text-base md:text-4xl tracking-widest" style={{fontFamily:"var(--font-barlow)",fontWeight:300}}>Kerio Valley</p>
              <p className="text-gray-300 text-sm max-[450px]:text-[11px] md:text-base tracking-widest mt-2" style={{fontFamily:"var(--font-barlow)"}}>Great Rift Valley · 900m</p>
            </div>
          </div>
          <div className="w-1/2 rounded-xl overflow-hidden relative">
            <img src="/Media/Kenya/row5.webp" alt="Chyulu Hills" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 rounded-xl" style={{background:"linear-gradient(to right, rgba(10,10,10,0.55) 0%, transparent 40%)"}}/>
          </div>
        </div>

      </section>

      {/* Headline block */}
      <div className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h2 className="text-orange-500 text-2xl md:text-4xl font-bold mb-4">A Flight of Human Genesis</h2>
        <p className="text-gray-400 text-base md:text-lg">Glide Over Lands Where Humanity Took It&#39;s First Steps</p>
      </div>

      {/* Trip Essentials accordion */}
      <div className="container relative isolate mx-auto px-4 pb-16 md:pb-20">
        <img
          src="/Media/Kenya/BackGorun%20figures/elephant-white.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 -top-28 md:-top-44 z-0 w-[90%] max-w-4xl translate-x-[33.333%] opacity-5"
          style={{ clipPath: "inset(0 33.333% 0 0)" }}
        />
        <div className="relative z-10">
          <TripEssentials />
        </div>
      </div>

      {/* Know Before You Go accordion */}
      <div className="container mx-auto px-4 pb-16 md:pb-20">
        <KnowBeforeYouGo />
      </div>

      {/* Trip details + gallery */}
      <div className="container mx-auto px-4 md:pb-20">
        <KenyaDetails />
      </div>

      {/* CTA */}
      <section className="container mx-auto px-4 py-6 md:py-24">
        <div className="rounded-2xl border border-orange-500/20 bg-[#111] px-5 py-7 text-center md:px-8 md:py-14">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-orange-500 md:text-sm">Ready to Fly?</p>
          <h2 className="mb-4 text-2xl font-bold md:text-4xl">Book Your Kenya Expedition</h2>
          <p className="mx-auto mb-6 max-w-xl text-sm text-gray-400 md:mb-8 md:text-base">Limited spots per season. Get in touch to reserve your place on the next departure.</p>
          <a href="https://w.app/paragliding" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white pl-2 pr-6 py-3 rounded-full transition-all duration-300 font-semibold">
            <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
            </span>
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

