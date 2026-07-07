"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }

    let frame = 0;
    const startedAt = performance.now();

    const update = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased =
        progress *
        progress *
        progress *
        (progress * (progress * 6 - 15) + 10);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [duration, target]);

  return value;
}

export default function PodcastHero() {
  const streams = useCountUp(100000, 3400);
  const countries = useCountUp(115, 2900);
  const insights = useCountUp(70, 2700);
  const listeners = useCountUp(2000, 3200);

  return (
    <>
    <section className="full-bleed relative -mt-16 h-[48svh] w-full overflow-hidden md:h-[80vh] min-[1030px]:-mt-20">
      <Image
        src="/Media/Podcast/podcast-hero-enhanced-hd.png"
        alt="A paraglider flying beneath dramatic clouds"
        width={2194}
        height={1418}
        priority
        loading="eager"
        fetchPriority="high"
        sizes="(max-width: 1500px) 100vw, 1500px"
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] md:object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.5) 65%, rgba(10,10,10,0.85) 80%, #0a0a0a 100%)",
        }}
      />
      <div
        className="container absolute inset-y-0 left-1/2 w-full -translate-x-1/2 px-4 pt-20 md:px-8 md:pt-24 lg:px-12 min-[1030px]:pt-0 min-[2000px]:max-w-[1800px]"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <h1
          className="max-w-[58%] text-center text-2xl leading-[1.25] tracking-[0.12em] sm:text-5xl md:max-w-[52%] md:text-7xl lg:text-[64px] min-[1030px]:absolute min-[1030px]:left-12 min-[1030px]:top-[calc(50%-50px)] min-[1030px]:w-[52%] min-[1030px]:-translate-y-1/2 min-[1030px]:text-left min-[1501px]:text-[80px] min-[2000px]:text-[120px] min-[2000px]:leading-[1.35]"
          style={{
            fontFamily: "var(--font-poppins)",
            fontWeight: 500,
            color: "transparent",
            WebkitTextStroke: "1.8px rgba(255,255,255,0.9)",
            textShadow: "0 2px 14px rgba(0,0,0,0.45)",
          }}
        >
          Welcome to
          <br />
          Paragliding Atlas
          <br />
          Podcast
        </h1>

        <p className="podcast-hero-support-text absolute inset-x-4 bottom-4 w-auto text-center text-[10px] font-bold tracking-[0.12em] text-white sm:bottom-auto sm:left-4 sm:right-auto sm:top-[54%] sm:max-w-[70%] sm:text-left sm:text-xs md:static md:mt-4 md:w-[52%] md:max-w-none md:text-center md:text-lg min-[1030px]:absolute min-[1030px]:left-12 min-[1030px]:right-auto min-[1030px]:top-[64%] min-[1030px]:mt-0 min-[1030px]:w-[42%] min-[1030px]:text-left min-[1030px]:text-[18px] min-[1501px]:text-[22px] min-[2000px]:text-[32px] min-[2000px]:leading-[1.35]">
          Your aerial gateway to uncovering the secrets of the skies
        </p>

        <div className="podcast-hero-support-text absolute right-4 top-[51%] hidden w-[44%] border-x border-white/50 px-3 py-2 text-right text-xs font-bold leading-relaxed tracking-[0.12em] text-white sm:w-auto sm:text-base md:right-[10%] md:top-[55%] md:block md:text-lg min-[1030px]:right-[14%] min-[1030px]:top-[78%] min-[1030px]:text-[22px] min-[1501px]:text-[30px] min-[2000px]:text-[45px] min-[2000px]:leading-[1.4]">
          Trusted by{" "}
          <span className={listeners === 2000 ? "podcast-count-glare" : ""}>
            {listeners.toLocaleString()}+
          </span>
          <br />
          Listeners
        </div>

      </div>
    </section>
    <div
      className="container mx-auto grid grid-cols-3 bg-[#0a0a0a] px-4 pb-5 pt-0 text-white md:px-8 md:pb-8 min-[2000px]:max-w-[1800px] min-[2000px]:pb-24"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      <div className="flex items-center justify-center gap-2 px-2 min-[1000px]:gap-4">
        <StatIcon type="headphones" />
        <div className={streams === 100000 ? "podcast-count-glare text-center" : "text-center"}>
          <p className="text-lg font-medium tracking-[0.08em] md:text-2xl min-[1000px]:text-[28px] min-[1501px]:text-[34px] min-[2000px]:text-[52px]">
            {streams.toLocaleString()}+
          </p>
          <p className="mt-1 text-[10px] font-semibold tracking-[0.12em] text-white/75 md:text-sm min-[1000px]:text-sm min-[1501px]:text-base min-[2000px]:text-[24px] min-[2000px]:leading-[1.4]">
            Streams
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 border-x border-white/10 px-2 min-[1000px]:gap-4">
        <StatIcon type="globe" />
        <div className={countries === 115 ? "podcast-count-glare text-center" : "text-center"}>
          <p className="text-lg font-medium tracking-[0.08em] md:text-2xl min-[1000px]:text-[28px] min-[1501px]:text-[34px] min-[2000px]:text-[52px]">
            {countries}
          </p>
          <p className="mt-1 text-[10px] font-semibold tracking-[0.1em] text-white/75 md:text-sm min-[1000px]:text-sm min-[1501px]:text-base min-[2000px]:text-[24px] min-[2000px]:leading-[1.4]">
            Countries
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 px-2 min-[1000px]:gap-4">
        <StatIcon type="users" />
        <div className={insights === 70 ? "podcast-count-glare text-center" : "text-center"}>
          <p className="text-lg font-medium tracking-[0.08em] md:text-2xl min-[1000px]:text-[28px] min-[1501px]:text-[34px] min-[2000px]:text-[52px]">
            {insights}+
          </p>
          <p className="mt-1 text-[10px] font-semibold tracking-[0.12em] text-white/75 md:text-sm min-[1000px]:text-sm min-[1501px]:text-base min-[2000px]:text-[24px] min-[2000px]:leading-[1.4]">
            Experts
          </p>
        </div>
      </div>
    </div>
    <div className="h-px bg-gradient-to-r from-transparent via-white/25 to-transparent md:hidden" />
    <div
      className="bg-[#0a0a0a] px-4 py-5 text-center text-xs font-bold leading-relaxed tracking-[0.12em] text-white md:hidden"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      Trusted by{" "}
      <span className={listeners === 2000 ? "podcast-count-glare" : ""}>
        {listeners.toLocaleString()}+
      </span>
      <br />
      Listeners
    </div>
    <div className="h-px bg-gradient-to-r from-transparent via-white/25 to-transparent md:hidden" />
    <section
      className="relative overflow-hidden border-y border-white/10 bg-[#07101a] px-5 py-8 sm:px-8 md:px-12 md:py-10 min-[2000px]:px-16 min-[2000px]:py-16"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(29,78,216,0.26),transparent_28%),linear-gradient(90deg,rgba(2,8,15,0.25),rgba(6,18,30,0.92))]" />
      <div className="relative mx-auto grid max-w-[1320px] items-center gap-10 md:grid-cols-[minmax(280px,440px)_minmax(0,1fr)] min-[2000px]:max-w-[1800px] min-[2000px]:grid-cols-[minmax(420px,620px)_minmax(0,1fr)] min-[2000px]:gap-16">
        <div className="relative mx-auto w-full max-w-[280px] md:mx-0 md:max-w-[440px] min-[2000px]:max-w-[620px]">
          <div className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full">
            <span className="absolute left-2 right-2 top-0 h-[1.5px] bg-white/50" />
            <span className="absolute bottom-0 left-2 right-2 h-[1.5px] bg-white/50" />
            <span className="absolute bottom-2 left-0 top-2 w-[1.5px] bg-white/50" />
            <span className="absolute bottom-2 right-0 top-2 w-[1.5px] bg-white/50" />
          </div>
          <Image
            src="/Media/Podcast/hostimage.png"
            alt="Aninder Singh"
            width={1200}
            height={1500}
            sizes="(max-width: 768px) 280px, 38vw"
            className="relative aspect-[4/5] w-full rounded-xl object-cover object-[52%_18%] shadow-2xl"
          />
        </div>

        <div className="text-center md:text-left">
          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-orange-500 md:text-xs min-[2000px]:text-xl">
            Meet Your Host
          </p>
          <h2 className="mt-2 text-2xl font-black uppercase tracking-[0.04em] text-white md:text-4xl min-[1030px]:text-5xl min-[2000px]:text-[76px]">
            Aninder Singh
          </h2>
          <div className="mx-auto mt-5 max-w-2xl space-y-4 text-sm font-medium leading-relaxed tracking-[0.04em] text-white/82 md:mx-0 min-[2000px]:mt-8 min-[2000px]:max-w-5xl min-[2000px]:space-y-7">
            <p>
              Every Thursday Aninder dives deep into all things paragliding with
              some of the brightest and most forward thinking, paradigm busting
              minds in our sport.
            </p>
            <p>
              Intimate, deep and often thought provoking, these conversations are
              curated to stimulate, educate, inspire and empower you to touch the
              sky with glory every time you practice the art of flight.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

