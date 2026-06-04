"use client";
import Image from "next/image";
import { siteSettings } from "@/data";
import { getTheme, cn } from "@/utils/theme";
import { motion } from "framer-motion";
import { Cormorant_Garamond, Great_Vibes, Cinzel } from 'next/font/google';

// Injecting Luxury Fonts specifically for this invitation section
const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'], 
  weight: ['400', '600'], 
  style: ['normal', 'italic'] 
});
const greatVibes = Great_Vibes({ 
  subsets: ['latin'], 
  weight: ['400'] 
});
const cinzel = Cinzel({ 
  subsets: ['latin'], 
  weight: ['400', '600'] 
});

// Small decorative element for the divider
const Ornament = () => (
  <svg className="w-4 h-4 text-amber-400/50 fill-current" viewBox="0 0 24 24">
     <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

export default function Closing() {
  const theme = getTheme(siteSettings.theme);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="closing" className="relative w-full py-24 md:py-32 flex flex-col items-center overflow-hidden bg-[#1c1510]">
      
      {/* 1. THE CLEAN CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/closing-bg.jpg" 
          alt="Our Future Together"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Clean Vignette Overlay: Keeps the text legible while letting the sunset glow through the center */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1510]/95 via-[#1c1510]/50 to-[#1c1510]/95" />
      </div>

      {/* 2. THE HEIRLOOM INVITATION */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl px-6 text-center flex flex-col items-center mt-8"
      >
        {/* The Calligraphy Heading */}
        <h2 className={cn("text-4xl md:text-6xl text-amber-400/90 mb-8 md:mb-10 drop-shadow-md", greatVibes.className)}>
          With Love & Gratitude
        </h2>
        
        {/* The Formal, Emotional Invitation Body */}
        <p className={cn("text-white/95 text-xl md:text-3xl leading-loose md:leading-[2.2] drop-shadow-lg italic", cormorant.className)}>
          As we begin the most beautiful chapter of our lives,<br />
          we request the honour of your presence<br />
          to witness and celebrate our union.
        </p>

        {/* Elegant Divider */}
        <div className="flex items-center justify-center gap-6 mt-12 mb-12 w-full">
          <div className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent to-amber-400/50" />
          <Ornament />
          <div className="w-24 md:w-32 h-[1px] bg-gradient-to-l from-transparent to-amber-400/50" />
        </div>

        {/* Aristocratic Event Details */}
        <div className="mb-10 md:mb-14 flex flex-col items-center">
          <p className={cn("text-amber-400/50 tracking-[0.4em] md:tracking-[0.5em] text-[9px] md:text-[10px] mb-4", cinzel.className)}>
            XV NOVEMBER MMXXVI
          </p>
          <div className="w-8 h-[1px] bg-amber-400/40 mb-4" />
          <p className={cn("text-amber-400/90 tracking-[0.3em] md:tracking-[0.4em] uppercase text-xs md:text-sm mb-3 font-semibold drop-shadow-md", cinzel.className)}>
            15 November 2026
          </p>
          <p className={cn("text-stone-300 tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] md:text-[10px] drop-shadow-md", cinzel.className)}>
            Bhubaneswar, Odisha
          </p>
        </div>

        {/* The Royal Monogram Names */}
        <h3 className={cn("text-4xl md:text-6xl text-white tracking-[0.2em] md:tracking-[0.3em] drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] mb-8", cormorant.className)}>
          SAANVI <span className="text-3xl md:text-5xl text-amber-400/80 mx-3 md:mx-6 font-light">&</span> ADITYA
        </h3>

        {/* The Handwritten Signature */}
        <p className={cn("text-amber-400/80 text-3xl md:text-4xl mt-2 drop-shadow-md", greatVibes.className)}>
          With love,
        </p>

      </motion.div>

      {/* 3. SCROLL TO TOP & COPYRIGHT */}
      <div className="relative z-10 mt-24 flex flex-col items-center">
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full border border-amber-400/30 flex items-center justify-center text-amber-400/80 hover:bg-amber-400/20 hover:border-amber-400 hover:text-amber-400 transition-all duration-300 mb-12 backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          ↑
        </button>
        <p className={cn("text-stone-400/80 text-[8px] md:text-[10px] uppercase tracking-[0.2em] drop-shadow-md", theme.fontBody)}>
          © 2026 Saanvi & Aditya. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}