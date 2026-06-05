"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Cormorant_Garamond, Cinzel } from 'next/font/google';

// Injecting Luxury Fonts
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600'] });
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '600'] });

export default function Venue() {
  const [activeTab, setActiveTab] = useState<"haldi" | "wedding">("wedding");

  return (
    <section id="venue" className="py-24 bg-[#2C241F] relative overflow-hidden min-h-screen flex flex-col justify-center">
      
      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
        
        {/* TOP HEADER: "THE CELEBRATIONS" */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl text-white tracking-[0.25em] uppercase mb-6 ${cinzel.className}`}>
            The Celebrations
          </h2>
          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-[1px] w-12 bg-amber-600/30" />
            <span className="text-amber-500/60 text-[10px]">❦</span>
            <div className="h-[1px] w-12 bg-amber-600/30" />
          </div>

          {/* HALDI & WEDDING TABS */}
          <div className="flex items-center justify-center gap-8 md:gap-16">
            <button 
              onClick={() => setActiveTab("haldi")}
              className={`text-[10px] md:text-xs tracking-[0.2em] uppercase pb-2 border-b transition-all duration-300 ${activeTab === "haldi" ? "text-amber-500 border-amber-500" : "text-stone-500 border-transparent hover:text-stone-300"}`}
            >
              Haldi Ceremony
            </button>
            <button 
              onClick={() => setActiveTab("wedding")}
              className={`text-[10px] md:text-xs tracking-[0.2em] uppercase pb-2 border-b transition-all duration-300 ${activeTab === "wedding" ? "text-amber-500 border-amber-500" : "text-stone-500 border-transparent hover:text-stone-300"}`}
            >
              The Wedding
            </button>
          </div>
        </div>

        {/* MAIN CONTENT CARD */}
        <div className="relative w-full max-w-5xl mx-auto h-[650px] md:h-[550px] mt-12 flex items-center">
          <AnimatePresence mode="wait">
            
            {/* --- WEDDING TAB --- */}
            {activeTab === "wedding" && (
              <motion.div 
                key="wedding"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full flex items-center justify-end"
              >
                {/* Right side: Image Frame (Using your existing mandap layout) */}
                <div className="absolute right-0 w-[95%] md:w-[75%] h-full border border-[#4A3C31] p-2 bg-[#1A130F]">
                  <div className="relative w-full h-full">
                    <Image 
                      src="/images/wedding-venue.jpg" // Make sure this path matches your mandap image!
                      alt="The Wedding"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Left side: Overlapping Dark Card */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[90%] md:w-[45%] bg-[#221711]/95 backdrop-blur-md p-8 md:p-12 shadow-2xl z-20">
                  <h3 className={`text-4xl md:text-5xl text-white mb-6 ${cormorant.className}`}>
                    The Wedding
                  </h3>
                  
                  <div className="w-16 h-[1px] bg-amber-600/30 mb-8" />

                  <div className="space-y-6">
                    {/* WHEN */}
                    <div>
                      <h4 className={`text-[9px] text-amber-500/80 tracking-[0.2em] uppercase mb-2 ${cinzel.className}`}>
                        When
                      </h4>
                      <p className="text-stone-300 text-sm tracking-widest font-light">
                        2026-11-15<br />
                        07:00 PM
                      </p>
                    </div>

                    {/* WHERE & THE LUXURY MAP */}
                    <div>
                      <h4 className={`text-[9px] text-amber-500/80 tracking-[0.2em] uppercase mb-2 ${cinzel.className}`}>
                        Where
                      </h4>
                      <p className="text-stone-300 text-sm tracking-wider font-light mb-4">
                        Bhubaneswar, Odisha
                      </p>

                      {/* The Framed Map */}
                      <div className="w-full h-32 md:h-40 border border-[#4A3C31] relative overflow-hidden group mb-4">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.5337495561!2d85.7369988583489!3d20.3008702167667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33c8b!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                          width="100%" 
                          height="100%" 
                          style={{ border: 0 }} 
                          allowFullScreen={false} 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          // Magic Tailwind filters that make the map blend into the dark theme, revealing itself fully on hover
                          className="filter grayscale-[80%] invert-[90%] sepia-[40%] contrast-[85%] opacity-60 group-hover:opacity-100 group-hover:filter-none transition-all duration-700 ease-in-out"
                        />
                      </div>
                      
                      {/* Clean directions link */}
                      <a 
                        href="https://maps.google.com/?q=Bhubaneswar+Odisha" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-[9px] tracking-[0.2em] uppercase text-amber-500/80 hover:text-amber-400 transition-colors border-b border-amber-500/30 hover:border-amber-400 pb-1"
                      >
                        Get Directions ↗
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* --- HALDI TAB --- */}
            {activeTab === "haldi" && (
              <motion.div 
                key="haldi"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-full h-full flex items-center justify-end"
              >
                 {/* Haldi Right side: Image Frame */}
                 <div className="absolute right-0 w-[95%] md:w-[75%] h-full border border-[#4A3C31] p-2 bg-[#1A130F]">
                  <div className="relative w-full h-full">
                    <Image 
                      src="/images/haldi-venue.jpg" // Make sure this path points to your Haldi photo!
                      alt="Haldi Ceremony"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Haldi Left side: Overlapping Dark Card */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[90%] md:w-[45%] bg-[#221711]/95 backdrop-blur-md p-8 md:p-12 shadow-2xl z-20">
                  <h3 className={`text-4xl md:text-5xl text-white mb-6 ${cormorant.className}`}>
                    Haldi Ceremony
                  </h3>
                  
                  <div className="w-16 h-[1px] bg-amber-600/30 mb-8" />

                  <div className="space-y-6">
                    <div>
                      <h4 className={`text-[9px] text-amber-500/80 tracking-[0.2em] uppercase mb-2 ${cinzel.className}`}>
                        When
                      </h4>
                      <p className="text-stone-300 text-sm tracking-widest font-light">
                        2026-11-14<br />
                        10:00 AM
                      </p>
                    </div>
                    <div>
                      <h4 className={`text-[9px] text-amber-500/80 tracking-[0.2em] uppercase mb-2 ${cinzel.className}`}>
                        Where
                      </h4>
                      <p className="text-stone-300 text-sm tracking-wider font-light">
                        Home Residence<br />
                        Bhubaneswar, Odisha
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}