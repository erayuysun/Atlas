import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Competitions & Performance | Atlas Paragliding",
  description:
    "Competition strategy, risk management, training resources, and practical guidance for performance flying.",
};

const cards = [
  {
    title: "World Cups, Racing and Competing",
    href: "/knowledge-base/competitions/world-cups-racing-competing",
    icon: "/Media/Knowledge Base/competitions/world-cup-v2-transparent.png",
    iconWidth: 54,
    iconHeight: 45,
    content: (
      <>
        <p>
          Get a clear view of modern day race formats and evolving rules, with
          insights from experienced competitors and organisers.
        </p>
        <p>
          Learn practical strategy, decision-making, and preparation, glide
          choice, risk management, and how to avoid the common mistakes that
          cost points and safety.
        </p>
        <p>
          Explore the common threads that make a great calendar and gain a
          deeper understanding of what it takes to perform consistently when
          conditions are anything but predictable.
        </p>
      </>
    ),
  },
  {
    title: "Risk vs. Reward",
    href: "/knowledge-base/competitions/risk-vs-reward",
    icon: "/Media/Knowledge Base/competitions/risk-vs-reward-v2-transparent.png",
    iconWidth: 48,
    iconHeight: 47,
    content: (
      <>
        <p>
          Learn to make calculated decisions that balance competitive
          advantage with safety.
        </p>
        <p>
          Risk assessment: judge weather, terrain, and traffic, and spot
          high-consequence moments where small gains are not worth the
          downside. Set clear personal limits you can stick to under pressure.
        </p>
        <p>
          Safety frameworks: use consistent pre-flight planning, go or no-go
          criteria, and communication habits. Simple routines, like disciplined
          checks and conservative margins near terrain, help you stay in the
          air and out of trouble.
        </p>
      </>
    ),
  },
  {
    title: "Resources, Tools & Tips",
    href: "/knowledge-base/competitions/resources-tools-tips",
    icon: "/Media/Knowledge Base/competitions/resources-v2-transparent.png",
    iconWidth: 52,
    iconHeight: 47,
    content: (
      <>
        <p>
          Join us as we uncover the secrets behind epic flights, breaking
          analysis, and decision-making in challenging conditions while you get
          to know and gain valuable expert insights and improve faster by
          understanding what happens in the air.
        </p>
        <div>
          <p>What you’ll learn</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Record-breaking flights</li>
            <li>Notable pilot journeys</li>
            <li>Use the right tools to review and compare flights</li>
          </ul>
        </div>
      </>
    ),
  },
];

export default function CompetitionsPage() {
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
              Competitions &amp; Performance
            </h1>
            <p className="mt-6 max-w-6xl text-sm leading-relaxed text-gray-300 md:text-base">
              Take a tour into the thrilling world of racing paragliders and
              learn how to push your performance boundaries safely and
              effectively. Here you’ll find strategies, training techniques,
              and mindset required to excel in high-stakes competitions from
              the maestros who have done it all.
            </p>
          </header>

          <section className="grid gap-6 md:grid-cols-3 md:gap-10">
            {cards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="core-series-card flex flex-col rounded-3xl border border-white/[0.04] bg-[#1b1c22] p-7 md:min-h-[500px] md:p-9"
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
