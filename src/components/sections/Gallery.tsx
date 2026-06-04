"use client";
import Image from "next/image";
import { siteSettings } from "@/data";
import { getTheme, cn } from "@/utils/theme";
import { motion } from "framer-motion";

const scrapbookMemories = [
  {
    id: 1,
    title: "The Smile",
    date: "October 2023",
    imageUrl: "/images/gallery-1-new.jpg", 
    styles: {
      rotate: "-rotate-6", 
      margin: "md:mt-32 md:-mr-12",
      filter: "grayscale hover:grayscale-0",
      zIndex: "z-10",
      scale: "md:scale-95", 
    },
    delay: 0.2,
  },
  {
    id: 2,
    title: "The Proposal",
    date: "February 2025",
    imageUrl: "/images/gallery-2.jpg", 
    styles: {
      rotate: "rotate-2", 
      margin: "md:-mt-12 md:mx-6", 
      filter: "grayscale-0", 
      zIndex: "z-30",
      scale: "md:scale-125 md:hover:scale-[1.30]", 
    },
    delay: 0.4,
  },
  {
    id: 3,
    title: "Together",
    date: "Forever Begins",
    imageUrl: "/images/gallery-3.jpg", 
    styles: {
      rotate: "rotate-12", 
      margin: "md:mt-16 md:-ml-12", 
      filter: "grayscale hover:grayscale-0",
      zIndex: "z-20",
      scale: "md:scale-90", 
    },
    delay: 0.6,
  },
];

export default function Gallery() {
  const theme = getTheme(siteSettings.theme);

  return (
    <section className="w-full bg-[#1c1510] py-32 flex flex-col items-center overflow-hidden relative min-h-screen">
      
      {/* 1. Unified Paper Texture Background (Opacity Reduced) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2b2119]/80 via-[#1c1510]/95 to-[#1c1510]" />
        {/* Reduced opacity from 20% to 10% so the memories win the visual battle */}
        <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-10 mix-blend-soft-light" />
      </div>

      {/* 2. Emotional Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-24 px-4 z-10 relative"
      >
        <p className="text-amber-400/80 italic text-xl md:text-2xl mb-4 font-serif">
          Captured Moments
        </p>
        <h2 className={cn("text-3xl md:text-4xl text-white tracking-[0.2em] uppercase mb-6", theme.fontHeading)}>
          Before Forever
        </h2>
        
        <p className="text-stone-400 font-serif italic text-sm md:text-base opacity-90 max-w-md mx-auto">
          "Every photograph holds a chapter of our story."
        </p>
        
        <div className="flex items-center justify-center gap-4 text-amber-400/50 mt-8">
          <div className="w-12 h-[1px] bg-amber-400/30" />
          <span className="text-sm">❦</span>
          <div className="w-12 h-[1px] bg-amber-400/30" />
        </div>
      </motion.div>

      {/* 3. The Scrapbook Layout */}
      <div className="w-full max-w-7xl px-4 md:px-8 relative z-10 flex flex-col md:flex-row justify-center items-center gap-16 md:gap-0 mt-12 md:mt-16">
        
        {/* The Tiny Dried Botanical Accent */}
        <svg 
          className="absolute hidden md:block left-[15%] top-[-10%] w-48 h-48 text-amber-900/40 -rotate-12 -z-10 opacity-30 drop-shadow-lg pointer-events-none" 
          viewBox="0 0 100 100" 
          fill="currentColor"
        >
          <path d="M50 100 Q40 50 15 20 Q35 25 50 35 Q65 15 85 20 Q60 50 50 100 Z" />
          <path d="M50 60 Q30 40 10 45 Q25 55 45 65 Z" />
          <path d="M50 60 Q70 40 90 45 Q75 55 55 65 Z" />
        </svg>

        {scrapbookMemories.map((memory) => (
          <motion.div
            key={memory.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: memory.delay, ease: "easeOut" }}
            className={cn(
              "relative group w-[85%] md:w-[28%] aspect-[3/4] bg-[#fdfbf7] p-3 pb-20 md:p-4 md:pb-24 transition-all duration-700 ease-out",
              "shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-black/5", 
              memory.styles.rotate,
              memory.styles.margin,
              memory.styles.zIndex,
              memory.styles.scale,
              "hover:z-50 hover:rotate-0" 
            )}
          >
            {/* Scrapbook Tape Accent */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-8 bg-[#e3dcd1]/90 backdrop-blur-md shadow-sm rotate-[-3deg] z-50 mix-blend-multiply border border-black/5 pointer-events-none" />

            {/* The Image */}
            <div className={cn("relative w-full h-full overflow-hidden shadow-inner transition-all duration-700", memory.styles.filter)}>
              <Image
                src={memory.imageUrl}
                alt={memory.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 85vw, 33vw"
              />
            </div>
            
            {/* The Polaroid Captions */}
            <div className="absolute bottom-0 left-0 right-0 h-20 md:h-24 flex flex-col justify-center items-center pointer-events-none">
               <p className="font-serif text-stone-800 text-xl md:text-2xl italic tracking-wide opacity-90 drop-shadow-sm">
                 {memory.title}
               </p>
               <p className={cn("mt-2 text-stone-500 uppercase tracking-[0.25em] text-[8px] md:text-[9px] font-semibold", theme.fontBody)}>
                 {memory.date}
               </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 4. The Final Emotional Anchor (New) */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 mt-24 md:mt-32 text-center"
      >
        <p className={cn("text-stone-400/60 uppercase tracking-[0.4em] text-[9px] md:text-[10px]", theme.fontBody)}>
          From strangers to soulmates.
        </p>
      </motion.div>
      
    </section>
  );
}