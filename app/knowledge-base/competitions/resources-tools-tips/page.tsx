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
      videoCount={11}
      videoIds={["i-QoHo0ZaPU", "3ZySapU_YLI", "OiertfSq-6o", "yUsfGCfI_30", "L2MrAoec24I", "N4OGIzYNnl0", "mYG80ZiHIyo", "zKabIDewXn0", null, null, null]}
      videoTitles={[
        "Ziad Bassil: Paragliding Reviews & Changing Wings",
        "The Art of Capturing Human Flight | Jake Holland",
        "Flying & Filming 2: Benjamin Kellet",
        "Flying & Filming 3: Andreas Lattner",
        "Flying & Filming 1: Benjamin Jordan",
        "Grant Smith: The Silent Mind In Screaming Winds",
        "Sports Psychology for Paragliding with Yvonne Dathe",
        "AMA #1",
        "Science Backed Pre Flight Rituals",
        "Mastering the Unknown: Neuroscience of Crisis Management",
        "Ashutosh Chopra: Identifying Passion Vs Obsession",
      ]}
      backHref="/knowledge-base/competitions"
      backLabel="Competitions & Performance"
    />
  );
}
