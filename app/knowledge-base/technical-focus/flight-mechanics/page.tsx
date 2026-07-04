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
      videoCount={3}
      backHref="/knowledge-base/technical-focus"
      backLabel="Technical Focus & Flight Safety"
    />
  );
}
