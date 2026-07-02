"use client";

export default function EpisodeMap() {
  return (
    <div className="relative w-full">
      {/* Map Background */}
      <div className="relative w-full aspect-[2/1] bg-gray-800 rounded-xl overflow-hidden">
        <img 
          src="/Media/hp/globalmap.png" 
          alt="World Map" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
