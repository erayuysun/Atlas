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
        setSelected(data.episodes[0] ?? null);
      })
      .catch(() => setError("Episodes could not be loaded. Please try again shortly."));
  }, []);

  useEffect(() => {
    if (!selected || !audioRef.current) return;
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
      <div className="grid gap-4 md:grid-cols-2">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="h-40 animate-pulse rounded-xl bg-white/5" />
        ))}
      </div>
    );
  }

  return (
    <div>
      {selected && (
        <div className="mb-7 grid gap-5 rounded-2xl border border-white/10 bg-[#17191e] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.35)] sm:grid-cols-[150px_1fr] md:p-6">
          <img
            src={selected.image || feed.image}
            alt=""
            className="aspect-square w-full max-w-[180px] rounded-xl object-cover"
          />
          <div className="min-w-0 self-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1DB954]">Now playing</p>
            <h3 className="mt-2 text-xl font-bold leading-tight md:text-2xl">{selected.title}</h3>
            <p className="mt-2 text-xs text-gray-400">
              {formatDate(selected.publishedAt)}
              {selected.duration ? ` · ${selected.duration}` : ""}
            </p>
            <audio ref={audioRef} controls preload="metadata" className="mt-5 h-11 w-full">
              <source src={selected.audioUrl} />
            </audio>
          </div>
        </div>
      )}

      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1DB954]">Latest episodes</p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">{feed.title}</h2>
          <p className="mt-1 text-sm text-gray-400">{feed.episodes.length} episodes from the live RSS feed</p>
        </div>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search episodes"
          aria-label="Search episodes"
          className="h-11 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#1DB954]/60 sm:w-64"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {episodes.map((episode) => {
          const active = selected?.id === episode.id;
          return (
            <button
              key={episode.id}
              type="button"
              onClick={() => playEpisode(episode)}
              className={`group grid grid-cols-[88px_1fr] gap-4 rounded-xl border p-3 text-left transition duration-300 hover:-translate-y-0.5 hover:border-[#1DB954]/50 hover:bg-white/[0.06] ${
                active ? "border-[#1DB954]/60 bg-[#1DB954]/10" : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div className="relative">
                <img
                  src={episode.image || feed.image}
                  alt=""
                  loading="lazy"
                  className="aspect-square w-[88px] rounded-lg object-cover"
                />
                <span className="absolute inset-0 grid place-items-center rounded-lg bg-black/30 opacity-0 transition group-hover:opacity-100">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1DB954] text-black">▶</span>
                </span>
              </div>
              <div className="min-w-0 py-1">
                <h3 className="line-clamp-2 text-sm font-bold leading-snug text-white">{episode.title}</h3>
                <p className="mt-2 text-xs text-gray-400">
                  {formatDate(episode.publishedAt)}
                  {episode.duration ? ` · ${episode.duration}` : ""}
                </p>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-500">{episode.description}</p>
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
