import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meteorology & Weather Analysis | Atlas Paragliding",
  description:
    "Understand atmospheric conditions, forecasting tools, and micrometeorology for safer paragliding.",
};

export default function MeteorologyPage() {
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
              Meteorology &amp; Weather Analysis
            </h1>
            <p className="mt-6 max-w-6xl text-sm leading-relaxed text-gray-300 md:text-base">
              Understanding weather patterns and atmospheric conditions is
              crucial for safe paragliding and we have this segment exactly for
              that! Episodes in here help you read the skies better.
            </p>
          </header>

          <section className="flex justify-center">
            <Link
              href="/knowledge-base/meteorology/weather-patterns-forecasting"
              className="core-series-card flex w-full max-w-[440px] flex-col rounded-3xl border border-white/[0.04] bg-[#1b1c22] p-7 md:min-h-[510px] md:p-9"
            >
              <Image
                src="/Media/Knowledge Base/Meteorology/weather-patterns-transparent.png"
                alt=""
                width={37}
                height={34}
                className="h-10 w-auto object-contain"
              />
              <h2 className="mt-4 text-lg font-bold">
                Weather Patterns and Forecasting
              </h2>

              <div className="mt-5 space-y-5 text-sm font-medium leading-relaxed text-gray-200">
                <div>
                  <h3>• Atmospheric Conditions</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-8 text-gray-300">
                    <li>Pressure systems and fronts</li>
                    <li>Cloud formations and types</li>
                    <li>Wind patterns and thermals</li>
                  </ul>
                </div>

                <div>
                  <h3>• Weather Forecasting Tools</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-8 text-gray-300">
                    <li>Reading meteorological charts</li>
                    <li>Using weather apps and services</li>
                    <li>Local weather interpretation</li>
                  </ul>
                </div>

                <div>
                  <h3>• Micrometeorology</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-8 text-gray-300">
                    <li>Valley winds and mountain effects</li>
                    <li>Thermal development</li>
                    <li>Sea breeze phenomena</li>
                  </ul>
                </div>
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
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
