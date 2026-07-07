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
  if (Number.isNaN(date.getTime())) return "";
  return `${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}`;
}

function formatTime(seconds: number, fallback = "") {
  if (!seconds || Number.isNaN(seconds)) return fallback || "00:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

export default function PodcastPortal() {
  const [feed, setFeed] = useState<Feed | null>(null);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<Episode | null>(null);
  const [isPlayerClosing, setIsPlayerClosing] = useState(false);
  const [query, setQuery] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAfterSelectionRef = useRef(false);
  const playerCloseTimer = useRef<number | null>(null);

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
    return () => {
      if (playerCloseTimer.current !== null) {
        window.clearTimeout(playerCloseTimer.current);
      }
    };
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

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setAudioDuration(audio.duration || 0);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handlePause);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handlePause);
    };
  }, [selected]);

  const playEpisode = (episode: Episode) => {
    if (playerCloseTimer.current !== null) {
      window.clearTimeout(playerCloseTimer.current);
      playerCloseTimer.current = null;
    }
    setIsPlayerClosing(false);

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
    setIsPlayerClosing(true);
    setIsPlaying(false);
    playerCloseTimer.current = window.setTimeout(() => {
      setSelected(null);
      setIsPlayerClosing(false);
      setCurrentTime(0);
      setAudioDuration(0);
      playerCloseTimer.current = null;
    }, 260);
  };

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  const seekTo = (fraction: number) => {
    const audio = audioRef.current;
    if (!audio || !audioDuration) return;
    const nextTime = Math.max(0, Math.min(audioDuration, audioDuration * fraction));
    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const episodes = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return feed?.episodes ?? [];
    return (feed?.episodes ?? []).filter((episode) =>
      `${episode.title} ${episode.description}`.toLowerCase().includes(term),
    );
  }, [feed, query]);

  if (error) {
    return (
      <p className="border border-red-400/30 bg-red-50 p-5 text-sm font-semibold text-red-700">
        {error}
      </p>
    );
  }

  if (!feed) {
    return (
      <div className="grid gap-0 bg-[#0a0a0a]">
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className="h-52 animate-pulse border-b border-white/15 bg-white/5" />
        ))}
      </div>
    );
  }

  return (
    <div className={selected ? "bg-[#0a0a0a] pb-44 text-white md:pb-48" : "bg-[#0a0a0a] text-white"}>
      {selected && (
        <div className={`${isPlayerClosing ? "podcast-player-out" : "podcast-player-in"} fixed inset-x-0 bottom-0 z-[60] w-full border-t border-white/18 bg-[#050505]/95 text-white shadow-[0_-18px_55px_rgba(0,0,0,0.72)] backdrop-blur-xl`}>
          <div className="container relative mx-auto grid grid-cols-[76px_52px_minmax(0,1fr)] gap-3 p-3 pr-12 sm:grid-cols-[104px_52px_minmax(0,1fr)] sm:items-center sm:gap-4 sm:p-4 sm:pr-14 md:w-[calc(100%-4rem)] md:grid-cols-[132px_64px_minmax(0,1fr)] md:gap-5 md:p-5 md:pr-16 min-[2000px]:max-w-[1640px] min-[2000px]:grid-cols-[190px_96px_minmax(0,1fr)] min-[2000px]:gap-8 min-[2000px]:p-7 min-[2000px]:pr-24">
            <button
              type="button"
              onClick={closePlayer}
              aria-label="Close audio player"
              className="absolute right-2 top-2 grid h-8 w-8 place-items-center text-2xl leading-none text-white/55 transition hover:text-white md:right-3 md:top-3 md:h-10 md:w-10 md:text-3xl min-[2000px]:h-14 min-[2000px]:w-14 min-[2000px]:text-5xl"
            >
              x
            </button>
            <div className="aspect-square w-[76px] overflow-hidden bg-black sm:w-[104px] md:w-[132px] min-[2000px]:w-[190px]">
              <img
                src={selected.image || feed.image}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <button
              type="button"
              onClick={togglePlayback}
              aria-label={isPlaying ? "Pause episode" : "Play episode"}
              className="hidden aspect-square place-items-center rounded-full bg-white text-black transition hover:scale-105 sm:grid"
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>

            <div className="col-span-2 min-w-0 self-center sm:col-span-1 sm:self-auto">
              <p className="hidden text-[11px] font-bold text-white/70 sm:block md:text-sm min-[2000px]:text-2xl">
                Paragliding Atlas Podcast
              </p>
              <h3 className="truncate text-sm font-black leading-tight tracking-[0.01em] text-white sm:mt-1 sm:text-base md:text-xl min-[1030px]:text-2xl min-[2000px]:text-[36px]">
                {selected.title}
              </h3>
              <p className="mt-1 text-[11px] font-semibold text-white/70 md:text-sm min-[2000px]:text-[24px]">
                {formatTime(currentTime)} / {formatTime(audioDuration, selected.duration)}
              </p>
            </div>

            <button
              type="button"
              onClick={togglePlayback}
              aria-label={isPlaying ? "Pause episode" : "Play episode"}
              className="grid aspect-square w-12 place-items-center rounded-full bg-white text-black transition hover:scale-105 sm:hidden"
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>

            <WaveformProgress
              progress={audioDuration ? currentTime / audioDuration : 0}
              onSeek={seekTo}
            />

            <audio
              ref={audioRef}
              preload="metadata"
              className="hidden"
            >
              <source src={selected.audioUrl} />
            </audio>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 border-b border-white/18 px-4 pb-6 pt-4 sm:flex-row sm:items-end sm:justify-between md:px-8 md:pb-8 min-[2000px]:px-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 md:text-sm min-[2000px]:text-2xl">
            Latest episodes
          </p>
          <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white md:text-4xl min-[1030px]:text-5xl min-[2000px]:text-[76px] min-[2000px]:leading-[1.05]">
            {feed.title}
          </h2>
          <p className="mt-1 text-sm font-semibold text-white/45 md:text-base min-[2000px]:text-[28px]">
            {feed.episodes.length} episodes from the live RSS feed
          </p>
        </div>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search episodes"
          aria-label="Search episodes"
          className="h-11 border border-white/25 bg-transparent px-4 text-sm font-semibold text-white outline-none transition placeholder:text-white/35 focus:border-white focus:bg-white focus:text-black focus:placeholder:text-black/45 sm:w-64 md:text-base min-[1030px]:h-14 min-[1030px]:w-80 min-[2000px]:h-20 min-[2000px]:w-[520px] min-[2000px]:text-[28px]"
        />
      </div>

      <div>
        {episodes.map((episode, index) => {
          const active = selected?.id === episode.id;
          const episodeNumber = String(feed.episodes.length - index).padStart(3, "0");

          return (
            <article
              key={episode.id}
              className={`group grid gap-4 border-b border-white/18 px-4 py-5 transition duration-300 md:grid-cols-[minmax(220px,336px)_36px_minmax(0,1fr)_112px] md:items-center md:gap-8 md:px-8 md:py-4 min-[2000px]:grid-cols-[420px_52px_minmax(0,1fr)_160px] min-[2000px]:gap-12 min-[2000px]:px-12 min-[2000px]:py-7 ${
                active ? "bg-white/[0.09]" : "bg-[#0a0a0a] hover:bg-white/[0.045]"
              }`}
            >
              <button
                type="button"
                onClick={() => playEpisode(episode)}
                className="relative block overflow-hidden bg-black text-left"
                aria-label={`Listen to ${episode.title}`}
              >
                <span className="pointer-events-none absolute inset-0 z-0 border border-white/10" />
                <span className="pointer-events-none absolute inset-y-0 left-[16%] z-0 w-[30%] border-x border-white/20 bg-white/10" />
                <span className="pointer-events-none absolute bottom-[24%] left-[10%] z-0 h-px w-[16%] bg-white/35" />
                <span className="pointer-events-none absolute right-[12%] top-[20%] z-0 h-[44%] w-[24%] border border-white/20 bg-white/5" />
                <img
                  src={episode.image || feed.image}
                  alt=""
                  loading="lazy"
                  className="relative z-10 aspect-[16/9] w-full object-contain opacity-90"
                />
                <span className="absolute inset-0 z-20 grid place-items-center bg-black/20 opacity-0 transition group-hover:opacity-100">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-black min-[2000px]:h-16 min-[2000px]:w-16">
                    <PlayIcon />
                  </span>
                </span>
              </button>

              <p className="hidden origin-center rotate-180 whitespace-nowrap text-center text-xs font-black tracking-[0.12em] text-white/85 [writing-mode:vertical-rl] md:block min-[2000px]:text-xl">
                EP - {episodeNumber}
              </p>

              <div className="min-w-0 self-center">
                <p className="text-xs font-semibold tracking-[0.04em] text-white/70 md:text-sm min-[2000px]:text-2xl">
                  {formatDate(episode.publishedAt)}
                </p>
                <h3 className="mt-3 line-clamp-2 text-lg font-black uppercase leading-snug tracking-[0.02em] text-white md:text-xl min-[1030px]:text-2xl min-[2000px]:text-[40px] min-[2000px]:leading-[1.22]">
                  {episode.title}
                </h3>
                <div className="mt-5 flex items-center gap-5">
                  <a
                    href={episode.episodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-white pb-1 text-xs font-black uppercase tracking-[0.04em] text-white transition hover:text-white/60 min-[2000px]:text-xl"
                  >
                    Read More
                  </a>
                  <span className="text-xs font-bold text-white/45 md:hidden">
                    EP - {episodeNumber}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-6 md:grid md:justify-items-start md:gap-10">
                <a
                  href={episode.episodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.04em] text-white transition hover:text-white/55 min-[2000px]:text-xl"
                >
                  Watch
                  <PlayIcon />
                </a>
                <button
                  type="button"
                  onClick={() => playEpisode(episode)}
                  className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.04em] text-white transition hover:text-white/55 min-[2000px]:text-xl"
                >
                  Listen
                  <EqualizerIcon />
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {episodes.length === 0 && (
        <p className="border-b border-white/18 p-8 text-center text-sm font-semibold text-white/50">
          No episodes match that search.
        </p>
      )}
    </div>
  );
}

function PlayIcon() {
  return (
    <svg
      className="h-5 w-5 min-[2000px]:h-8 min-[2000px]:w-8"
      viewBox="0 0 12 14"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 7 0 14V0l12 7Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg
      className="h-5 w-5 min-[2000px]:h-8 min-[2000px]:w-8"
      viewBox="0 0 14 16"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 0h4v16H0V0Zm10 0h4v16h-4V0Z" />
    </svg>
  );
}

function WaveformProgress({
  progress,
  onSeek,
}: {
  progress: number;
  onSeek: (fraction: number) => void;
}) {
  const bars = Array.from({ length: 118 }, (_, index) => {
    const height = 34 + ((index * 17) % 52);
    const active = index / 117 <= progress;
    return (
      <span
        key={index}
        className={active ? "bg-white" : "bg-white/30"}
        style={{ height: `${height}%` }}
      />
    );
  });

  return (
    <button
      type="button"
      aria-label="Seek episode"
      onClick={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        onSeek((event.clientX - bounds.left) / bounds.width);
      }}
      className="col-span-2 grid h-10 grid-cols-[repeat(118,minmax(2px,1fr))] items-center gap-[2px] overflow-hidden rounded-full bg-white/25 px-4 transition hover:bg-white/30 sm:col-span-2 sm:col-start-2 md:h-12 min-[2000px]:h-16 min-[2000px]:gap-1 min-[2000px]:px-6"
    >
      {bars}
    </button>
  );
}

function EqualizerIcon() {
  return (
    <svg
      className="h-5 w-5 min-[2000px]:h-8 min-[2000px]:w-8"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 5v10M8 2v16M13 6v8M18 3v14"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth="2"
      />
    </svg>
  );
}