function StatIcon({ type }: { type: "headphones" | "globe" | "users" }) {
  return (
    <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-white md:h-12 md:w-12 min-[1000px]:h-14 min-[1000px]:w-14 min-[1501px]:h-16 min-[1501px]:w-16 min-[2000px]:h-24 min-[2000px]:w-24">
      {type === "headphones" && (
        <svg className="h-5 w-5 md:h-6 md:w-6 min-[1000px]:h-7 min-[1000px]:w-7 min-[1501px]:h-8 min-[1501px]:w-8 min-[2000px]:h-12 min-[2000px]:w-12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 13a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4 13v3.5A2.5 2.5 0 0 0 6.5 19H8v-7H6.5A2.5 2.5 0 0 0 4 14.5M20 13v3.5a2.5 2.5 0 0 1-2.5 2.5H16v-7h1.5a2.5 2.5 0 0 1 2.5 2.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {type === "globe" && (
        <svg className="h-5 w-5 md:h-6 md:w-6 min-[1000px]:h-7 min-[1000px]:w-7 min-[1501px]:h-8 min-[1501px]:w-8 min-[2000px]:h-12 min-[2000px]:w-12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 12h16M12 4c2.4 2.2 3.5 4.9 3.5 8S14.4 17.8 12 20c-2.4-2.2-3.5-4.9-3.5-8S9.6 6.2 12 4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {type === "users" && (
        <svg className="h-5 w-5 md:h-6 md:w-6 min-[1000px]:h-7 min-[1000px]:w-7 min-[1501px]:h-8 min-[1501px]:w-8 min-[2000px]:h-12 min-[2000px]:w-12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15.5 19a4.5 4.5 0 0 0-9 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="11" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" />
          <path d="M18.5 18a3.4 3.4 0 0 0-2.5-3.2M16.5 7.3a2.5 2.5 0 0 1 0 4.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );
}
