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
      videoCount={3}
      videoIds={["pFxe7oZTH2E", "ebwdsVgopnU"]}
      backHref="/knowledge-base/competitions"
      backLabel="Competitions & Performance"
    />
  );
}
