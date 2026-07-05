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
      videoCount={6}
      videoIds={["EttlenmzWHM", "kSoFk23TuX0", "wvJWd8lVZzc", "fKWV5YR8MRE", "B9mx2zGLk0I", null]}
      videoTitles={[
        "Urs Haari: The Truth About Reserve Parachutes",
        "Watch this Before you Buy a Paragliding Harness",
        "A Reserve Parachute Trick Every Pilot Should Know",
        "Helmet Safety: Christian Ciech / ICARO 2000",
        "A Note of Thanks",
        "Carabiner Fatigue: Finsterwalder & Charly",
      ]}
      backHref="/knowledge-base/technical-focus"
      backLabel="Technical Focus & Flight Safety"
    />
  );
}
