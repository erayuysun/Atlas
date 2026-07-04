import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Knowledge Base | Atlas Paragliding",
  description:
    "Practical paragliding knowledge covering weather, performance, safety, equipment, and the wider flying community.",
};

const topics = [
  {
    number: "01",
    title: "Competitions & Performance",
    description:
      "Advanced cross-country coaching, competition strategy, and the tools that turn good decisions into consistent results.",
    href: "/knowledge-base/competitions",
    accent: "from-violet-500/25",
  },
  {
    number: "02",
    title: "Meteorology & Weather Analysis",
    description:
      "Build a working understanding of forecasts, weather patterns, navigation, and the atmosphere you fly through.",
    href: "/knowledge-base/meteorology",
    accent: "from-sky-500/25",
  },
  {
    number: "03",
    title: "Core Series",
    description:
      "The essential ideas every pilot should revisit—from lifting mechanics to making the most of demanding days.",
    href: "/knowledge-base/core-series",
    accent: "from-orange-500/25",
  },
  {
    number: "04",
    title: "Industry & Community",
    description:
      "Stories and resources about events, international flying tourism, recognition, and growing our sport together.",
    href: "/knowledge-base/industry",
    accent: "from-amber-500/25",
  },
  {
    number: "05",
    title: "Technical Focus & Flight Safety",
    description:
      "Go deeper into flight mechanics, gear technology, equipment knowledge, and the habits behind safer flying.",
    href: "/knowledge-base/technical-focus",
    accent: "from-red-500/25",
  },
];

