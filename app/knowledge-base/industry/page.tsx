import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Industry & Community | Atlas Paragliding",
  description:
    "Explore paragliding brands, influential storytellers, incident analysis, and lessons from the global community.",
};

const cards = [
  {
    title: "Brand Stories & Manufacturer Profiles",
    href: "/knowledge-base/industry/brand-stories",
    icon: "/Media/Knowledge Base/Industry and Community/brand-stories-v2-transparent.png",
    iconWidth: 156,
    iconHeight: 136,
    content: (
      <>
        <p>Discover the history and innovation behind the leading paragliding brands.</p>
        <div>
          <p>• Major Manufacturers</p>
          <ul className="mt-2 list-disc space-y-1 pl-8 text-gray-300">
            <li>Company histories and milestones</li>
            <li>Design philosophies</li>
            <li>Innovation timelines</li>
          </ul>
        </div>
        <div>
          <p>• Product Development</p>
          <ul className="mt-2 list-disc space-y-1 pl-8 text-gray-300">
            <li>Research and testing processes</li>
            <li>Quality control measures</li>
            <li>Certification standards</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: "Storytellers",
    href: "/knowledge-base/industry/storytellers",
    icon: "/Media/Knowledge Base/Industry and Community/storytellers-v2-transparent.png",
    iconWidth: 294,
    iconHeight: 272,
    content: (
      <>
        <p>
          Meet the legends who have redefined the meaning of chasing airtime in
          the sport of paragliding.
        </p>
        <p>
          True pioneers of the art of free flight, these people have dedicated
          their whole lifetimes to the art of flight and created magic we all
          have been privileged to witness in our lifetimes. Tune in for
          in-depth profiles, interviews, and stories.
        </p>
        <p>
          Learn from the experiences and wisdom of the most influential figures
          in paragliding history as they share their record breaking
          achievements and more with the world.
        </p>
      </>
    ),
  },
  {
    title: "The Dark Side: Learning from Incidents",
    href: "/knowledge-base/industry/learning-from-incidents",
    icon: "/Media/Knowledge Base/Industry and Community/dark-side-v2-transparent.png",
    iconWidth: 137,
    iconHeight: 125,
    content: (
      <>
        <p>
          Critical analysis of accidents and incidents to prevent future
          occurrences and improve safety standards.
        </p>
        <div>
          <p>• Incident Analysis</p>
          <ul className="mt-2 list-disc space-y-1 pl-8 text-gray-300">
            <li>Detailed case studies</li>
            <li>Root cause investigations</li>
            <li>Contributing factors</li>
          </ul>
        </div>
        <div>
          <p>• Safety Lessons</p>
          <ul className="mt-2 list-disc space-y-1 pl-8 text-gray-300">
            <li>Preventive measures</li>
            <li>Equipment improvements</li>
            <li>Protocol updates</li>
          </ul>
        </div>
      </>
    ),
  },
];

export default function IndustryPage() {
  return (
    <div className="min-h-screen bg-[#111216] text-white">
      <main className="px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-16">
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
              Industry &amp; Community
            </h1>
            <p className="mt-6 max-w-6xl text-sm leading-relaxed text-gray-300 md:text-base">
              Explore the business side of paragliding and learn from the
              collective wisdom of our global community.
            </p>
          </header>

          <section className="grid gap-6 md:grid-cols-3 md:gap-10">
            {cards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="core-series-card flex flex-col rounded-3xl border border-white/[0.04] bg-[#1b1c22] p-7 md:min-h-[540px] md:p-9"
              >
                <Image
                  src={card.icon}
                  alt=""
                  width={card.iconWidth}
                  height={card.iconHeight}
                  className="h-10 w-auto object-contain"
                />
                <h2 className="mt-4 text-lg font-bold">{card.title}</h2>
                <div className="mt-5 space-y-5 text-sm font-medium leading-relaxed text-gray-200">
                  {card.content}
                </div>
                <span className="core-learning-button mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-orange-500/60 px-5 py-2.5 text-sm font-bold text-white md:mt-auto md:translate-y-2">
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
      </main>
      <Footer />
    </div>
  );
}
