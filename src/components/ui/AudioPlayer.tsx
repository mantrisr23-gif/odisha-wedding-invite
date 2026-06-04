"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { siteSettings } from "@/data";
import { getTheme, cn } from "@/utils/theme";

interface AudioPlayerProps {
  isUnlocked: boolean;
}

export default function AudioPlayer({ isUnlocked }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const theme = getTheme(siteSettings.theme);

  // Handle auto-play when the gate is unlocked
  useEffect(() => {
    if (isUnlocked && audioRef.current) {
      audioRef.current.volume = 0.4; // Keep background music soft
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Audio autoplay was prevented:", err);
      });
    }
  }, [isUnlocked]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Place a sample audio file in public/audio/bg-music.mp3 later */}
      <audio ref={audioRef} loop src="/audio/bg-music.mp3" preload="auto" />
      
      {/* Only show the button after the gate is unlocked */}
      <div className={cn("transition-opacity duration-1000", isUnlocked ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <button
          onClick={toggleAudio}
          className={cn(
            "p-3 rounded-full backdrop-blur-md border shadow-lg transition-transform hover:scale-110",
            theme.surface,
            theme.border,
            theme.textPrimary
          )}
          aria-label="Toggle music"
        >
          {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      </div>
    </div>
  );
}