import type { Metadata } from "next";
import PodcastHero from "@/components/PodcastHero";
import PodcastPortal from "@/components/PodcastPortal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Paragliding Atlas Podcast",
  description:
    "Stories, insights, technical knowledge, and defining moments from pilots and free-flight pioneers around the world.",
};

export default function PodcastPage() {
  return (
    <div className="overflow-hidden bg-[#0a0a0a] text-white">
      <PodcastHero />

      <section className="container mx-auto px-5 py-12 md:px-8 md:py-16">
        <div className="rounded-xl bg-[#020806] px-5 py-7 md:px-8">
          <p className="text-sm font-bold tracking-[0.1em] text-gray-400">
            Press play and start transforming your Flying today
          </p>
          <div className="mt-6 grid grid-cols-3 items-center gap-1.5 sm:flex sm:flex-wrap sm:gap-4">
            <a
              href="https://open.spotify.com/show/16jBM3RfjVERukNHJrIRec"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-10 min-w-0 items-center justify-center gap-1 rounded-lg bg-white px-2 text-black transition hover:-translate-y-0.5 hover:bg-gray-100 sm:h-12 sm:gap-2 sm:px-3"
            >
              <svg className="h-4 w-4 shrink-0 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              <span className="leading-none">
                <span className="block text-[5px] font-medium sm:text-[9px]">Listen on</span>
                <span className="block text-[10px] font-bold sm:text-lg">Spotify</span>
              </span>
            </a>

            <a
              href="https://podcasts.apple.com/us/podcast/paragliding-atlas-by-aninder-singh/id1735782803"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-10 min-w-0 items-center justify-center gap-1 rounded-lg bg-white px-1 text-black transition hover:-translate-y-0.5 hover:bg-gray-100 sm:h-12 sm:gap-2 sm:px-3"
            >
              <svg className="h-4 w-4 shrink-0 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.16a9.84 9.84 0 0 0-3.42 19.06l.7-2.13A7.6 7.6 0 1 1 14.73 19l.69 2.13A9.84 9.84 0 0 0 12 2.16Zm0 4.1a5.74 5.74 0 0 0-2.2 11.04l.72-2.18a3.45 3.45 0 1 1 2.96-.03l.72 2.18A5.74 5.74 0 0 0 12 6.26Zm0 3.21a2.09 2.09 0 1 0 0 4.18 2.09 2.09 0 0 0 0-4.18Zm-1.22 4.9-.91 6.87c-.08.56.36 1.06.93 1.06h2.4c.57 0 1.01-.5.93-1.06l-.91-6.87a3.5 3.5 0 0 1-2.44 0Z"/>
              </svg>
              <span className="leading-none">
                <span className="block text-[5px] font-medium sm:text-[9px]">Listen on</span>
                <span className="block whitespace-nowrap text-[8px] font-bold sm:text-base">Apple Podcasts</span>
              </span>
            </a>

            <a
              href="https://www.youtube.com/@ParaglidingAtlas"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-10 min-w-0 items-center justify-center gap-1 rounded-lg bg-white px-2 text-black transition hover:-translate-y-0.5 hover:bg-gray-100 sm:h-12 sm:gap-2 sm:px-4"
            >
              <svg className="h-4 w-4 shrink-0 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span className="text-[10px] font-bold sm:text-xl">YouTube</span>
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-5 pb-8 md:px-8 md:pb-20">
        <div className="rounded-xl bg-[#080a09] px-4 py-6 text-center md:px-6 md:py-10">
          <p className="text-sm font-medium tracking-[0.18em] text-gray-500 md:text-base">
            Do You have a Question That You want Answered On The Podcast
          </p>
          <a
            href="https://w.app/paragliding"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-slate-400/70 bg-gradient-to-b from-[#34393d] to-[#171a1d] px-7 py-3 text-xs font-bold tracking-[0.12em] text-gray-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.16),0_0_14px_rgba(148,163,184,0.14)] transition hover:-translate-y-0.5 hover:border-slate-300 hover:text-white hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_20px_rgba(148,163,184,0.25)] md:mt-6"
          >
            Submit a Question
          </a>
        </div>
      </section>

      <section className="container mx-auto px-5 pb-16 md:px-8 md:pb-24">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111216] p-4 shadow-[0_20px_55px_rgba(0,0,0,0.35)] md:p-6">
          <PodcastPortal />
        </div>
      </section>

      <Footer />
    </div>
  );
}
