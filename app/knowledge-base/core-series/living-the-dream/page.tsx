import type { Metadata } from "next";
import CoreSeriesTopicPage from "@/components/CoreSeriesTopicPage";

export const metadata: Metadata = {
  title: "Living The Dream | Core Series",
  description: "Real pathways to turning a passion for paragliding into a sustainable lifestyle.",
};

export default function LivingTheDreamPage() {
  return (
    <CoreSeriesTopicPage
      title="Living The Dream"
      description="Explore real pathways to turning passion into a sustainable lifestyle."
      highlights={[
        "Career opportunities in paragliding",
        "Business and income pathways",
        "Lifestyle and work balance",
        "Long-term sustainability insights",
      ]}
      videoCount={2}
      videoIds={["bDJ1zRG90cs"]}
    />
  );
}
