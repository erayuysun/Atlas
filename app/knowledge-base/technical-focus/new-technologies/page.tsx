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
      videoCount={7}
      videoIds={["aFO5Uk5BX9s", "MxwM1lJEVIU", "zEnjmp9hrlE", "vmnrTFbu6vg", "S2wiY4DO_TU", "YGU7-ctBYYE", null]}
      videoTitles={[
        "New Technologies 1: Beni Kälin",
        "New Technologies 2: Guillem Batlle & Adrià Grau",
        "New Technologies 4: Veselin Ovcharov",
        "New Technologies 5: Frantisek Pavlousek",
        "Understanding Skymate: The AI-Powered Smart Harness",
        "RAST Inventor Michael Nesler & the LeelooX Effect",
        "New Technologies 3: Stephan Stiegler",
      ]}
      backHref="/knowledge-base/technical-focus"
      backLabel="Technical Focus & Flight Safety"
    />
  );
}
