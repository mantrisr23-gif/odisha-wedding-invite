"use client";
import Image from "next/image";
import { siteSettings, timelineData } from "@/data";
import { getTheme, cn } from "@/utils/theme";
import { motion } from "framer-motion";

export default function Story() {
  const theme = getTheme(siteSettings.theme);

  return (
    <section className="w-full bg-[#1c1510] py-24 flex flex-col items-center overflow-hidden relative">
      
      {/* Subtle Paper Texture Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2b2119]/80 via-[#1c1510]/95 to-[#1c1510]" />
        <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-20 mix-blend-soft-light" />
      </div>

      {/* Re-written Emotional Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-32 px-4 z-10 relative"
      >
        <p className="text-amber-400/80 italic text-xl md:text-2xl mb-4 font-serif">
          Every Love Story Has A Beginning
        </p>
        <h2 className={cn("text-3xl md:text-4xl text-white tracking-[0.2em] uppercase", theme.fontHeading)}>
          Our Story
        </h2>
        <div className="flex items-center justify-center gap-4 text-amber-400/50 mt-8">
          <div className="w-12 h-[1px] bg-amber-400/30" />
          <span className="text-sm">❦</span>
          <div className="w-12 h-[1px] bg-amber-400/30" />
        </div>
      </motion.div>

      {/* Alternating Editorial Memory Blocks */}
      <div className="w-full max-w-6xl px-4 md:px-8 flex flex-col gap-32 md:gap-44 z-10 relative">
        {timelineData.map((item: any, index: number) => (
          <div 
            key={item.id} 
            className={cn(
              "relative w-full flex flex-col md:flex-row items-center",
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            )}
          >
            {/* Image Layer Dominance (Pushed to 60% Width with Ambient Amber Gallery Glow) */}
            <motion.div 
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full md:w-[60%] h-[40vh] md:h-[60vh] z-10 p-1.5 bg-stone-100/5 border border-amber-400/15 shadow-[0_0_50px_rgba(0,0,0,0.6),0_0_80px_rgba(245,158,11,0.08)]"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src={item.imageUrl || "/images/placeholder.jpg"} 
                  alt={item.title?.en || "Story Image"}
                  fill
                  className="object-cover object-center"
                />
              </div>
            </motion.div>

           {/* Story Card Spacing (Tightened down to 40% Width & Extended Overlap) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className={cn(
                "relative w-[95%] md:w-[40%] flex flex-col justify-center px-8 pt-16 pb-12 md:px-10 md:pt-20 md:pb-14 bg-gradient-to-br from-[#2b2119]/85 to-[#1c1510]/95 backdrop-blur-xl border border-amber-400/10 shadow-2xl z-20 -mt-16 md:mt-0 overflow-hidden rounded-sm",
                index % 2 !== 0 ? "md:-mr-24 lg:-mr-28" : "md:-ml-24 lg:-ml-28"
            )}>
              
              {/* Subtle Paper Texture Inside Card */}
              <div className="absolute inset-0 bg-[url('/images/paper-texture.jpg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

              {/* Giant Faded Watermark Detail */}
              <span className="absolute -right-8 -bottom-12 text-[12rem] font-serif text-white/[0.02] z-0 pointer-events-none select-none">
                {item.date?.en ? item.date.en.split(' ').pop() : '2026'}
              </span>

              <div className="relative z-10">
                <p className={cn("text-amber-400/90 tracking-[0.3em] uppercase text-[9px] md:text-[10px] mb-4 flex items-center gap-2", theme.fontBody)}>
                  <span className="text-amber-400/50 text-xs">✦</span> {item.date?.en || item.date}
                </p>
                
                <h3 className={cn("text-2xl md:text-4xl text-white mb-2 drop-shadow-md", theme.fontHeading)}>
                  {item.title?.en || item.title}
                </h3>

                <p className="text-amber-400/70 italic text-sm font-serif mb-6">
                  {item.subtitle?.en || "A moment we will cherish forever."}
                </p>
                
                <div className="w-8 h-[1px] bg-amber-400/30 mb-6" />
                
                <p className={cn("text-stone-300 text-xs md:text-sm leading-loose opacity-90 font-light", theme.fontBody)}>
                  {item.description?.en || item.description}
                </p>

                {/* Curated Progress Indicator */}
                <div className={cn("mt-10 text-stone-500/60 tracking-[0.4em] text-[8px] uppercase border-t border-white/5 pt-4 inline-block", theme.fontBody)}>
                  0{index + 1} / 0{timelineData.length}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      
    </section>
  );
}