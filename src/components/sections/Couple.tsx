"use client";
import Image from "next/image";
import { siteSettings } from "@/data";
import { getTheme, cn } from "@/utils/theme";
import { motion } from "framer-motion";

// Small decorative element for the frames and dividers
const Ornament = () => (
  <svg className="w-3 h-3 text-amber-400/50 fill-current" viewBox="0 0 24 24">
     <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

// Custom Luxury Emblem (Intertwined Rings & Floral Crest)
const CustomEmblem = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={cn("stroke-amber-400/80 fill-none", className)}>
    {/* Intertwined Wedding Rings */}
    <circle cx="42" cy="50" r="16" strokeWidth="1.5" opacity="0.9" />
    <circle cx="58" cy="50" r="16" strokeWidth="1.5" opacity="0.9" />
    
    {/* Subtle Odia-inspired Floral/Mandala Accents */}
    <path d="M35 25 Q 50 15 65 25" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
    <path d="M35 75 Q 50 85 65 75" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
    
    {/* Center Diamond/Sparkle */}
    <path d="M50 43 L 51.5 48.5 L 57 50 L 51.5 51.5 L 50 57 L 48.5 51.5 L 43 50 L 48.5 48.5 Z" className="fill-amber-400/60" stroke="none" />
  </svg>
);

export default function Couple() {
  const theme = getTheme(siteSettings.theme);

  return (
    <section id="couple" className="relative w-full py-16 md:py-24 flex flex-col items-center overflow-hidden bg-[#1c1510]">
      
      {/* 1. THE FEATURED ATMOSPHERE */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center">
        <Image
          src="/images/palace-bright.jpg" 
          alt="Palace Atmosphere"
          fill
          className="object-cover object-center opacity-40 blur-[1px]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#140a05]/55 to-[#1c1510]/85" />
        <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-[0.04] mix-blend-soft-light" />
      </div>

      {/* 2. THE NARRATIVE HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl px-4 text-center mt-4 mb-12 md:mb-16 flex justify-center items-center"
      >
        {/* The Golden Spotlight */}
        <div className="absolute w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(255,210,120,0.12),transparent_70%)] pointer-events-none z-0 mix-blend-screen" />

        {/* The Premium Glass Quote Card */}
        <div 
          className="relative z-10 py-10 md:py-14 px-6 md:px-12 shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          style={{
            backgroundColor: 'rgba(25, 15, 10, 0.72)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(212, 175, 55, 0.25)'
          }}
        >
          
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-amber-400/40" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-400/40" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-amber-400/40" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-amber-400/40" />

          <h2 className={cn("text-[10px] md:text-xs text-amber-400/90 tracking-[0.6em] uppercase mb-6 font-semibold", theme.fontBody)}>
            Meet The Couple
          </h2>
          
          <p className="text-white font-serif italic text-2xl md:text-4xl leading-relaxed md:leading-loose opacity-100 drop-shadow-md">
            "Before the vows,<br />
            before the celebrations,<br />
            there was a story."
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-amber-400/40" />
            <Ornament />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-amber-400/40" />
          </div>
        </div>
      </motion.div>

      {/* 3. THE EDITORIAL PORTRAITS */}
      <div className="relative z-10 w-full max-w-6xl px-4 md:px-12 flex flex-col md:flex-row items-center justify-center gap-16 md:gap-12 lg:gap-32">
        
        {/* Custom Luxury Emblem (Replaces the text monogram) */}
        <div className="hidden md:flex absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-[#190f0a] border border-amber-400/30 shadow-[0_0_40px_rgba(0,0,0,0.9)] items-center justify-center z-30">
          <div className="w-[85%] h-[85%] rounded-full border border-amber-400/15 flex items-center justify-center bg-gradient-to-br from-[#2b1b11] to-[#120a06]">
            <CustomEmblem className="w-14 h-14" />
          </div>
        </div>

        {/* BRIDE SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center w-full max-w-[320px] md:max-w-sm"
        >
          <div className="relative w-full aspect-[4/5] p-3 md:p-4 bg-[#190f0a]/60 backdrop-blur-md border border-amber-400/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-amber-400/50" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-amber-400/50" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-amber-400/50" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-amber-400/50" />
            
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2"><Ornament /></div>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2"><Ornament /></div>
            
            <div className="relative w-full h-full overflow-hidden shadow-inner bg-[#15100c]">
              <Image
                src="/images/bride.jpg" 
                alt="Saanvi"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className="text-center mt-10 md:mt-12">
            <h3 className={cn("text-4xl md:text-5xl text-white mb-3 drop-shadow-lg", theme.fontHeading)}>
              Saanvi
            </h3>
            <p className={cn("text-amber-400/80 uppercase tracking-[0.3em] text-[9px] md:text-[10px] mb-6 font-semibold", theme.fontBody)}>
              The Bride
            </p>
            <p className="text-stone-300/90 font-serif italic text-sm md:text-base leading-loose px-4 drop-shadow-sm">
              Lover of art,<br />
              coffee conversations,<br />
              and beautiful sunsets.
            </p>
          </div>
        </motion.div>

        {/* GROOM SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center w-full max-w-[320px] md:max-w-sm mt-16 md:mt-0"
        >
          <div className="relative w-full aspect-[4/5] p-3 md:p-4 bg-[#190f0a]/60 backdrop-blur-md border border-amber-400/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-amber-400/50" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-amber-400/50" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-amber-400/50" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-amber-400/50" />
            
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2"><Ornament /></div>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2"><Ornament /></div>

            <div className="relative w-full h-full overflow-hidden shadow-inner bg-[#15100c]">
              <Image
                src="/images/groom.jpg" 
                alt="Aditya"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className="text-center mt-10 md:mt-12">
            <h3 className={cn("text-4xl md:text-5xl text-white mb-3 drop-shadow-lg", theme.fontHeading)}>
              Aditya
            </h3>
            <p className={cn("text-amber-400/80 uppercase tracking-[0.3em] text-[9px] md:text-[10px] mb-6 font-semibold", theme.fontBody)}>
              The Groom
            </p>
            <p className="text-stone-300/90 font-serif italic text-sm md:text-base leading-loose px-4 drop-shadow-sm">
              Builder of ideas,<br />
              collector of ambitions,<br />
              and her biggest supporter.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}