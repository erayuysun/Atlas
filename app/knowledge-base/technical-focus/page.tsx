import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Technical Focus & Flight Safety | Atlas Paragliding",
  description:
    "Flight mechanics, emerging technology, equipment knowledge, and practical advances in paragliding safety.",
};

const cards = [
  {
    title: "Flight Mechanics",
    href: "/knowledge-base/technical-focus/flight-mechanics",
    icon: "/Media/Knowledge Base/Industry and Community/brand-stories-v2-transparent.png",
    iconWidth: 156,
    iconHeight: 136,
    paragraphs: [
      "Fundamental knowledge for pilots to make informed decisions during flight and maintain control in various conditions.",
      "Explore the physics and principles that explain the complex interplay of forces and principles that enable controlled flight while understanding the behaviour of a wing with regards to various forces acting on both the wing and pilot during different phases of flight.",
      "Uncover key aspects of topics such as the relationship between airspeed and angle of attack, the effects of weight shift control, and how exactly the air flows around the wing, the balance between gravity and lift etc.",
    ],
  },
  {
    title: "New Technologies",
    href: "/knowledge-base/technical-focus/new-technologies",
    icon: "/Media/Knowledge Base/Industry and Community/storytellers-v2-transparent.png",
    iconWidth: 294,
    iconHeight: 272,
    paragraphs: [
      "Discover how new tech is shaping the future of flight.",
      "Stay current with the latest trends and innovations in PG tech.",
      "New materials, smart safety systems, modernised flight instruments and digital analytics tools that are transforming the way we fly and train.",
      "We explore how these breakthroughs are enhancing performance, improving safety, and opening new possibilities for pilots at all levels with some of the forerunners of driving change and innovation in our industry.",
    ],
  },
  {
    title: "Know Your Equipment",
    href: "/knowledge-base/technical-focus/know-your-equipment",
    icon: "/Media/Knowledge Base/Industry and Community/dark-side-v2-transparent.png",
    iconWidth: 137,
    iconHeight: 125,
    paragraphs: [
      "Get to master your flying kit and gear as we talk all that you ever wanted to know in detailed tutorials and maintenance guides.",
      "With guests from leading manufacturers of the market.",
    ],
    list: [
      "Canopy materials and construction",
      "Harness systems and protection",
      "Reserve parachute systems repacking",
      "Maintenance procedures",
      "Equipment selection guide",
    ],
  },
];

export default function TechnicalFocusPage() {
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
              Technical Focus &amp; Flight Safety
            </h1>
            <p className="mt-6 max-w-6xl text-sm leading-relaxed text-gray-300 md:text-base">
              A deep dive into the technical aspects of free flight on topics
              such as fundamental aerodynamics to cutting-edge innovations.
              This section provides comprehensive knowledge about the
              mechanics, equipment, and technological advances in paragliding
              and how they happen.
            </p>
          </header>

          <section className="grid gap-6 md:grid-cols-3 md:gap-10">
            {cards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="core-series-card flex flex-col rounded-3xl border border-white/[0.04] bg-[#1b1c22] p-7 md:min-h-[590px] md:p-9"
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
                  {card.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {card.list && (
                    <div>
                      <p>We talk about:</p>
                      <ul className="mt-2 list-disc space-y-1 pl-8 text-gray-300">
                        {card.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
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
