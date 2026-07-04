import type { Metadata } from "next";
import CoreSeriesTopicPage from "@/components/CoreSeriesTopicPage";

export const metadata: Metadata = {
  title: "New Technologies | Atlas Paragliding",
  description: "Materials, safety systems, instruments, and digital analytics shaping paragliding.",
};

export default function NewTechnologiesPage() {
  return (
    <CoreSeriesTopicPage
      title="New Technologies"
      description="Discover how emerging materials, smart systems, instruments, and analytics are shaping the future of flight."
      highlights={[
        "Advanced materials",
        "Smart safety systems",
        "Modern flight instruments",
        "Digital analytics tools",
      ]}
      videoCount={3}
      backHref="/knowledge-base/technical-focus"
      backLabel="Technical Focus & Flight Safety"
    />
  );
}
