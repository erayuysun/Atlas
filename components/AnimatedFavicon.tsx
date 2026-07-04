"use client";

import { useEffect } from "react";

export default function AnimatedFavicon() {
  useEffect(() => {
    const size = 32;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = "/Media/hp/logonobg.webp";

    let intervalId: ReturnType<typeof setInterval>;

    img.onload = () => {
      const logoH = size;
      const logoW = Math.round((img.naturalWidth / img.naturalHeight) * logoH);
      const travel = logoW - size;

      // Pre-render every frame into data URLs
      const frames: string[] = [];
      for (let x = 0; x >= -travel; x--) {
        ctx.clearRect(0, 0, size, size);
        ctx.drawImage(img, x, 0, logoW, logoH);
        frames.push(canvas.toDataURL("image/png"));
      }
      // Ping-pong: append reversed frames (skip first and last to avoid double)
      for (let i = frames.length - 2; i > 0; i--) {
        frames.push(frames[i]);
      }

      // Ensure favicon link exists
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }

      let frameIndex = 0;
      intervalId = setInterval(() => {
        if (link) link.href = frames[frameIndex];
        frameIndex = (frameIndex + 1) % frames.length;
      }, 33); // ~30fps
    };

    return () => { if (intervalId) clearInterval(intervalId); };
  }, []);

  return null;
}
