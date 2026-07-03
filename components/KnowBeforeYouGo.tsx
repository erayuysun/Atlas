"use client";

import { useState } from "react";

const sections = [
  {
    title: "General Info",
    content: "Globally known as a hotbed of archaeological discoveries contributing to the story of human evolution, Kenya offers much more than just world class safaris. Flying a paraglider in cradle of humankind allows you to soar over majestic landscapes with rich culture and awe inspiring scenery. Chase the World Speed Records in Kerio Valley or endless adventures while crossing the equator from above. This tropical paradise delivers like no other flying destination known to humankind",
  },
  {
    title: "Thermal Strength",
    content: "The variometer readings vary from 1-2 m/s (weak, early morning/late afternoon) to 4-6 m/s (strong, midday peaks), with rare surges to 6-7 m/s. Variations include narrow, turbulent cores and wide, smooth ones as well, types range from classic bubble thermals to dynamic triggers depending on the location of flight",
  },
  {
    title: "Flying Season",
    content: "The weather in Kenya is determined by its tropical location and the oscillating effects of the Inter-tropical Convergence Zone (ITCZ), which annually travels back and forth across equatorial Africa, providing Kenya with a bimodal annual rainfall pattern. Flying season peaks in this equatorial paradise from December to March. Ideal for joining our Kenya tour.",
  },
];

export default function KnowBeforeYouGo() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Title bar */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          padding: "14px 24px",
          backgroundColor: "#1e1e1e",
          border: "none",
          borderRadius: "14px",
          cursor: "pointer",
          outline: "none",
        }}
      >
        <span style={{ color: "#f97316", fontWeight: 700, fontSize: "16px", letterSpacing: "0.04em" }}>
          Know Before You Go
        </span>
        <svg
          width="14" height="14"
          style={{ color: "#f97316", transition: "transform 300ms", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}
          fill="none" stroke="#f97316" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Content */}
      <div
        className="overflow-hidden transition-all duration-500"
        style={{ maxHeight: open ? "1000px" : "0px" }}
      >
        <div className="bg-transparent">
          {sections.map(section => (
            <div key={section.title} className="px-8 md:px-16 py-8 text-center">
              <p className="text-white font-semibold text-sm md:text-base mb-4">{section.title}</p>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
