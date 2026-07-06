"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Episode = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  duration: string;
  audioUrl: string;
  image: string;
  episodeUrl: string;
};

type Feed = {
  title: string;
  image: string;
  episodes: Episode[];
};

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? ""
    : new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(date);
}

export default function PodcastPortal() {
  const [feed, setFeed] = useState<Feed | null>(null);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<Episode | null>(null);
  const [query, setQuery] = useState("");
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAfterSelectionRef = useRef(false);

  useEffect(() => {
    fetch("/api/podcast")
      .then(async (response) => {
        if (!response.ok) throw new Error("Feed unavailable");
        return response.json();
      })
      .then((data: Feed) => {
        setFeed(data);
      })
      .catch(() => setError("Episodes could not be loaded. Please try again shortly."));
  }, []);

  useEffect(() => {
    if (!selected || !audioRef.current) return;
    audioRef.current.volume = 0.5;
    audioRef.current.load();

    if (playAfterSelectionRef.current) {
      playAfterSelectionRef.current = false;
      audioRef.current.play().catch(() => {});
    }
  }, [selected]);

  const playEpisode = (episode: Episode) => {
    if (selected?.id === episode.id) {
      audioRef.current?.play().catch(() => {});
      return;
    }

    playAfterSelectionRef.current = true;
    setSelected(episode);
  };

  const closePlayer = () => {
    audioRef.current?.pause();
    playAfterSelectionRef.current = false;
    setSelected(null);
  };

  const episodes = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return feed?.episodes ?? [];
    return (feed?.episodes ?? []).filter((episode) =>
      `${episode.title} ${episode.description}`.toLowerCase().includes(term),
    );
  }, [feed, query]);

  if (error) {
    return <p className="rounded-xl border border-red-400/20 bg-red-950/20 p-5 text-sm text-red-200">{error}</p>;
  }

  if (!feed) {
    return (
      <div className="grid gap-4">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="h-40 animate-pulse rounded-xl bg-white/5" />
        ))}
      </div>
    );
  }

  return (
    <div className={selected ? "pb-48 md:pb-56" : ""}>
      {selected && (
        <div className="fixed inset-x-0 bottom-0 z-[60] w-full rounded-t-2xl border border-white/15 bg-[#17191e]/95 shadow-[0_16px_50px_rgba(0,0,0,0.75)] backdrop-blur-xl">
          <div className="container relative mx-auto grid grid-cols-[64px_minmax(0,1fr)] gap-4 p-4 pr-16 sm:grid-cols-[80px_minmax(0,1fr)] sm:p-5 sm:pr-16 md:w-[calc(100%-7rem)] md:grid-cols-[96px_minmax(0,1fr)] md:gap-6 md:p-7 md:pr-20 min-[2000px]:max-w-[1640px] min-[2000px]:grid-cols-[120px_minmax(0,1fr)] min-[2000px]:p-9 min-[2000px]:pr-24">
          <button
            type="button"
            onClick={closePlayer}
            aria-label="Close audio player"
            className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full text-3xl leading-none text-gray-400 transition hover:bg-white/10 hover:text-white md:h-12 md:w-12 md:text-4xl min-[2000px]:h-16 min-[2000px]:w-16 min-[2000px]:text-5xl"
          >
            ×
          </button>
            <img
              src={selected.image || feed.image}
              alt=""
              className="h-full min-h-16 w-16 self-stretch rounded-lg object-cover sm:min-h-20 sm:w-20 md:min-h-24 md:w-24 min-[2000px]:min-h-[120px] min-[2000px]:w-[120px]"
            />
            <div className="min-w-0 self-center">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#1DB954] md:text-xs min-[1030px]:text-xl min-[2000px]:text-[30px]">Now playing</p>
              <h3 className="mt-1 truncate text-xs font-bold leading-tight sm:text-sm md:text-base min-[1030px]:text-2xl min-[2000px]:text-[36px]">{selected.title}</h3>
              <p className="mt-1 text-[10px] text-gray-400 md:text-xs min-[1030px]:text-xl min-[2000px]:text-[30px]">
                {formatDate(selected.publishedAt)}
                {selected.duration ? ` · ${selected.duration}` : ""}
              </p>
            </div>
            <audio
              ref={audioRef}
              controls
              preload="metadata"
              className="podcast-player-audio col-span-2 mt-2 h-12 w-full md:mt-3 md:h-14 min-[2000px]:h-16"
            >
              <source src={selected.audioUrl} />
            </audio>
          </div>
        </div>
      )}

      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1DB954] md:text-base min-[1030px]:text-2xl min-[2000px]:text-[36px]">Latest episodes</p>
          <h2 className="mt-2 text-2xl font-bold md:text-4xl min-[1030px]:text-6xl min-[2000px]:text-[90px] min-[2000px]:leading-[1.2]">{feed.title}</h2>
          <p className="mt-1 text-sm text-gray-400 md:text-lg min-[1030px]:text-[28px] min-[2000px]:text-[42px] min-[2000px]:leading-[1.4]">{feed.episodes.length} episodes from the live RSS feed</p>
        </div>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search episodes"
          aria-label="Search episodes"
          className="h-11 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#1DB954]/60 sm:w-64 md:text-base min-[1030px]:h-16 min-[1030px]:w-96 min-[1030px]:text-2xl min-[2000px]:text-[36px]"
        />
      </div>

      <div className="grid gap-4">
        {episodes.map((episode) => {
          const active = selected?.id === episode.id;
          return (
            <button
              key={episode.id}
              type="button"
              onClick={() => playEpisode(episode)}
              className={`group grid grid-cols-[88px_1fr] gap-4 rounded-xl border p-3 text-left transition duration-300 hover:-translate-y-0.5 hover:border-[#1DB954]/50 hover:bg-white/[0.06] min-[1030px]:min-h-[220px] min-[1030px]:grid-cols-[140px_1fr] min-[1030px]:gap-7 min-[1030px]:p-6 min-[2000px]:min-h-[330px] min-[2000px]:grid-cols-[210px_1fr] min-[2000px]:gap-10 min-[2000px]:p-9 ${
                active ? "border-[#1DB954]/60 bg-[#1DB954]/10" : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div className="relative">
                <img
                  src={episode.image || feed.image}
                  alt=""
                  loading="lazy"
                  className="aspect-square w-[88px] rounded-lg object-cover min-[1030px]:w-[140px] min-[2000px]:w-[210px]"
                />
                <span className="absolute inset-0 grid place-items-center rounded-lg bg-black/30 opacity-0 transition group-hover:opacity-100">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1DB954] text-black">▶</span>
                </span>
              </div>
              <div className="min-w-0 py-1 min-[1030px]:py-3">
                <h3 className="line-clamp-2 text-sm font-bold leading-snug text-white md:text-lg min-[1030px]:text-[30px] min-[2000px]:text-[45px] min-[2000px]:leading-[1.35]">{episode.title}</h3>
                <p className="mt-2 text-xs text-gray-400 md:text-sm min-[1030px]:text-[22px] min-[2000px]:text-[33px] min-[2000px]:leading-[1.45]">
                  {formatDate(episode.publishedAt)}
                  {episode.duration ? ` · ${episode.duration}` : ""}
                </p>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-500 md:text-sm min-[1030px]:text-[22px] min-[2000px]:text-[33px] min-[2000px]:leading-[1.5]">{episode.description}</p>
              </div>
            </button>
          );
        })}
      </div>

      {episodes.length === 0 && (
        <p className="rounded-xl border border-white/10 p-8 text-center text-sm text-gray-400">
          No episodes match that search.
        </p>
      )}
    </div>
  );
}
