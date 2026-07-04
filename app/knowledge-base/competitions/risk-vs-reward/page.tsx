import type { Metadata } from "next";
import CoreSeriesTopicPage from "@/components/CoreSeriesTopicPage";

export const metadata: Metadata = {
  title: "Risk vs. Reward | Atlas Paragliding",
  description: "Calculated decision-making and safety frameworks for competition flying.",
};

export default function RiskVsRewardPage() {
  return (
    <CoreSeriesTopicPage
      title="Risk vs. Reward"
      description="Learn how to balance performance with safety by understanding when to push and when to hold back."
      highlights={[
        "Risk assessment in real conditions",
        "High-consequence scenario awareness",
        "Personal limit setting",
        "Practical decision-making frameworks",
      ]}
      videoCount={5}
      videoIds={[
        "md9ls8OtBiA",
        "J8visA4lxys",
        "njoPDwe457w",
        "MFYb9KmT15s",
        "DmyYSA6NeMw",
      ]}
      backHref="/knowledge-base/competitions"
      backLabel="Competitions & Performance"
    />
  );
}
