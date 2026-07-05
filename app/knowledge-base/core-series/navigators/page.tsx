import type { Metadata } from "next";
import CoreSeriesTopicPage from "@/components/CoreSeriesTopicPage";

export const metadata: Metadata = {
  title: "Navigators | Core Series",
  description: "Site-specific paragliding guides built with local expert insights.",
};

export default function NavigatorsPage() {
  return (
    <CoreSeriesTopicPage
      title="Navigators"
      description="Site-specific guides built with local expert insights to help you understand not just where to fly, but how to fly it right."
      highlights={[
        "In-depth site breakdowns",
        "Local weather patterns & triggers",
        "Airspace rules and regulations",
        "Proven best practices (and common mistakes to avoid)",
      ]}
      videoCount={6}
      videoIds={["kOgDYSvfUuo", "xXSGK8oB4Oc", "TO6gW69d7YE", "0VPg7TZ9hK0", "UVLF8l0qFlA", null]}
      videoTitles={[
        "Navigating Colombia: Pal Takats",
        "Navigating Australia: Godfrey Wenness",
        "Navigating India: Eddie Colfox",
        "Navigating Panchgani / Pre PWC India: Vistasp Kharas",
        "Pre PWC Kenya: Nikolay Yotov",
        "Navigating India: Jigish Gohil / Bonus Episode",
      ]}
    />
  );
}
