"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Navigation() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [atlasExpanded, setAtlasExpanded] = useState(true);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (closeTimer.current !== null) window.clearTimeout(closeTimer.current);
    };
  }, []);

  const closeMenu = () => {
    if (!isOpen || isClosing) return;
    setIsClosing(true);
    closeTimer.current = window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      closeTimer.current = null;
    }, 280);
  };

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
      setIsClosing(false);
    }
  };

  const navigateFromMobileMenu = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    if (isClosing) return;

    setIsClosing(true);
    closeTimer.current = window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      closeTimer.current = null;
      router.push(href);
    }, 280);
  };

  const navStyle: React.CSSProperties = scrolled
    ? {
        background: 'rgba(18, 18, 18, 0.98)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
        transition: 'background 600ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 600ms cubic-bezier(0.4, 0, 0.2, 1)',
      }
    : {
        background: 'linear-gradient(to bottom, rgba(18, 18, 18, 0.95) 0%, rgba(18, 18, 18, 0.75) 55%, rgba(18, 18, 18, 0) 100%)',
        boxShadow: 'none',
        transition: 'background 600ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 600ms cubic-bezier(0.4, 0, 0.2, 1)',
      };

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50"
        style={{ boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.25)' : 'none', transition: 'box-shadow 600ms cubic-bezier(0.4, 0, 0.2, 1)' }}
      >
        {/* Gradient layer — visible at top, fades out when scrolled */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(18,18,18,0.28) 0%, rgba(18,18,18,0.12) 50%, rgba(18,18,18,0) 100%)",
            opacity: scrolled ? 0 : 1,
            transition: 'opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        {/* Solid layer — hidden at top, fades in when scrolled */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'rgba(18, 18, 18, 0.98)',
            opacity: scrolled ? 1 : 0,
            transition: 'opacity 600ms cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        {isOpen && (
          <div
            className={`${isClosing ? "mobile-menu-backdrop-out" : "mobile-menu-backdrop"} pointer-events-none absolute inset-x-0 top-0 -bottom-16 min-[1030px]:hidden`}
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.96) 72%, rgba(10,10,10,0.82) 82%, transparent 100%)",
            }}
          />
        )}
        {/* Nav content sits above background layers */}
        <div className="relative container mx-auto px-4 min-[2000px]:max-w-[1800px]" style={{ textShadow: scrolled ? 'none' : '0 1px 8px rgba(0,0,0,0.7)' }}>
          <div className="relative flex h-16 items-center justify-between min-[1030px]:grid min-[1030px]:h-24 min-[1030px]:grid-cols-5">
            {/* Left Navigation */}
            <div className="hidden min-[1030px]:contents">
              <Link href="/" className="group relative justify-self-center whitespace-nowrap text-[19.2px] font-semibold tracking-wide text-white min-[1251px]:text-[24px] min-[1440px]:text-[28px] min-[2000px]:text-[36px]">
                <span className="transition-colors duration-300 group-hover:text-orange-400">Home</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
              </Link>
              <Link href="/about" className="group relative justify-self-center whitespace-nowrap text-[19.2px] font-semibold tracking-wide text-white min-[1251px]:text-[24px] min-[1440px]:text-[28px] min-[2000px]:text-[36px]">
                <span className="transition-colors duration-300 group-hover:text-orange-400">About Us</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
              </Link>
            </div>

            {/* Center Logo — absolutely centered so it stays perfectly centered at any screen size */}
            <Link href="/atlas/kenya" className="absolute left-1/2 -translate-x-1/2 flex-shrink-0 min-[1030px]:static min-[1030px]:justify-self-center min-[1030px]:translate-x-0">
              <img 
                src="/Media/hp/logonobg.webp" 
                alt="ATLAS" 
                width={866}
                height={288}
                className="h-auto w-[220px] object-contain sm:w-[280px] min-[1030px]:w-[300px] min-[1251px]:w-[360px] min-[1440px]:w-[430px] min-[2000px]:w-[481px]"
              />
            </Link>

            {/* Right Navigation */}
            <div className="hidden min-[1030px]:contents">
              <Link href="/knowledge-base" className="group relative justify-self-center whitespace-nowrap text-[19.2px] font-semibold tracking-wide text-white min-[1251px]:text-[24px] min-[1440px]:text-[28px] min-[2000px]:text-[36px]">
                <span className="transition-colors duration-300 group-hover:text-orange-400">Knowledge Base</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_rgba(251,146,60,0.8)]" />
              </Link>
              <Link href="/podcast" className="group relative justify-self-center whitespace-nowrap text-[19.2px] font-semibold tracking-wide text-white min-[1251px]:text-[24px] min-[1440px]:text-[28px] min-[2000px]:text-[36px]">
                <span className="transition-colors duration-300 group-hover:text-orange-400">Podcast</span>
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-400 shadow-[0_0_8px_rgba(251,146,60,0.8)] transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="text-white min-[1030px]:hidden"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="pb-4 pt-2 min-[1030px]:hidden">
              {/* Home */}
              <Link
                href="/"
                onClick={(event) => navigateFromMobileMenu(event, "/")}
                className={`${isClosing ? "mobile-menu-item-out" : "mobile-menu-item"} group flex items-center gap-4 border-b border-white/5 py-3.5`}
                style={{ animationDelay: isClosing ? "0ms" : "40ms" }}
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-white transition-colors duration-200 group-hover:bg-orange-500/15 group-hover:text-orange-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5M5.25 9.75V20a1 1 0 0 0 1 1H9.5v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h3.25a1 1 0 0 0 1-1V9.75" />
                  </svg>
                </span>
                <span className="flex-1 text-lg font-semibold text-white transition-colors duration-200 group-hover:text-orange-400">Home</span>
                <ChevronRight />
              </Link>

              {/* About Us */}
              <Link
                href="/about"
                onClick={(event) => navigateFromMobileMenu(event, "/about")}
                className={`${isClosing ? "mobile-menu-item-out" : "mobile-menu-item"} group flex items-center gap-4 border-b border-white/5 py-3.5`}
                style={{ animationDelay: isClosing ? "0ms" : "120ms" }}
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-white transition-colors duration-200 group-hover:bg-orange-500/15 group-hover:text-orange-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.5a6 6 0 0 0-12 0M9 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM21 19.5a5 5 0 0 0-4-4.9M15.5 11.4a3.5 3.5 0 0 0 0-6.8" />
                  </svg>
                </span>
                <span className="flex-1 text-lg font-semibold text-white transition-colors duration-200 group-hover:text-orange-400">About Us</span>
                <ChevronRight />
              </Link>

              {/* Atlas (expandable) */}
              <button
                type="button"
                onClick={() => setAtlasExpanded((v) => !v)}
                className={`${isClosing ? "mobile-menu-item-out" : "mobile-menu-item"} group flex w-full items-center gap-4 border-b border-white/5 py-3.5`}
                style={{ animationDelay: isClosing ? "0ms" : "160ms" }}
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-white transition-colors duration-200 group-hover:bg-orange-500/15 group-hover:text-orange-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3c2.5 2.5 3.5 5.7 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.7-3.5-9S9.5 5.5 12 3Z" />
                  </svg>
                </span>
                <span className="flex-1 text-left text-lg font-semibold text-white transition-colors duration-200 group-hover:text-orange-400">Atlas</span>
                <svg
                  className={`h-5 w-5 text-orange-500 transition-transform duration-300 ${atlasExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                </svg>
              </button>

              {/* Atlas submenu — Kenya */}
              {atlasExpanded && (
                <div className="relative border-b border-white/5 py-2 pl-6">
                  {/* vertical connector line */}
                  <span className="absolute left-[22px] top-3 bottom-3 w-px bg-gradient-to-b from-orange-500 to-orange-500/20">
                    <span className="absolute -left-[3px] top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.9)]" />
                  </span>
                  <Link
                    href="/atlas/kenya"
                    onClick={(event) => navigateFromMobileMenu(event, "/atlas/kenya")}
                    className="ml-4 flex items-center gap-3 rounded-xl bg-white/[0.06] px-4 py-3 transition-colors duration-200 hover:bg-white/10"
                  >
                    <svg className="h-5 w-5 flex-shrink-0 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z" />
                      <circle cx="12" cy="10" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="flex-1">
                      <span className="block text-base font-semibold text-white">Kenya</span>
                    </span>
                    <ChevronRight />
                  </Link>
                </div>
              )}

              {/* Knowledge Base */}
              <Link
                href="/knowledge-base"
                onClick={(event) => navigateFromMobileMenu(event, "/knowledge-base")}
                className={`${isClosing ? "mobile-menu-item-out" : "mobile-menu-item"} group flex items-center gap-4 border-b border-white/5 py-3.5`}
                style={{ animationDelay: isClosing ? "0ms" : "240ms" }}
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-white transition-colors duration-200 group-hover:bg-orange-500/15 group-hover:text-orange-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5C10.5 5.2 8.3 4.5 5.5 4.5A2 2 0 0 0 3.5 6.5v11a1 1 0 0 0 1 1c2.8 0 5 .7 6.5 2 1.5-1.3 3.7-2 6.5-2a1 1 0 0 0 1-1v-11a2 2 0 0 0-2-2c-2.8 0-5 .7-6.5 2Zm0 0V20" />
                  </svg>
                </span>
                <span className="flex-1 text-lg font-semibold text-white transition-colors duration-200 group-hover:text-orange-400">Knowledge Base</span>
                <ChevronRight />
              </Link>

              {/* Podcast */}
              <Link
                href="/podcast"
                onClick={(event) => navigateFromMobileMenu(event, "/podcast")}
                className={`${isClosing ? "mobile-menu-item-out" : "mobile-menu-item"} group flex items-center gap-4 py-3.5`}
                style={{ animationDelay: isClosing ? "0ms" : "320ms" }}
              >
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-white transition-colors duration-200 group-hover:bg-orange-500/15 group-hover:text-orange-400">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <rect x="9" y="3" width="6" height="11" rx="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7" />
                  </svg>
                </span>
                <span className="flex-1 text-lg font-semibold text-white transition-colors duration-200 group-hover:text-orange-400">Podcast</span>
                <ChevronRight />
              </Link>
            </div>
          )}
        </div>
      </nav>
      {/* Spacer so content doesn't hide under fixed navbar */}
      <div className="h-16 min-[1030px]:h-20" />
    </>
  );
}

function ChevronRight() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
    </svg>
  );
}
