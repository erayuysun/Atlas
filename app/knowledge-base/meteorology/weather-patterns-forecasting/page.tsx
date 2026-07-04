import type { Metadata } from "next";
import CoreSeriesTopicPage from "@/components/CoreSeriesTopicPage";

export const metadata: Metadata = {
  title: "Weather Patterns & Forecasting | Atlas Paragliding",
  description:
    "Atmospheric conditions, weather forecasting tools, and micrometeorology for paragliding.",
};

export default function WeatherPatternsForecastingPage() {
  return (
    <CoreSeriesTopicPage
      title="Weather Patterns and Forecasting"
      description="Build a solid foundation in understanding weather systems and how they influence flying conditions."
      highlights={[
        "Pressure systems and fronts",
        "Cloud formations and indicators",
        "Wind patterns and thermals",
        "Forecast interpretation",
      ]}
      videoCount={3}
      backHref="/knowledge-base/meteorology"
      backLabel="Meteorology & Weather Analysis"
    />
  );
}
