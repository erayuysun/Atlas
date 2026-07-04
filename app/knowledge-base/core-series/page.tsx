import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Core Series | Atlas Paragliding",
  description:
    "Three essential collections designed to inspire, equip, and enrich your free-flight journey.",
};

const sections = [
  {
    title: "Navigators",
    href: "/knowledge-base/core-series/navigators",
    icon: "/Media/Knowledge Base/core series/Navigators-transparent.png",
    iconWidth: 37,
    iconHeight: 34,
    paragraphs: [
      "Our flagship series covers all aspects of navigation and route planning, an essential guide for exploring new flying sites.",
      "The sites featured in this series are some of the most popular destinations, where experts explain the area, share their invaluable insights.",
      "You’ll learn about to-do lists, common mistakes to avoid, local customs, airspace rules, weather patterns, and more.",
      "Gain a deep understanding of what makes a perfect flying day and how to navigate the challenges that come with a less-than-ideal one.",
    ],
  },
  {
    title: "Sky Gods",
    href: "/knowledge-base/core-series/sky-gods",
    icon: "/Media/Knowledge Base/core series/sky gods-transparent.png",
    iconWidth: 37,
    iconHeight: 37,
    paragraphs: [
      "Meet the legends who have redefined the meaning of chasing airtime in the sport of paragliding.",
      "True pioneers of the art of free flight, these people have dedicated their whole lifetimes to the art of flight and created magic we all have been privileged to witness in our lifetimes.",
      "Tune in for Through in-depth profiles, interviews, and stories.",
      "Learn from the experiences and wisdom of the most influential figures in paragliding history as they share their proud breakthroughs, achievements and more with the world.",
    ],
  },
  {
    title: "Living The Dream",
    href: "/knowledge-base/core-series/living-the-dream",
    icon: "/Media/Knowledge Base/core series/living the dream-transparent.png",
    iconWidth: 39,
    iconHeight: 37,
    paragraphs: [
      "Ever wondered how to break free from the 9–5 grind and make a living off the art of flight?",
      "Tune in to hear from those who once had the same dream and turned it into reality.",
      "Here we explore 8 diverse career paths in paragliding and how to build a sustainable, flying-focused lifestyle and career opportunities in paragliding.",
      "Offering practical insights for those looking to turn their passion for flight into a profession at some of the highest levels known in the sport.",
    ],
  },
];

export default function CoreSeriesPage() {
  return (
    <div className="min-h-screen bg-[#111216] text-white">
      <div className="px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-16">
        <div className="mx-auto max-w-[1340px]">
          <header className="mb-10 md:mb-16">
            <Link
              href="/knowledge-base"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-orange-400"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" />
              </svg>
              Back to Knowledge Base
            </Link>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              Core Series
            </h1>
            <p className="mt-6 max-w-6xl text-sm leading-relaxed text-gray-300 md:text-base">
              This comprehensive collection is divided into three main sections,
              each designed to inspire, equip and enrich your mindmap in free
              flight to build your understanding from the ground up.
            </p>
          </header>

          <section className="grid gap-6 md:grid-cols-3 md:gap-10">
            {sections.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className="core-series-card group flex flex-col rounded-3xl border border-white/[0.04] bg-[#1b1c22] p-7 md:min-h-[500px] md:p-9"
              >
                <Image
                  src={section.icon}
                  alt=""
                  width={section.iconWidth}
                  height={section.iconHeight}
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <h2 className="mt-4 text-lg font-bold">{section.title}</h2>
                <div className="mt-5 space-y-5 text-sm font-medium leading-relaxed text-gray-200">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <span
                  className="core-learning-button mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-orange-500/60 px-5 py-2.5 text-sm font-bold text-white md:mt-auto md:translate-y-2"
                >
                  <span className="relative z-10">Start Learning</span>
                  <svg
                    className="core-learning-arrow relative z-10 h-4 w-4 text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="m9 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
