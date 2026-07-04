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
      videoCount={3}
      videoIds={["_apo1PNabZI", "TO6gW69d7YE", "kOgDYSvfUuo"]}
    />
  );
}
