import type { Metadata } from "next";
import CoreSeriesTopicPage from "@/components/CoreSeriesTopicPage";

export const metadata: Metadata = {
  title: "The Dark Side: Learning from Incidents | Atlas Paragliding",
  description: "Incident analysis, root causes, preventive measures, and practical safety lessons.",
};

export default function LearningFromIncidentsPage() {
  return (
    <CoreSeriesTopicPage
      title="The Dark Side: Learning from Incidents"
      description="Understand accidents and incidents through detailed analysis to improve awareness and safety."
      highlights={[
        "Incident case studies",
        "Root cause analysis",
        "Contributing factors",
        "Preventive lessons and insights",
      ]}
      videoCount={3}
      backHref="/knowledge-base/industry"
      backLabel="Industry & Community"
    />
  );
}
