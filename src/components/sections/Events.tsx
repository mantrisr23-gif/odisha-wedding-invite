"use client";
import { useState } from "react";
import Image from "next/image";
import { siteSettings, eventsData } from "@/data";
import { getTheme, cn } from "@/utils/theme";
import { motion, AnimatePresence } from "framer-motion";

export default function Events() {
  const theme = getTheme(siteSettings.theme);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeEvent = eventsData[activeIndex];

  return (
    <section className="w-full bg-[#1c1510] py-24 flex flex-col items-center overflow-hidden relative min-h-screen">
      
      {/* 1. Unified Paper Texture Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2b2119]/80 via-[#1c1510]/95 to-[#1c1510]" />
        <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-20 mix-blend-soft-light" />
      </div>

      {/* 2. Section Header */}
      <div className="text-center mb-12 px-4 z-10 relative">
        <p className="text-amber-400/80 italic text-xl md:text-2xl mb-4 font-serif">
          Join Us For
        </p>
        <h2 className={cn("text-3xl md:text-4xl text-white tracking-[0.2em] uppercase", theme.fontHeading)}>
          The Celebrations
        </h2>
        <div className="flex items-center justify-center gap-4 text-amber-400/50 mt-8">
          <div className="w-12 h-[1px] bg-amber-400/30" />
          <span className="text-sm">❦</span>
          <div className="w-12 h-[1px] bg-amber-400/30" />
        </div>
      </div>

      {/* 3. Custom Elegant Navigation Layout */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 z-20 relative px-4">
        {eventsData.map((event: any, idx: number) => (
          <button
            key={event.id || idx}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "group relative pb-2 uppercase tracking-[0.2em] text-[10px] md:text-xs transition-colors duration-500",
              theme.fontBody,
              activeIndex === idx ? "text-amber-400" : "text-stone-500 hover:text-stone-300"
            )}
          >
            {event.title?.en || event.title}
            
            {/* Animated Underline for Active Tab */}
            {activeIndex === idx && (
              <motion.div 
                layoutId="activeTabIndicator"
                className="absolute bottom-0 left-0 right-0 h-[1px] bg-amber-400"
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* 4. The Interactive Event Display */}
      <div className="w-full max-w-6xl px-4 md:px-8 relative z-10 min-h-[60vh]">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeIndex}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full flex flex-col md:flex-row items-center"
          >
            
            {/* The Image (Pushed to the Right, 60% Width, Amber Glow) */}
            <div className="relative w-full md:w-[60%] h-[45vh] md:h-[65vh] z-10 p-1.5 bg-stone-100/5 border border-amber-400/15 shadow-[0_0_50px_rgba(0,0,0,0.6),0_0_80px_rgba(245,158,11,0.08)] md:order-2">
              <div className="relative w-full h-full overflow-hidden shadow-inner">
               <Image 
  src={activeEvent.imageUrl || "/images/placeholder.jpg"} 
  alt={activeEvent.title?.en || "Event Image"}
  fill
  sizes="(max-width: 768px) 100vw, 60vw" // Add this line
  className="object-cover object-center"
/>
              </div>
            </div>

            {/* The Glassmorphism Event Card (Overlapping from the Left) */}
            <div className={cn(
              "relative w-[95%] md:w-[45%] flex flex-col justify-center p-8 md:p-14 bg-gradient-to-br from-[#2b2119]/85 to-[#1c1510]/95 backdrop-blur-xl border border-amber-400/10 shadow-2xl z-20 -mt-16 md:mt-0 overflow-hidden rounded-sm md:-mr-24 lg:-mr-32 md:order-1"
            )}>
              {/* Paper Texture Inside */}
              <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

              <div className="relative z-10">
                
                <h3 className={cn("text-4xl md:text-5xl text-white mb-6 drop-shadow-md", theme.fontHeading)}>
                  {activeEvent.title?.en || activeEvent.title}
                </h3>
                
                <div className="w-12 h-[1px] bg-amber-400/30 mb-8" />
                
                {/* Event Details Grid */}
                <div className={cn("flex flex-col gap-6 text-stone-300 tracking-[0.2em] text-[10px] md:text-xs uppercase font-light", theme.fontBody)}>
                  
                  <div className="flex flex-col gap-1">
                    <span className="text-amber-400/50 text-[8px] tracking-[0.3em]">When</span>
                    <p>{activeEvent.date?.en || activeEvent.date}</p>
                    <p>{activeEvent.time?.en || activeEvent.time}</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-amber-400/50 text-[8px] tracking-[0.3em]">Where</span>
                    <p className="leading-relaxed font-normal text-white">
                      {activeEvent.venue?.en || activeEvent.venue}
                    </p>
                  </div>

                </div>
                
                {activeEvent.description && (
                  <p className={cn("mt-8 text-stone-400 text-xs leading-relaxed opacity-90 border-t border-white/5 pt-6", theme.fontBody)}>
                    {activeEvent.description?.en || activeEvent.description}
                  </p>
                )}
                
                {/* Elegant Map Button */}
                {activeEvent.mapUrl && (
                  <a 
                    href={activeEvent.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "mt-10 inline-block w-full text-center py-4 border border-amber-400/30 text-amber-400 hover:bg-amber-400 hover:text-stone-950 transition-all duration-500 uppercase tracking-[0.3em] text-[9px] font-semibold",
                      theme.fontBody
                    )}
                  >
                    View Map & Directions
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
    </section>
  );
}