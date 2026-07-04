import type { Metadata } from "next";
import CoreSeriesTopicPage from "@/components/CoreSeriesTopicPage";

export const metadata: Metadata = {
  title: "Resources, Tools & Tips | Atlas Paragliding",
  description: "Practical tools, flight analysis, pilot journeys, and performance insights.",
};

export default function ResourcesToolsTipsPage() {
  return (
    <CoreSeriesTopicPage
      title="Resources, Tools & Tips"
      description="Break down real flights and decisions using tools and insights that accelerate your learning curve."
      highlights={[
        "Tracklog analysis techniques",
        "Performance review tools",
        "Case studies of notable flights",
        "Practical tips from experienced pilots",
      ]}
      videoCount={0}
      backHref="/knowledge-base/competitions"
      backLabel="Competitions & Performance"
    />
  );
}
