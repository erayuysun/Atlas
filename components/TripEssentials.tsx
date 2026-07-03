"use client";

import { useState } from "react";

const essentials = [
  {
    title: "Capital",
    content: "Nairobi\nFounded: 1899\nElevation: 1,795 m",
  },
  {
    title: "Language",
    content: "Swahili & English\nIndigenous Languages:\nKenya has over\n60 ethnic languages",
  },
  {
    title: "Population",
    content: "57.7 million\n7th most populous\nin Africa,\n27th globally\nArea: 569,140 kmÂ²",
  },
  {
    title: "Currency",
    content: "KES (Kenyan Shilling)\nCash is used widely\nATM are common in\nBig towns only\nMpesa is preferred\n(Digital Payments Solution)",
  },
  {
    title: "Visa",
    content: "Please check\nVisa requirements\nfor your Nationality",
  },
  {
    title: "Voltage",
    content: "240 volts (V) with a\nfrequency of 50 Hertz\nPlug Type G\n(UK electrical socket)",
  },
];

export default function TripEssentials() {
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
          Trip Essentials
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
        style={{ maxHeight: open ? "600px" : "0px" }}
      >
        <div className="grid grid-cols-3 px-4 py-6">
          {essentials.map((item) => (
            <div key={item.title} className="px-4 py-6 text-center">
              <p className="text-white font-bold text-sm mb-3">{item.title}</p>
              <p className="text-gray-400 text-xs leading-relaxed whitespace-pre-line">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
