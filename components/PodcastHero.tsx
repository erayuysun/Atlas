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
    <section className="relative z-0 -mt-16 min-h-[620px] w-full overflow-hidden min-[1030px]:-mt-20 md:min-h-0">
      <Image
        src="/Media/Podcast/podcast-hero-enhanced-hd.png"
        alt="A paraglider flying beneath dramatic clouds"
        width={2194}
        height={1418}
        priority
        loading="eager"
        fetchPriority="high"
        sizes="(max-width: 1500px) 100vw, 1500px"
        className="block h-[620px] w-full object-cover object-[62%_center] md:h-auto md:max-h-[100svh] md:object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom,rgba(10,10,10,0.3) 0%,transparent 18%,transparent 55%,rgba(10,10,10,0.45) 82%,#0a0a0a 100%)",
        }}
      />
      <div
        className="absolute inset-0 px-4 pt-20 md:px-8 md:pt-24 lg:px-12"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <h1
          className="max-w-[58%] text-center text-3xl leading-[1.25] tracking-[0.12em] sm:text-5xl md:max-w-[52%] md:text-6xl lg:text-7xl"
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

        <p className="absolute left-4 top-[54%] w-[46%] text-[10px] font-bold tracking-[0.12em] text-white sm:w-auto sm:max-w-[70%] sm:text-xs md:left-8 md:top-[58%] md:text-sm lg:left-12">
          Your aerial gateway to uncovering the secrets of the skies
        </p>

        <div className="absolute right-4 top-[51%] w-[44%] border-x border-white/50 px-3 py-2 text-right text-xs font-bold leading-relaxed tracking-[0.12em] text-white sm:w-auto sm:text-base md:right-8 md:top-[55%] md:text-lg lg:right-12 lg:text-xl">
          Trusted by{" "}
          <span className={listeners === 2000 ? "podcast-count-glare" : ""}>
            {listeners.toLocaleString()}+
          </span>
          <br />
          Listeners
        </div>

        <div className="absolute inset-x-4 bottom-[8%] grid grid-cols-3 gap-3 text-center text-white md:inset-x-12 md:bottom-[9%]">
          <div>
            <p className="text-xl font-medium tracking-[0.08em] md:text-3xl">
              <span className={streams === 100000 ? "podcast-count-glare" : ""}>
                {streams.toLocaleString()}+
              </span>
            </p>
            <p className="mt-1 text-xs font-semibold tracking-[0.12em] md:text-lg">
              Streams
            </p>
          </div>
          <div>
            <p className="text-xl font-medium tracking-[0.08em] md:text-3xl">
              <span className={countries === 115 ? "podcast-count-glare" : ""}>
                {countries}
              </span>
            </p>
            <p className="mt-1 text-xs font-semibold tracking-[0.1em] md:text-lg">
              Countries Global
              <br />
              Reach
            </p>
          </div>
          <div>
            <p className="text-xl font-medium tracking-[0.08em] md:text-3xl">
              <span className={insights === 70 ? "podcast-count-glare" : ""}>
                {insights}
              </span>
            </p>
            <p className="mt-1 text-xs font-semibold tracking-[0.12em] md:text-lg">
              Expert
              <br />
              Insights
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className="relative z-10 flex items-end border-t border-white/5 bg-[#0a0a0a]">
      <Image
        src="/Media/Podcast/bg-figure-transparent-hd.png"
        alt=""
        aria-hidden="true"
        width={1600}
        height={736}
        className="pointer-events-none block h-auto w-[70%] max-w-[620px] object-contain object-left-bottom sm:w-[76%] md:w-[52%] md:max-w-[760px]"
      />
      <div
        className="absolute inset-y-0 left-0 flex w-[70%] max-w-[620px] items-center justify-center px-4 py-3 text-center text-[7px] font-medium leading-relaxed tracking-[0.08em] text-white sm:w-[76%] sm:px-10 sm:text-xs md:w-[52%] md:max-w-[760px] md:px-14 md:text-sm lg:px-20"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <div className="max-w-xl">
          <p>
            Every Thursday Aninder dives deep into all things Paragliding with
            some of the brightest and most forward thinking, paradigm busting
            minds in our sport.
          </p>
          <p className="mt-3 sm:mt-5">
            Intimate, deep and often thought provoking, these conversations are
            curated to stimulate, educate, inspire and empower you to touch the
            sky with glory every time you practice the art of flight.
          </p>
        </div>
      </div>
      <p
        className="absolute right-[2%] top-1/2 -translate-y-1/2 whitespace-nowrap text-xs font-medium tracking-[0.14em] text-orange-500 sm:right-4 sm:text-base md:right-[8%] md:text-lg"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        Aninder Singh
      </p>
    </div>
    </>
  );
}
