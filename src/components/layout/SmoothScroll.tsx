"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.05, // Controls the smoothness (lower is smoother)
        duration: 1.5,
        smoothWheel: true,
      }}
    >
      {/* Bypassing the React 19 exact type match issue */}
      {children as any}
    </ReactLenis>
  );
}