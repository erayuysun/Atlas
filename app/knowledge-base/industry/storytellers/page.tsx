import type { Metadata } from "next";
import CoreSeriesTopicPage from "@/components/CoreSeriesTopicPage";

export const metadata: Metadata = {
  title: "Storytellers | Atlas Paragliding",
  description: "Profiles, interviews, and stories from influential figures in paragliding.",
};

export default function StorytellersPage() {
  return (
    <CoreSeriesTopicPage
      title="Storytellers"
      description="Go beyond flying and into the lives, journeys, and perspectives of the sport through human stories."
      highlights={[
        "Personal pilot journeys",
        "Community voices",
        "Cultural perspectives",
        "Real-world experiences",
      ]}
      videoCount={3}
      backHref="/knowledge-base/industry"
      backLabel="Industry & Community"
    />
  );
}
