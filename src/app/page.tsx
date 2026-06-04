"use client";

import { useState } from "react";
import InvitationGate from "@/components/sections/InvitationGate";
import Hero from "@/components/sections/Hero";
import AudioPlayer from "@/components/ui/AudioPlayer";
import Couple from "@/components/sections/Couple";
import StoryTimeline from "@/components/sections/StoryTimeline";
import Events from "@/components/sections/Events";
import Gallery from "@/components/sections/Gallery";
import RSVP from "@/components/sections/RSVP";
import Closing from "@/components/sections/Closing"; // <-- 1. Add Import

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(true);

  return (
    <main className="relative w-full min-h-screen">
      {/* 1. The Gate (Slides away on click) */}
      <InvitationGate onUnlock={() => setIsUnlocked(true)} />

      {/* 2. Global UI Elements */}
      <AudioPlayer isUnlocked={isUnlocked} />

      {/* 3. The Main Website Content (Hidden from screen readers until unlocked) */}
      <div aria-hidden={!isUnlocked} className="w-full">
        <Hero />
        <Couple />
        <StoryTimeline />
        <Events />
        <Gallery />
        <RSVP />
        <Closing /> {/* <-- 2. Add Component at the very bottom */}
      </div>
    </main>
  );
}