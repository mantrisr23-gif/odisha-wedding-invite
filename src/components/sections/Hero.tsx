"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { siteSettings } from "@/data";
import { getTheme, cn } from "@/utils/theme";
import { motion } from "framer-motion";

// 1. Slow Floating Particles Component (Fixed for Hydration)
const FloatingParticles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Do not render anything on the server to prevent Math.random() mismatches
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-amber-200/40 rounded-full blur-[1px]"
          initial={{
            x: Math.random() * 100 + "vw",
            y: Math.random() * 100 + "vh",
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -100 - 50 + "vh"],
            opacity: [0, Math.random() * 0.5 + 0.2, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const theme = getTheme(siteSettings.theme);
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Countdown Logic (Target: Nov 15, 2026)
  useEffect(() => {
    setMounted(true);
    const targetDate = new Date("2026-11-15T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToStory = () => {
    const storySection = document.getElementById('story');
    if (storySection) storySection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image dominates the screen */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Saanvi and Aditya"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Subtle Vignette Overlay: Darker at top/bottom for text readability, clear in the middle */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1510]/80 via-[#1c1510]/20 to-[#1c1510]/90" />
      </div>

      <FloatingParticles />

      {/* Cinematic Content Layer (No More UI Cards) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 w-full px-4 flex flex-col items-center justify-center mt-12 md:mt-16"
      >
        <p className={cn("text-amber-400/90 tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px] mb-6 md:mb-8 font-semibold drop-shadow-md", theme.fontBody)}>
          Together With Their Families
        </p>

        {/* Huge, Elegant Typography with Deep Drop Shadows for Readability */}
        <h1 className={cn("text-6xl md:text-8xl lg:text-[9rem] text-white text-center leading-[1.1] drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]", theme.fontHeading)}>
          Saanvi
          <span className="block text-4xl md:text-6xl text-amber-400 italic font-light my-2 md:my-4 opacity-90 drop-shadow-lg">&</span>
          Aditya
        </h1>

        {/* Monogram Divider directly on the image */}
        <div className="flex items-center justify-center gap-6 mt-8 mb-8 md:mt-12 md:mb-10">
          <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-amber-400/80" />
          <span className={cn("text-amber-400 text-lg md:text-xl font-serif italic tracking-widest drop-shadow-md")}>
            S <span className="text-sm mx-1 text-amber-400/80">♥</span> A
          </span>
          <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-amber-400/80" />
        </div>

        {/* Clean Date Hierarchy */}
        <div className="text-center mb-10 md:mb-12">
          <p className={cn("text-2xl md:text-4xl text-white tracking-[0.2em] uppercase mb-3 drop-shadow-lg", theme.fontHeading)}>
            15 Nov 2026
          </p>
          <p className={cn("text-stone-200/90 tracking-[0.3em] uppercase text-[9px] md:text-[10px] drop-shadow-md", theme.fontBody)}>
            Bhubaneswar, Odisha
          </p>
        </div>

        {/* Live Countdown stripped of boxes */}
        {mounted && (
          <div className={cn("flex items-center justify-center gap-4 md:gap-10 mb-14", theme.fontBody)}>
            {Object.entries(timeLeft).map(([unit, value], i, arr) => (
              <div key={unit} className="flex items-center">
                <div className="flex flex-col items-center">
                  <span className={cn("text-3xl md:text-5xl text-white mb-2 drop-shadow-xl", theme.fontHeading)}>
                    {value.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[8px] md:text-[9px] text-amber-400/90 uppercase tracking-[0.3em] drop-shadow-md">
                    {unit}
                  </span>
                </div>
                {i !== arr.length - 1 && (
                  <span className="mx-4 md:mx-6 text-amber-400/60 text-2xl md:text-3xl font-light pb-3 drop-shadow-md">:</span>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Semi-transparent interactive CTA Button */}
        <button 
          onClick={scrollToStory}
          className={cn(
            "group relative px-8 py-4 bg-black/20 backdrop-blur-sm border border-amber-400/40 text-amber-400 uppercase tracking-[0.3em] text-[9px] md:text-[10px] font-semibold transition-all duration-500 overflow-hidden hover:border-amber-400",
            theme.fontBody
          )}
        >
          <div className="absolute inset-0 bg-amber-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0" />
          <span className="relative z-10 group-hover:text-stone-900 transition-colors duration-500">
            Begin The Journey
          </span>
        </button>

      </motion.div>
    </section>
  );
}