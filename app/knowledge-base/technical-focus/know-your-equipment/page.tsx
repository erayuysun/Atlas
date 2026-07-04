import type { Metadata } from "next";
import CoreSeriesTopicPage from "@/components/CoreSeriesTopicPage";

export const metadata: Metadata = {
  title: "Know Your Equipment | Atlas Paragliding",
  description: "Canopies, harnesses, reserves, maintenance, and equipment selection.",
};

export default function KnowYourEquipmentPage() {
  return (
    <CoreSeriesTopicPage
      title="Know Your Equipment"
      description="Gain confidence in your equipment through deeper understanding, maintenance, and selection knowledge."
      highlights={[
        "Canopy construction and materials",
        "Harness systems and protection",
        "Reserve parachute handling",
        "Maintenance and care practices",
      ]}
      videoCount={3}
      backHref="/knowledge-base/technical-focus"
      backLabel="Technical Focus & Flight Safety"
    />
  );
}
