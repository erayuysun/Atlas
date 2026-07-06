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
    <section className="full-bleed relative z-0 -mt-16 h-[48svh] w-full overflow-hidden min-[1030px]:-mt-20 md:h-[80vh]">
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
          className="max-w-[58%] text-center text-2xl leading-[1.25] tracking-[0.12em] sm:text-5xl md:max-w-[52%] md:text-7xl lg:text-[80px] min-[1030px]:absolute min-[1030px]:left-12 min-[1030px]:top-[calc(50%-50px)] min-[1030px]:w-[52%] min-[1030px]:-translate-y-1/2 min-[1030px]:text-left min-[2000px]:text-[120px] min-[2000px]:leading-[1.35]"
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

        <p className="absolute inset-x-4 bottom-4 w-auto text-center text-[10px] font-bold tracking-[0.12em] text-white sm:bottom-auto sm:left-4 sm:right-auto sm:top-[54%] sm:max-w-[70%] sm:text-left sm:text-xs md:static md:mt-4 md:w-[52%] md:max-w-none md:text-center md:text-lg min-[1030px]:absolute min-[1030px]:left-12 min-[1030px]:right-auto min-[1030px]:top-[78%] min-[1030px]:mt-0 min-[1030px]:text-[30px] min-[2000px]:text-[45px] min-[2000px]:leading-[1.4]">
          Your aerial gateway to uncovering the secrets of the skies
        </p>

        <div className="absolute right-4 top-[51%] hidden w-[44%] border-x border-white/50 px-3 py-2 text-right text-xs font-bold leading-relaxed tracking-[0.12em] text-white sm:w-auto sm:text-base md:right-[10%] md:top-[55%] md:block md:text-lg min-[1030px]:right-[14%] min-[1030px]:top-[78%] min-[1030px]:text-[30px] min-[2000px]:text-[45px] min-[2000px]:leading-[1.4]">
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
      className="container mx-auto grid grid-cols-3 gap-3 bg-[#0a0a0a] px-4 pb-5 pt-0 text-center text-white md:px-8 md:pb-8 min-[2000px]:max-w-[1800px] min-[2000px]:pb-24"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      <div>
        <p className="text-xl font-medium tracking-[0.08em] md:text-[40px] min-[2000px]:text-[60px]">
          <span className={streams === 100000 ? "podcast-count-glare" : ""}>
            {streams.toLocaleString()}+
          </span>
        </p>
        <p className="mt-1 text-xs font-semibold tracking-[0.12em] md:text-lg min-[2000px]:text-[27px] min-[2000px]:leading-[1.4]">
          Streams
        </p>
      </div>
      <div>
        <p className="text-xl font-medium tracking-[0.08em] md:text-[40px] min-[2000px]:text-[60px]">
          <span className={countries === 115 ? "podcast-count-glare" : ""}>
            {countries}
          </span>
        </p>
        <p className="mt-1 text-xs font-semibold tracking-[0.1em] md:text-lg min-[2000px]:text-[27px] min-[2000px]:leading-[1.4]">
          Countries Global
          <br />
          Reach
        </p>
      </div>
      <div>
        <p className="text-xl font-medium tracking-[0.08em] md:text-[40px] min-[2000px]:text-[60px]">
          <span className={insights === 70 ? "podcast-count-glare" : ""}>
            {insights}
          </span>
        </p>
        <p className="mt-1 text-xs font-semibold tracking-[0.12em] md:text-lg min-[2000px]:text-[27px] min-[2000px]:leading-[1.4]">
          Expert
          <br />
          Insights
        </p>
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
    <div
      className="bg-[#0a0a0a] px-5 py-8 text-center sm:hidden"
      style={{ fontFamily: "var(--font-poppins)" }}
    >
      <p className="mb-4 text-sm font-medium tracking-[0.14em] text-orange-500">
        Aninder Singh
      </p>
      <div className="text-[10px] font-medium leading-relaxed tracking-[0.08em] text-white">
        <p>
          Every Thursday Aninder dives deep into all things Paragliding with
          some of the brightest and most forward thinking, paradigm busting
          minds in our sport.
        </p>
        <p className="mt-4">
          Intimate, deep and often thought provoking, these conversations are
          curated to stimulate, educate, inspire and empower you to touch the
          sky with glory every time you practice the art of flight.
        </p>
      </div>
    </div>
    <div className="relative z-10 hidden items-end border-t border-white/5 bg-[#0a0a0a] sm:flex min-[2000px]:min-h-[700px]">
      <Image
        src="/Media/Podcast/bg-figure-transparent-hd.png"
        alt=""
        aria-hidden="true"
        width={1600}
        height={736}
        className="pointer-events-none block h-auto w-full object-cover object-center opacity-30"
      />
      <div
        className="absolute inset-0 flex items-center justify-center px-4 py-6 text-center text-[7px] font-medium leading-relaxed tracking-[0.08em] text-white sm:px-10 sm:text-xs md:px-14 md:text-sm lg:px-20 lg:text-xl min-[2000px]:text-[30px] min-[2000px]:leading-[1.5]"
        style={{ fontFamily: "var(--font-poppins)" }}
      >
        <div className="container mx-auto w-full min-[2000px]:max-w-[1800px]">
          <p className="mb-10 text-base font-medium tracking-[0.14em] text-orange-500 md:mb-12 md:text-2xl min-[2000px]:mb-16 min-[2000px]:text-[36px]">
            Aninder Singh
          </p>
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
    </div>
    </>
  );
}
