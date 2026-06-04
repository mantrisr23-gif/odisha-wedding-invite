"use client";
import Image from "next/image";
import { useState } from "react";
import { siteSettings, coupleData } from "@/data";
import { getTheme, cn } from "@/utils/theme";

export default function RSVP() {
  const theme = getTheme(siteSettings.theme);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-16 overflow-hidden">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/rsvp-bg.jpg" 
          alt="RSVP Background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-stone-950/50" />
      </div>

      {/* The Upgraded "Paper" Glass Card */}
      <div className="relative z-10 w-[90%] max-w-sm bg-[#2b2119]/50 backdrop-blur-xl border border-amber-400/20 p-8 md:p-10 shadow-[0_0_100px_rgba(251,191,36,0.08)]">
        
        {/* Refined Header */}
        <div className="text-center mb-8">
          <p className="text-amber-400/80 italic text-xl mb-2 font-serif">
            We Would Be Honored
          </p>
          <h2 className={cn("text-3xl text-white tracking-[0.2em] uppercase", theme.fontHeading)}>
            RSVP
          </h2>
          <div className="w-12 h-[1px] bg-amber-400/30 mx-auto mt-6" />
        </div>

        {isSubmitted ? (
          <div className="text-center py-10 animate-fade-in">
            <span className="text-3xl text-amber-400/60">❦</span>
            <h3 className={cn("text-2xl text-amber-400 mt-4 mb-2", theme.fontHeading)}>Thank You</h3>
            <p className={cn("text-stone-300 text-[10px] tracking-widest uppercase", theme.fontBody)}>
              We look forward to celebrating with you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <input 
              type="text" 
              required
              placeholder="Your Name"
              className={cn(
                "w-full bg-transparent border-b border-stone-500/40 focus:border-amber-400 text-white text-center py-2 outline-none transition-colors placeholder:text-stone-500 placeholder:text-[10px] placeholder:tracking-widest",
                theme.fontBody
              )}
            />

            {/* Elegant Selection */}
            <div className="flex gap-3 w-full">
              <label className="flex-1 cursor-pointer">
                <input type="radio" name="attendance" value="yes" required className="peer sr-only" />
                <div className={cn("w-full py-3 text-center border border-stone-500/40 text-stone-400 peer-checked:border-amber-400 peer-checked:text-amber-400 transition-all tracking-[0.1em] text-[9px] uppercase hover:border-amber-400/50", theme.fontBody)}>
                  ✓ With Pleasure
                </div>
              </label>

              <label className="flex-1 cursor-pointer">
                <input type="radio" name="attendance" value="no" className="peer sr-only" />
                <div className={cn("w-full py-3 text-center border border-stone-500/40 text-stone-400 peer-checked:border-stone-500 peer-checked:text-white transition-all tracking-[0.1em] text-[9px] uppercase hover:border-stone-500", theme.fontBody)}>
                  ✕ Unable
                </div>
              </label>
            </div>

            <input 
              type="number" 
              placeholder="Number of Guests"
              className={cn(
                "w-full bg-transparent border-b border-stone-500/40 focus:border-amber-400 text-white text-center py-2 outline-none transition-colors placeholder:text-stone-500 placeholder:text-[10px] placeholder:tracking-widest",
                theme.fontBody
              )}
            />

            {/* Elegant Ghost Button */}
            <button 
              type="submit"
              className={cn(
                "mt-2 w-full py-3 border border-amber-400/40 text-amber-400 hover:bg-amber-400 hover:text-stone-950 transition-all duration-500 uppercase tracking-[0.2em] text-[10px] font-semibold",
                theme.fontBody
              )}
            >
              Send Reply
            </button>

            {/* Footer */}
            <div className="mt-2 text-center border-t border-stone-700/30 pt-4">
              <p className="text-amber-400/50 italic text-md font-serif mt-2">
                {coupleData.bride.firstName} & {coupleData.groom.firstName}
              </p>
            </div>
            
          </form>
        )}
      </div>
    </section>
  );
}