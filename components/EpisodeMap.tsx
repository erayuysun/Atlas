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

const ICONS = [
  "Paragliding.png",
  "podcast.png",
  "person.png",
  "Star Shine.png",
  "Network Intel Mode.png",
  "Netwrok Intelligence Update.png",
];

interface Pin {
  id: number;
  x: number;
  y: number;
  icon: string;
  name: string;
  description?: string;
}

interface PinDraft {
  x: number;
  y: number;
  icon: string;
  name: string;
  description: string;
}

export default function EpisodeMap() {
  const sectionRef   = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [visible,    setVisible]    = useState(false);
  const [scale,      setScale]      = useState(1);
  const [pan,        setPan]        = useState({ x: 0, y: 0 });
  const [pins,       setPins]       = useState<Pin[]>([]);
  const [isAdmin,    setIsAdmin]    = useState(false);
  const [addMode,    setAddMode]    = useState(false);
  const [draft,      setDraft]      = useState<PinDraft | null>(null);
  const [hoveredPin, setHoveredPin] = useState<number | null>(null);
  const [saving,     setSaving]     = useState(false);

  const dragging  = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const panStart  = useRef({ x: 0, y: 0 });
  const didDrag   = useRef(false);

  useEffect(() => {
    const token = localStorage.getItem("atlas_admin_token");
    if (token) setIsAdmin(true);
  }, []);

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

  const clampPan = useCallback((x: number, y: number, s: number) => {
    const el = containerRef.current;
    if (!el) return { x, y };
    const maxX = (el.offsetWidth  * (s - 1)) / 2;
    const maxY = (el.offsetHeight * (s - 1)) / 2;
    return { x: Math.min(maxX, Math.max(-maxX, x)), y: Math.min(maxY, Math.max(-maxY, y)) };
  }, []);

  const zoomReset = () => { setScale(1); setPan({ x: 0, y: 0 }); };

  const clickToMapPct = (clientX: number, clientY: number) => {
    const el = containerRef.current;
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    const W = el.offsetWidth, H = el.offsetHeight;
    const cx = clientX - rect.left, cy = clientY - rect.top;
    const lx = (cx - W / 2) / scale - pan.x / scale + W / 2;
    const ly = (cy - H / 2) / scale - pan.y / scale + H / 2;
    return { x: (lx / W) * 100, y: (ly / H) * 100 };
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    dragging.current = true; didDrag.current = false;
    dragStart.current = { x: e.clientX, y: e.clientY };
    panStart.current = { ...pan };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - dragStart.current.x, dy = e.clientY - dragStart.current.y;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) didDrag.current = true;
    if (scale > 1) setPan(clampPan(panStart.current.x + dx, panStart.current.y + dy, scale));
  };
  const onMouseUp = (e: React.MouseEvent) => {
    const wasDragging = didDrag.current;
    dragging.current = false; didDrag.current = false;
    if (addMode && !wasDragging) {
      const pos = clickToMapPct(e.clientX, e.clientY);
      if (pos) setDraft({ x: pos.x, y: pos.y, icon: ICONS[0], name: "", description: "" });
    }
  };
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    dragging.current = true; didDrag.current = false;
    dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    panStart.current = { ...pan };
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!dragging.current || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - dragStart.current.x, dy = e.touches[0].clientY - dragStart.current.y;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) didDrag.current = true;
    if (scale > 1) setPan(clampPan(panStart.current.x + dx, panStart.current.y + dy, scale));
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const wasDragging = didDrag.current;
    dragging.current = false; didDrag.current = false;
    if (addMode && !wasDragging && e.changedTouches.length === 1) {
      const pos = clickToMapPct(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      if (pos) setDraft({ x: pos.x, y: pos.y, icon: ICONS[0], name: "", description: "" });
    }
  };

  const savePin = async () => {
    if (!draft || !draft.name.trim()) return;
    setSaving(true);
    const token = localStorage.getItem("atlas_admin_token");
    try {
      const res = await fetch("/api/pins", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify(draft),
      });
      if (res.ok) {
        const newPin = await res.json();
        setPins(p => [...p, newPin]);
        setDraft(null);
        setAddMode(false);
      }
    } finally {
      setSaving(false);
    }
  };

  const deletePin = async (id: number) => {
    const token = localStorage.getItem("atlas_admin_token");
    await fetch("/api/pins", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ id }),
    });
    setPins(p => p.filter(pin => pin.id !== id));
  };

  const labelOpacity = Math.max(0, 1 - (scale - 1.2) / 0.3);
  const mapCursor = addMode ? "crosshair" : scale > 1 ? (dragging.current ? "grabbing" : "grab") : "default";

  return (
    <div ref={sectionRef} className="relative w-full">

      {/* Admin toolbar */}
      {isAdmin && (
        <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
          <button
            onClick={() => { setAddMode(m => !m); setDraft(null); }}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${addMode ? "bg-orange-500 text-white" : "bg-black/60 text-white hover:bg-black/80"}`}
          >
            {addMode ? "✕ Cancel" : "+ Add Pin"}
          </button>
          {addMode && (
            <span className="bg-black/60 text-gray-300 text-xs px-3 py-1.5 rounded-full">
              Click anywhere on the map
            </span>
          )}
        </div>
      )}

      {/* Zoom slider */}
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

      {/* Map */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[2/1] bg-gray-800 rounded-xl overflow-hidden"
        style={{ cursor: mapCursor }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={() => { dragging.current = false; didDrag.current = false; }}
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
          }}
        >
          <img
            src="/Media/hp/mapNoName.png"
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
                src={`/Media/hp/icons/${pin.icon}`}
                alt={pin.name}
                className="w-8 h-8 drop-shadow-lg"
                style={{ filter: "brightness(0) saturate(100%) invert(55%) sepia(84%) saturate(1000%) hue-rotate(352deg) brightness(101%)" }}
                draggable={false}
              />
              <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-black/90 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap pointer-events-none transition-opacity duration-200 ${hoveredPin === pin.id ? "opacity-100" : "opacity-0"}`}>
                <p className="font-semibold">{pin.name}</p>
                {pin.description && <p className="text-gray-300 mt-0.5">{pin.description}</p>}
              </div>
              {isAdmin && (
                <button
                  onClick={e => { e.stopPropagation(); deletePin(pin.id); }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 hover:bg-red-600 text-white rounded-full text-[10px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition pointer-events-auto"
                >×</button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add Pin modal */}
      {draft && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4" onClick={() => setDraft(null)}>
          <div className="bg-[#1a1a1a] border border-gray-700 rounded-2xl p-6 w-full max-w-sm" onClick={e => e.stopPropagation()}>
            <h3 className="text-white font-bold text-lg mb-4">New Pin</h3>

            <p className="text-gray-400 text-xs mb-2">Choose icon</p>
            <div className="grid grid-cols-6 gap-2 mb-4">
              {ICONS.map(icon => (
                <button
                  key={icon}
                  onClick={() => setDraft(d => d ? { ...d, icon } : d)}
                  className={`p-1.5 rounded-lg border-2 transition ${draft.icon === icon ? "border-orange-500" : "border-transparent hover:border-gray-600"}`}
                >
                  <img src={`/Media/hp/icons/${icon}`} alt={icon} className="w-full h-auto" style={{ filter: "brightness(0) saturate(100%) invert(55%) sepia(84%) saturate(1000%) hue-rotate(352deg) brightness(101%)" }} draggable={false} />
                </button>
              ))}
            </div>

            <input
              type="text"
              placeholder="Pin name *"
              value={draft.name}
              onChange={e => setDraft(d => d ? { ...d, name: e.target.value } : d)}
              className="w-full px-4 py-2 bg-transparent border border-gray-700 focus:border-orange-500 rounded-full text-white text-sm outline-none transition mb-3 placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Description (optional)"
              value={draft.description}
              onChange={e => setDraft(d => d ? { ...d, description: e.target.value } : d)}
              className="w-full px-4 py-2 bg-transparent border border-gray-700 focus:border-orange-500 rounded-full text-white text-sm outline-none transition mb-5 placeholder-gray-500"
            />

            <div className="flex gap-3">
              <button onClick={() => setDraft(null)} className="flex-1 py-2 border border-gray-700 hover:border-gray-500 text-white rounded-full text-sm transition">Cancel</button>
              <button
                onClick={savePin}
                disabled={!draft.name.trim() || saving}
                className="flex-1 py-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-40 text-white font-semibold rounded-full text-sm transition"
              >
                {saving ? "Saving…" : "Save Pin"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