export default function KnowledgeBasePage() {
  return (
    <div className="overflow-hidden bg-[#0a0a0a] text-white">
      <section className="relative -mt-16 aspect-[16/10] min-h-[520px] w-full overflow-hidden md:aspect-video md:min-h-0 min-[1030px]:-mt-20">
        <Image
          src="/Media/Knowledge Base/HERO.png"
          alt="Atlas knowledge network"
          fill
          priority
          loading="eager"
          fetchPriority="high"
          sizes="(max-width: 1500px) 100vw, 1500px"
          className="object-cover object-[38%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,rgba(10,10,10,0.35)_88%,#0a0a0a_100%)]" />

        <div className="absolute inset-y-0 right-[4%] flex w-[48%] translate-y-14 flex-col justify-center md:right-[3.5%] md:w-[43%] md:translate-y-0">
          <a
            href="#explore"
            className="knowledge-category-link group mb-10 hidden items-center gap-2 self-center rounded-full px-3 py-2 sm:flex md:mb-[9%]"
          >
            <Image
              src="/Media/Knowledge Base/headfigure-transparent.png"
              alt=""
              width={72}
              height={72}
              className="knowledge-category-icon h-14 w-auto object-contain md:h-[72px]"
            />
            <span className="knowledge-category-label text-xs font-semibold text-white md:text-sm">
              Explore Categories
            </span>
          </a>

          <a
            href="#explore"
            className="knowledge-category-link knowledge-category-mobile group mb-4 flex items-center gap-2 self-center rounded-full px-3 py-2 text-xs font-semibold text-white sm:hidden"
          >
            <span className="flex h-12 w-12 items-center justify-center">
              <Image
                src="/Media/Knowledge Base/headfigure-transparent.png"
                alt=""
                width={48}
                height={48}
                className="knowledge-category-icon h-12 w-auto object-contain"
              />
            </span>
            <span className="knowledge-category-label">Explore Categories</span>
          </a>

          <div className="knowledge-hero-glare relative overflow-hidden rounded-xl border-2 border-orange-500 bg-black/35 px-4 py-5 shadow-[0_0_12px_rgba(249,115,22,0.7),0_0_32px_rgba(249,115,22,0.28)] backdrop-blur-[2px] sm:px-6 md:rounded-2xl md:px-8 md:py-7 lg:px-10 lg:py-8">
            <p className="text-lg font-light uppercase leading-none tracking-wide text-[#d9d5ff] sm:text-2xl md:text-3xl lg:text-[2.15rem]">
              Paragliding Atlas
            </p>
            <h1 className="mt-2 text-2xl font-bold uppercase leading-none tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.7rem]">
              Knowledge Base
            </h1>
            <p className="mt-4 text-[9px] font-medium italic text-gray-200 sm:text-xs md:text-sm">
              Elevate Your Knowledge of The Blue Yonder
            </p>
          </div>
        </div>
      </section>

      <section id="explore" className="container mx-auto scroll-mt-20 px-4 pb-20 pt-6 md:pb-28 md:pt-12">
        <div className="mb-12">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-orange-500">
            Explore by subject
          </p>
          <p className="rounded-r-xl border-l-4 border-[#8f83ff] bg-[#16161b] px-6 py-5 text-base font-semibold leading-relaxed text-gray-100 shadow-[0_5px_24px_rgba(143,131,255,0.12)] md:px-8 md:text-lg">
            Discover the fascinating world of paragliding through our
            comprehensive collection of resources, guides, and expert insights.
          </p>
          <details className="group mt-5" open>
            <summary className="flex w-fit cursor-pointer list-none items-center gap-2 py-2 text-sm font-semibold text-gray-300 transition hover:text-white [&::-webkit-details-marker]:hidden">
              How To Use This Resource
              <svg
                className="h-4 w-4 text-gray-400 transition-transform duration-300 group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <div className="mt-2 text-sm text-gray-400">
              <ul className="space-y-3">
                <li>• Navigate content based on your skill level and goals</li>
                <li>• Study site guides before flying new locations</li>
                <li>• Learn from experienced pilots and real-world scenarios</li>
                <li>• Explore pathways to build a career in paragliding</li>
              </ul>
            </div>
          </details>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {topics.map((topic, index) => (
            <Link
              key={topic.href}
              href={topic.href}
              className={`group relative min-h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${topic.accent} via-[#161616] to-[#101010] p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:p-9 ${
                index === topics.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <span className="absolute right-6 top-4 text-7xl font-bold text-white/[0.035] md:text-8xl">
                {topic.number}
              </span>
              <div className="relative flex h-full flex-col">
                <span className="mb-10 text-sm font-semibold tracking-[0.2em] text-gray-500">
                  {topic.number}
                </span>
                <h3 className="max-w-xl text-2xl font-bold leading-tight transition group-hover:text-orange-400 md:text-3xl">
                  {topic.title}
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-gray-400">
                  {topic.description}
                </p>
                <span className="mt-auto flex items-center gap-2 pt-7 text-sm font-semibold text-white">
                  Open collection
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="safety-disclaimer" className="container mx-auto scroll-mt-24 px-4 py-12 md:py-16">
        <details className="group overflow-hidden rounded-2xl border border-white/10 bg-[#131419]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 transition hover:bg-white/[0.025] md:px-8 [&::-webkit-details-marker]:hidden">
            <div>
              <p className="text-lg font-bold text-white">Safety Disclaimer</p>
              <p className="mt-1 text-sm text-gray-400">
                Important information about using the Atlas Knowledge Base.
              </p>
            </div>
            <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-white/10 text-gray-300 transition duration-300 group-open:rotate-180 group-open:border-orange-500/50 group-open:text-orange-400">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </summary>

          <div className="border-t border-white/10 px-6 py-8 text-center text-sm leading-relaxed text-gray-300 md:px-12 md:py-10">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Disclaimer
            </h2>
            <div className="mx-auto mt-7 max-w-4xl space-y-5">
              <p>
                This information is published by Paragliding Atlas in the
                interest of exchanging knowledge for the sake of flight safety
                in paragliding. Every effort has been made to ensure that the
                information and analysis contained in this Knowledge Base are
                as accurate and complete as possible. Despite these
                precautions, any action you take based on information found
                here is entirely at your own risk. We shall not be liable for
                any losses or damages connected with the use of this content.
              </p>
              <p>
                The information contained in this Knowledge Base is not
                intended to, and cannot, replace the individual advice of a
                professional instructor in the relevant field at the time of
                flight.
              </p>
              <p className="font-bold text-gray-100">
                It is solely your responsibility to evaluate the accuracy,
                completeness, and usefulness of all opinions, advice, and other
                information provided through this resource.
              </p>
              <p>
                Our goal is to offer an extensive online information resource
                to paragliding pilots worldwide. Knowledge is most valuable
                when it is shared, and more aviation knowledge can mean fewer
                accidents.
              </p>
              <p className="font-bold text-white">
                We strongly encourage{" "}
                <span className="text-orange-500">Flight Safety.</span>
              </p>
            </div>
            <div className="mt-8 flex justify-start">
              <Link
                href="/knowledge-base/safety-disclosure"
                className="group inline-flex items-center gap-2 text-xs font-semibold text-orange-500 transition hover:text-orange-300"
              >
                Safety Information &amp; Disclosure Statements
                <svg
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </details>
      </section>

      <Footer />
    </div>
  );
}
