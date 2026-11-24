"use client";

import { useEffect } from "react";

// The design kit's scripts change the DOM (nav sheet, motion, moments, forms). They load only after
// React has hydrated, so React never sees their changes as a mismatch.
const SCRIPTS = ["/assets/system.js", "/assets/motion/motion.js", "/assets/layout/layout.js"];

export function KitScripts() {
  useEffect(() => {
    for (const src of SCRIPTS) {
      if (document.querySelector(`script[src="${src}"]`)) continue;
      const s = document.createElement("script");
      s.type = "module";
      s.src = src;
      document.body.appendChild(s);
    }
  }, []);
  return null;
}
