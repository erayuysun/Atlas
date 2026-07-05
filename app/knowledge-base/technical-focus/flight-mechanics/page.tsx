import type { Metadata } from "next";
import CoreSeriesTopicPage from "@/components/CoreSeriesTopicPage";

export const metadata: Metadata = {
  title: "Flight Mechanics | Atlas Paragliding",
  description: "Aerodynamics, control, airspeed, angle of attack, and the forces acting throughout flight.",
};

export default function FlightMechanicsPage() {
  return (
    <CoreSeriesTopicPage
      title="Flight Mechanics"
      description="Build a deeper understanding of the forces and principles that govern safe and efficient flight."
      highlights={[
        "Aerodynamic fundamentals",
        "AOA and airspeed",
        "Wing behavior in different phases",
        "Control inputs and their effects",
      ]}
      videoCount={6}
      videoIds={["iurDFHlgJjI", "wTfS5kv1t9M", "CBxyezZ-UOw", "xNMHk_8qbzo", "78PaTvxRWJ0", null]}
      videoTitles={[
        "Tom Lolies: The Science of Wing Design",
        "Helmut Schrempf: Modernizing SIV Courses",
        "Alain Zoller: The Science of EN Certifications",
        "Luc Armant: Debunking Myths and Upgrading Enzo 3",
        "Aljaž Valič: 777 — Paragliding's Slovenian Mavericks",
        "The Science Behind Parakites with Bryan Van Ostheim",
      ]}
      backHref="/knowledge-base/technical-focus"
      backLabel="Technical Focus & Flight Safety"
    />
  );
}
