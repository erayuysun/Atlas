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
      videoCount={7}
      videoIds={[
        "DmyYSA6NeMw",
        "md9ls8OtBiA",
        "J8visA4lxys",
        "njoPDwe457w",
        "VqkYy6YhXcY",
        "pFxe7oZTH2E",
        null,
      ]}
      videoTitles={[
        "Risk Vs Reward 5: Gabriel Orsini",
        "Risk Vs Reward 1: Philipp Zellner",
        "Risk Vs Reward 2: Subir Sidhu",
        "Risk Vs Reward 3: Manfred Ruhmer",
        "Consequence Over Probability: Will Gadd",
        "Kinga Masztalerz: Building a Healthy Relationship with the Skies",
        "Risk Vs Reward 4: Raúl Rodríguez",
      ]}
      backHref="/knowledge-base/competitions"
      backLabel="Competitions & Performance"
    />
  );
}
