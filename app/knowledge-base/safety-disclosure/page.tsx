import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Safety Information & Disclosure Statements | Atlas Paragliding",
  description:
    "Safety guidance, content disclosures, review practices, and privacy information for the Atlas Knowledge Base.",
};

const safetyQuestions = [
  {
    question: "Is paragliding dangerous?",
    answer:
      "Paragliding is an aviation activity with inherent risks. Weather, terrain, equipment, judgment, and pilot experience all affect safety. Proper instruction, current training, suitable equipment, and conservative decision-making are essential.",
  },
  {
    question: "Should I try the techniques discussed in the Knowledge Base?",
    answer:
      "Do not attempt unfamiliar techniques based only on online content. Work with a qualified instructor who can assess your experience, equipment, conditions, and readiness in person.",
  },
  {
    question: "Are your recommendations official safety guidelines?",
    answer:
      "No. This Knowledge Base is educational and does not replace regulations, manufacturer instructions, official guidance, site rules, or advice from a qualified professional instructor.",
  },
  {
    question: "Do you accept liability for Knowledge Base information?",
    answer:
      "The content is provided for general information. Decisions based on it remain the user’s responsibility. Always independently assess conditions and obtain appropriate professional guidance before flying.",
  },
  {
    question: "How do I verify safety information?",
    answer:
      "Cross-check information with current aviation authorities, national associations, equipment manufacturers, local site briefings, and qualified instructors. Rules and recommendations can change over time.",
  },
];

const disclosureQuestions = [
  {
    question: "What are your affiliate relationships?",
    answer:
      "Any content containing affiliate links or a commercial relationship will be identified. Such relationships do not change the price paid by the user unless explicitly stated.",
  },
  {
    question: "Do you accept sponsored content?",
    answer:
      "Sponsored or supported content may be accepted when relevant to the audience. Any sponsorship will be clearly disclosed so readers can understand the commercial relationship.",
  },
  {
    question: "How do you handle product reviews?",
    answer:
      "Reviews aim to distinguish observed facts, manufacturer claims, and personal opinions. Products supplied, loaned, discounted, or sponsored for coverage will be disclosed.",
  },
  {
    question: "What is your content policy?",
    answer:
      "Content is intended to support education, responsible decision-making, and flight safety. We aim to correct material errors when identified and distinguish educational information from professional instruction.",
  },
  {
    question: "How do you handle user privacy?",
    answer:
      "Personal information should only be collected when needed for a requested service and handled according to the site’s published privacy policy. Do not submit sensitive information through public forms or comments.",
  },
];

function QuestionList({
  questions,
}: {
  questions: Array<{ question: string; answer: string }>;
}) {
  return (
    <div className="space-y-3">
      {questions.map((item) => (
        <details
          key={item.question}
          className="group overflow-hidden rounded-xl border border-white/[0.05] bg-[#1c1d23]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-gray-100 transition hover:bg-white/[0.025] [&::-webkit-details-marker]:hidden">
            {item.question}
            <svg
              className="h-4 w-4 flex-none text-gray-500 transition-transform duration-300 group-open:rotate-180 group-open:text-orange-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <p className="border-t border-white/[0.06] px-5 py-4 text-sm leading-relaxed text-gray-400">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

export default function SafetyDisclosurePage() {
  return (
    <div className="min-h-screen bg-[#111216] text-white">
      <main className="px-5 pb-20 pt-10 md:px-8 md:pb-28 md:pt-16">
        <div className="mx-auto max-w-[1340px]">
          <Link
            href="/knowledge-base#safety-disclaimer"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition hover:text-orange-400"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 19-7-7 7-7" />
            </svg>
            Back to Knowledge Base
          </Link>

          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <section>
              <h1 className="mb-10 text-4xl font-bold tracking-tight md:text-5xl">
                Safety Information
              </h1>
              <QuestionList questions={safetyQuestions} />
            </section>

            <section>
              <h2 className="mb-10 text-4xl font-bold tracking-tight md:text-5xl">
                Disclosure Statements
              </h2>
              <QuestionList questions={disclosureQuestions} />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
