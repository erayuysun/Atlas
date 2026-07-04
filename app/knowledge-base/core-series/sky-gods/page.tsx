import type { Metadata } from "next";
import CoreSeriesTopicPage from "@/components/CoreSeriesTopicPage";

export const metadata: Metadata = {
  title: "Sky Gods | Core Series",
  description: "Lessons from the most influential pilots in paragliding.",
};

export default function SkyGodsPage() {
  return (
    <CoreSeriesTopicPage
      title="Sky Gods"
      description="Step into the minds of the most influential pilots and understand what drives excellence at the highest level."
      highlights={[
        "Career journeys and milestones",
        "Training philosophies",
        "Personal rituals and mindset",
        "Lessons from elite performance",
      ]}
      videoCount={2}
      videoIds={["Q2oTFoQcrGw", "QmprO-5qkR8"]}
    />
  );
}
