import type { Metadata } from "next";
import CoreSeriesTopicPage from "@/components/CoreSeriesTopicPage";

export const metadata: Metadata = {
  title: "World Cups, Racing and Competing | Atlas Paragliding",
  description: "Race formats, competition strategy, preparation, and performance.",
};

export default function WorldCupsRacingPage() {
  return (
    <CoreSeriesTopicPage
      title="World Cups, Racing and Competing"
      description="Get a clear view of modern competition formats, rules, and what it takes to perform consistently in high-pressure environments."
      highlights={[
        "Competition formats and scoring systems",
        "Race strategy and decision-making",
        "Event structures and calendars",
        "Insights from pilots and organizers",
      ]}
      videoCount={7}
      videoIds={["Kdd1R8x36vU", "CYVrlWuls6o", "i9z4MyL6KgQ", "nlgbMKLNNk4", "cnizMhvNQrM", "rFC56EjtXCY", "ZjSojM_Ao0U"]}
      videoTitles={[
        "From Tents to Trophies: Luke De Weert",
        "Master the Art of Scoring: The GAP Formula & Strategy | Joerg Ewald",
        "The Inside Story of Sports Racing Series (SRS) | Brett Janaway",
        "Bruce Goldsmith Explains the MRT Scoring System",
        "Shane Tighe's Road to X-Alps",
        "The Resilience Equation: Erlend Ukvitne's Path to X-Alps",
        "PWC Lifestyle: Klaudia Bulgakow",
      ]}
      backHref="/knowledge-base/competitions"
      backLabel="Competitions & Performance"
    />
  );
}
