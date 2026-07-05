import type { Metadata } from "next";
import CoreSeriesTopicPage from "@/components/CoreSeriesTopicPage";

export const metadata: Metadata = {
  title: "Brand Stories & Manufacturer Profiles | Atlas Paragliding",
  description: "The history, innovation, and product development behind leading paragliding brands.",
};

export default function BrandStoriesPage() {
  return (
    <CoreSeriesTopicPage
      title="Brand Stories & Manufacturer Profiles"
      description="Explore the evolution, philosophy, and innovation shaping the equipment you trust."
      highlights={[
        "Company histories and milestones",
        "Design philosophies",
        "Product development processes",
        "Certification and safety standards",
      ]}
      videoCount={4}
      videoIds={["FvIZpqydhyo", "9GfZcM3P3jY", "l1gmplS02FI", null]}
      videoTitles={[
        "Pal Takats on Challenges, Change & The Future of Paragliding",
        "Brand Stories: Neo: Eric Roussel",
        "PWCA: Goran Dimiskovski",
        "Legacy and Lifetimes of Gin Seok Song",
      ]}
      backHref="/knowledge-base/industry"
      backLabel="Industry & Community"
    />
  );
}
