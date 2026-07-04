"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const CONTINENTS = [
  { name: "NORTH AMERICA", top: "28%", left: "16%" },
  { name: "SOUTH AMERICA", top: "60%", left: "26%" },
  { name: "EUROPE",        top: "22%", left: "47%" },
  { name: "AFRICA",        top: "52%", left: "49%" },
  { name: "ASIA",          top: "26%", left: "66%" },
  { name: "AUSTRALIA",     top: "65%", left: "78%" },
];

interface Pin {
  id: number;
  x: number;
  y: number;
  icon: string;
  name: string;
  description?: string;
}

export default function EpisodeMap() {
  const sectionRef   = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [visible,    setVisible]    = useState(false);
  const [scale,      setScale]      = useState(1);
  const [pan,        setPan]        = useState({ x: 0, y: 0 });
  const [pins,       setPins]       = useState<Pin[]>([]);
  const [hoveredPin, setHoveredPin] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const dragging  = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const panStart  = useRef({ x: 0, y: 0 });
  const didDrag   = useRef(false);
  const containerSize = useRef({ width: 0, height: 0 });
  const panFrame = useRef<number | null>(null);
  const pendingPan = useRef<{ x: number; y: number } | null>(null);
  const scaleRef = useRef(scale);
  const panRef = useRef(pan);

  useEffect(() => { scaleRef.current = scale; }, [scale]);
  useEffect(() => { panRef.current = pan; }, [pan]);

  useEffect(() => {
    fetch("/api/pins").then(r => r.json()).then(setPins).catch(() => {});
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateSize = () => {
      containerSize.current = {
        width: el.clientWidth,
        height: el.clientHeight,
      };
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (panFrame.current !== null) cancelAnimationFrame(panFrame.current);
    };
  }, []);

  const clampPan = useCallback((x: number, y: number, s: number) => {
    const { width, height } = containerSize.current;
    if (!width || !height) return { x, y };
    const maxX = (width  * (s - 1)) / 2;
    const maxY = (height * (s - 1)) / 2;
    return { x: Math.min(maxX, Math.max(-maxX, x)), y: Math.min(maxY, Math.max(-maxY, y)) };
  }, []);

  const schedulePan = useCallback((nextPan: { x: number; y: number }) => {
    pendingPan.current = nextPan;
    if (panFrame.current !== null) return;

    panFrame.current = requestAnimationFrame(() => {
      if (pendingPan.current) setPan(pendingPan.current);
      pendingPan.current = null;
      panFrame.current = null;
    });
  }, []);

  const zoomReset = () => { setScale(1); setPan({ x: 0, y: 0 }); };

  const onMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    dragging.current = true;
    didDrag.current = false;
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    panStart.current = { ...panRef.current };
  };

  useEffect(() => {
    const onGlobalMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      const dx = e.clientX - dragStart.current.x, dy = e.clientY - dragStart.current.y;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) didDrag.current = true;
      if (scaleRef.current > 1) schedulePan(clampPan(panStart.current.x + dx, panStart.current.y + dy, scaleRef.current));
    };

    const stopDrag = () => {
      if (!dragging.current) return;
      dragging.current = false;
      didDrag.current = false;
      setIsDragging(false);
    };

    window.addEventListener('mousemove', onGlobalMouseMove);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('mouseleave', stopDrag);
    window.addEventListener('blur', stopDrag);

    return () => {
      window.removeEventListener('mousemove', onGlobalMouseMove);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('mouseleave', stopDrag);
      window.removeEventListener('blur', stopDrag);
    };
  }, [schedulePan, clampPan]);
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    dragging.current = true; didDrag.current = false;
    dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    panStart.current = { ...panRef.current };
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - dragStart.current.x, dy = e.touches[0].clientY - dragStart.current.y;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) didDrag.current = true;
    if (scaleRef.current > 1) schedulePan(clampPan(panStart.current.x + dx, panStart.current.y + dy, scaleRef.current));
  };
  const onTouchEnd = () => {
    dragging.current = false;
    didDrag.current = false;
  };

  const labelOpacity = Math.max(0, 1 - (scale - 1.2) / 0.3);
  const mapCursor = isDragging ? "grabbing" : scale > 1 ? "grab" : "default";

  return (
    <div ref={sectionRef} className="relative w-full">

      <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-2 bg-black/60 rounded-full px-2 py-3">
        <span className="text-white text-xs font-bold select-none">+</span>
        <input
          type="range" min={1} max={4} step={0.1} value={scale}
          onChange={e => {
            const s = parseFloat(e.target.value);
            setScale(s);
            if (s === 1) setPan({ x: 0, y: 0 });
            else setPan(p => clampPan(p.x, p.y, s));
          }}
          className="accent-orange-500 cursor-pointer"
          style={{ writingMode: "vertical-lr", direction: "rtl", height: "80px" }}
          aria-label="Zoom"
        />
        <span className="text-white text-xs font-bold select-none">−</span>
        {scale > 1 && (
          <button onClick={zoomReset} className="text-white text-[10px] font-semibold hover:text-orange-400 transition mt-1">↺</button>
        )}
      </div>

      <div
        ref={containerRef}
        className="relative w-full aspect-[2/1] bg-gray-800 rounded-xl overflow-hidden"
        style={{ cursor: mapCursor, touchAction: scale > 1 ? "none" : "pan-y" }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `scale(${scale}) translate(${pan.x / scale}px, ${pan.y / scale}px)`,
            transformOrigin: "center center",
            transition: dragging.current ? "none" : "transform 150ms ease",
            willChange: "transform",
            backfaceVisibility: "hidden",
          }}
        >
          <img
            src="/Media/hp/mapNoName.webp"
            alt="World Map"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: visible ? 1 : 0, transition: "opacity 900ms ease" }}
          />

          {visible && CONTINENTS.map(c => (
            <span
              key={c.name}
              className="absolute text-white font-bold tracking-widest pointer-events-none select-none"
              style={{
                top: c.top, left: c.left,
                fontSize: "clamp(6px, 1vw, 11px)",
                opacity: labelOpacity,
                transition: "opacity 250ms ease",
                textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                transform: "translate(-50%, -50%)",
              }}
            >
              {c.name}
            </span>
          ))}

          {pins.map(pin => (
            <div
              key={pin.id}
              className="absolute group"
              style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: "translate(-50%, -100%)", zIndex: hoveredPin === pin.id ? 30 : 20 }}
              onMouseEnter={() => setHoveredPin(pin.id)}
              onMouseLeave={() => setHoveredPin(null)}
            >
              <img
                src={`/Media/hp/Icons/${pin.icon.replace(/\.(png|jpe?g)$/i, ".webp")}`}
                alt={pin.name}
                className="w-8 h-8 drop-shadow-lg"
                style={{ filter: "brightness(0) saturate(100%) invert(55%) sepia(84%) saturate(1000%) hue-rotate(352deg) brightness(101%)" }}
                draggable={false}
              />
              <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-black/90 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap pointer-events-none transition-opacity duration-200 ${hoveredPin === pin.id ? "opacity-100" : "opacity-0"}`}>
                <p className="font-semibold">{pin.name}</p>
                {pin.description && <p className="text-gray-300 mt-0.5">{pin.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

