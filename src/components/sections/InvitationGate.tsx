"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Cormorant_Garamond, Cinzel, Great_Vibes } from 'next/font/google';

// Injecting Luxury Fonts
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'] });
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '600'] });
const greatVibes = Great_Vibes({ subsets: ['latin'], weight: ['400'] });

// Hydration-Safe Floating Particles
const FloatingParticles = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-amber-300/30 rounded-full blur-[1px]"
          initial={{
            x: Math.random() * 100 + "vw",
            y: Math.random() * 100 + "vh",
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -100 - 50 + "vh"],
            opacity: [0, Math.random() * 0.6 + 0.2, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

// Temple Arch Corner Accent
const CornerAccent = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 50 50" className={className}>
    <path d="M0 0 L50 0 L50 2 L2 2 L2 50 L0 50 Z" className="fill-amber-400/60" />
    <path d="M10 10 Q 30 10 30 30" className="stroke-amber-400/50 fill-none" strokeWidth="1" />
    <circle cx="10" cy="10" r="2" className="fill-amber-400/70" />
  </svg>
);

export default function InvitationGate() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);

  // The Theatrical Opening Sequence
  const handleOpen = () => {
    setIsUnlocking(true);
    // Wait 2 seconds for the cinematic zoom/glow sequence before removing the cover
    setTimeout(() => {
      setIsOpen(true);
    }, 2000); 
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div 
          initial={{ opacity: 1 }}
          animate={{ opacity: isUnlocking ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: isUnlocking ? 0.5 : 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#140a05] overflow-hidden"
        >
          {/* 1. CINEMATIC BACKGROUND (Now with Ken Burns Effect) */}
          <div className="absolute inset-0 z-0">
            <motion.div
              animate={{ 
                scale: isUnlocking ? 1.2 : [1.02, 1.08, 1.02],
                opacity: isUnlocking ? 0 : 0.4
              }}
              transition={{ 
                scale: { duration: isUnlocking ? 2 : 30, repeat: isUnlocking ? 0 : Infinity, ease: isUnlocking ? "easeInOut" : "linear" },
                opacity: { duration: 1.5 }
              }}
              className="absolute inset-0 w-full h-full origin-center"
            >
              <Image
                src="/images/couple-walking-sunset.jpg" 
                alt="Our Journey Begins"
                fill
                className="object-cover object-center blur-[2px]"
                priority
                sizes="100vw"
              />
            </motion.div>
            
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,10,5,0.2)_0%,rgba(20,10,5,0.85)_100%)]" />
            <motion.div 
              animate={{ opacity: isUnlocking ? 0 : 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-gradient-to-b from-[#140a05]/60 via-transparent to-[#140a05]/90" 
            />
            <FloatingParticles />
          </div>

          {/* 2. THE ORNAMENTAL FRAME (Zooms in and glows when clicked) */}
          <motion.div 
            animate={{ 
              scale: isUnlocking ? 1.15 : 1,
              boxShadow: isUnlocking 
                ? "0 0 100px rgba(212,175,55,0.4), inset 0 0 50px rgba(212,175,55,0.2)" 
                : "0 0 50px rgba(0,0,0,0.5)",
              borderColor: isUnlocking ? "rgba(212,175,55,0.6)" : "rgba(212,175,55,0.2)"
            }}
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            className="relative z-10 w-[90%] md:w-[85%] max-w-4xl h-[90vh] md:h-[85vh] border bg-[#190f0a]/40 backdrop-blur-sm flex flex-col items-center justify-evenly py-6 px-4 md:px-10 text-center"
          >
            {/* Golden Inner Border */}
            <div className="absolute inset-3 border border-amber-400/10 pointer-events-none" />

            {/* Custom Corner Accents */}
            <CornerAccent className="absolute top-4 left-4 w-6 h-6 md:w-8 md:h-8" />
            <CornerAccent className="absolute top-4 right-4 w-6 h-6 md:w-8 md:h-8 rotate-90" />
            <CornerAccent className="absolute bottom-4 left-4 w-6 h-6 md:w-8 md:h-8 -rotate-90" />
            <CornerAccent className="absolute bottom-4 right-4 w-6 h-6 md:w-8 md:h-8 rotate-180" />

            {/* TOP SECTION: Cultural Motif & Request */}
            <motion.div 
              animate={{ opacity: isUnlocking ? 0 : 1, y: isUnlocking ? -20 : 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center z-10 mt-2"
            >
              <p className="text-amber-400/70 text-lg md:text-xl font-medium tracking-widest mb-6 drop-shadow-md">
                ॥ शुभ विवाह ॥
              </p>
              
              <p className={`text-amber-400/80 tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] uppercase mb-3 ${cinzel.className}`}>
                With Their Families
              </p>
              <p className={`text-stone-200 text-lg md:text-xl leading-relaxed drop-shadow-md ${cormorant.className} italic`}>
                Request the honour of<br />your presence
              </p>
            </motion.div>

            {/* MIDDLE SECTION: The Single-Line Names */}
            <motion.div 
              animate={{ opacity: isUnlocking ? 0 : 1, scale: isUnlocking ? 1.05 : 1 }}
              transition={{ duration: 1, delay: isUnlocking ? 0 : 0.8 }}
              className="flex flex-col items-center z-10 w-full"
            >
              <h1 className={`text-4xl md:text-5xl lg:text-6xl text-white tracking-[0.12em] font-medium drop-shadow-[0_0_15px_rgba(255,215,0,0.15)] leading-none ${cormorant.className} flex items-center justify-center flex-wrap gap-4 md:gap-6`}>
                <span>SAANVI</span>
                <span className={`text-3xl md:text-5xl text-amber-400/80 drop-shadow-sm ${greatVibes.className}`}>
                  &
                </span>
                <span>ADITYA</span>
              </h1>
            </motion.div>

            {/* BOTTOM SECTION: Date, Location & The New CTA */}
            <motion.div 
              animate={{ opacity: isUnlocking ? 0 : 1, y: isUnlocking ? 20 : 0 }}
              transition={{ duration: 1, delay: isUnlocking ? 0 : 1.1 }}
              className="flex flex-col items-center w-full z-10"
            >
              <div className="flex flex-col items-center mb-8 md:mb-12">
                <p className={`text-amber-400/90 tracking-[0.3em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs font-semibold drop-shadow-md mb-2 ${cinzel.className}`}>
                  15 November 2026
                </p>
                <p className={`text-stone-300 tracking-[0.2em] md:tracking-[0.3em] uppercase text-[8px] md:text-[9px] drop-shadow-md ${cinzel.className}`}>
                  Bhubaneswar, Odisha
                </p>
              </div>

              {/* The "Begin Our Story" CTA */}
              <div 
                className="flex flex-col items-center cursor-pointer group"
                onClick={handleOpen}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative overflow-hidden px-8 py-3 md:px-10 md:py-4 border border-amber-400/40 bg-[#140a05]/80 backdrop-blur-xl group-hover:border-amber-400/80 transition-all duration-500 ${cinzel.className}`}
                >
                  <motion.div 
                    animate={{ opacity: [0, 0.3, 0] }} 
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" 
                  />
                  <span className="relative z-10 text-amber-400/95 tracking-[0.3em] text-[10px] md:text-[11px] uppercase font-semibold flex items-center gap-3">
                    <span className="text-amber-400/60 text-xs">✦</span> 
                    Begin Our Story 
                    <span className="text-amber-400/60 text-xs">✦</span>
                  </span>
                </motion.div>
                
                {/* Minimalist pulse ring below */}
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-6 w-1.5 h-1.5 rounded-full bg-amber-400"
                />
              </div>

            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}