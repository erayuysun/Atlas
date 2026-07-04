"use client";

import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";

type CoreSeriesTopicPageProps = {
  title: string;
  description: string;
  highlights: string[];
  videoCount: number;
  videoIds?: string[];
};

export default function CoreSeriesTopicPage({
  title,
  description,
  highlights,
  videoCount,
  videoIds = [],
}: CoreSeriesTopicPageProps) {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const activeVideoId =
    selectedVideo === null ? undefined : videoIds[selectedVideo];

  return (
    <div className="min-h-screen bg-[#111216] text-white">
      <main className="px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-16">
        <div className="mx-auto max-w-[1340px]">
          <Link
            href="/knowledge-base/core-series"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-orange-400"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" />
            </svg>
            Core Series
          </Link>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{title}</h1>

          <p className="mt-6 rounded-xl bg-[#191a20] px-5 py-4 text-sm font-semibold leading-relaxed text-gray-200 shadow-[0_0_25px_rgba(255,255,255,0.04)] md:text-base">
            {description}
          </p>

          <ul className="mt-4 grid gap-2.5 text-sm font-medium text-gray-300 sm:grid-cols-2 xl:grid-cols-4">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex min-h-11 items-center gap-3 rounded-lg border border-white/[0.05] bg-white/[0.025] px-4 py-3 leading-snug"
              >
                <span className="h-1.5 w-1.5 flex-none rounded-full bg-orange-500 shadow-[0_0_7px_rgba(249,115,22,0.7)]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <section className="mt-14">
            <h2 className="mb-5 text-xl font-bold">Video Library</h2>

            {selectedVideo === null ? (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: videoCount }, (_, index) => {
                  const videoId = videoIds[index];

                  return (
                    <button
                      key={index}
                      type="button"
                      disabled={!videoId}
                      onClick={() => setSelectedVideo(index)}
                      className={`group text-left ${videoId ? "" : "cursor-not-allowed opacity-45"}`}
                    >
                      <span className="relative block aspect-video overflow-hidden rounded-xl border border-white/10 bg-[#252731] shadow-lg transition duration-300 group-enabled:hover:-translate-y-1 group-enabled:hover:border-red-500/50 group-enabled:hover:shadow-[0_15px_35px_rgba(0,0,0,0.35)]">
                        {videoId ? (
                          <>
                            <img
                              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                              alt=""
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                            <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/25">
                              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600/95 shadow-[0_0_24px_rgba(220,38,38,0.35)] transition duration-300 group-hover:scale-110">
                                <svg className="ml-1 h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="m9 7 8 5-8 5V7Z" />
                                </svg>
                              </span>
                            </span>
                          </>
                        ) : (
                          <span className="flex h-full items-center justify-center text-sm font-semibold text-gray-500">
                            Video link coming soon
                          </span>
                        )}
                      </span>
                      <span className="mt-3 block text-sm font-bold text-gray-200">
                        {title} · Video {index + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div>
                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-white"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" />
                  </svg>
                  All videos
                </button>

                <div className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(280px,0.8fr)]">
                  <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-black shadow-[0_18px_45px_rgba(0,0,0,0.4)]">
                    <iframe
                      key={activeVideoId}
                      className="h-full w-full"
                      src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1`}
                      title={`${title} selected video`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>

                  <div className="rounded-xl border border-white/[0.07] bg-[#18191e] p-3 lg:max-h-[min(38vw,520px)] lg:overflow-y-auto">
                    <p className="mb-3 px-2 text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
                      Up next
                    </p>
                    <div className="space-y-2">
                      {Array.from({ length: videoCount }, (_, index) => {
                        const videoId = videoIds[index];
                        const isActive = index === selectedVideo;

                        return (
                          <button
                            key={index}
                            type="button"
                            disabled={!videoId || isActive}
                            onClick={() => setSelectedVideo(index)}
                            className={`flex w-full items-center gap-3 rounded-lg p-2 text-left transition ${
                              isActive
                                ? "bg-white/10 ring-1 ring-orange-500/60"
                                : videoId
                                  ? "hover:bg-white/[0.06]"
                                  : "cursor-not-allowed opacity-45"
                            }`}
                          >
                            <span className="relative aspect-video w-28 flex-none overflow-hidden rounded-md bg-[#252731]">
                              {videoId ? (
                                <img
                                  src={`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`}
                                  alt=""
                                  className="h-full w-full object-cover"
                                  loading="lazy"
                                />
                              ) : (
                                <span className="flex h-full items-center justify-center text-[10px] text-gray-500">
                                  Coming soon
                                </span>
                              )}
                            </span>
                            <span>
                              <span className="block text-sm font-bold text-gray-100">
                                {title} · Video {index + 1}
                              </span>
                              <span className="mt-1 block text-xs text-gray-500">
                                {isActive
                                  ? "Now playing"
                                  : videoId
                                    ? "Play next"
                                    : "Link coming soon"}
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
