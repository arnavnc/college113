'use client';

import { useState } from 'react';
import { GameProvider } from '@/context/GameContext';
import { GameStats } from '@/components/GameStats';
import { DilemmaCard } from '@/components/DilemmaCard';

const HOW_TO_PLAY = `
Welcome to Equilibrium Architect!

You are the leader of a small, isolated community in a post-environmental-shift world. Your goal is to maximize your society's Well-being Score by making tough decisions each season.

- Each season, you'll face a dilemma with 2-3 choices.
- Each choice affects your community's Resource Security, Community Cohesion, Ecological Health, Technological Advancement, and resources (food, water, energy).
- There are no perfect solutions—every decision has trade-offs.
- Try to keep all metrics balanced and your community thriving!

Good luck, Architect!`;

function HowToPlayModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <div className="glass max-w-lg w-full p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-100 text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          ×
        </button>
        <h2 className="text-3xl font-bold mb-4 heading-glow">How to Play</h2>
        <pre className="whitespace-pre-wrap text-neutral-200 text-lg font-sans mb-2">{HOW_TO_PLAY}</pre>
      </div>
    </div>
  );
}

export default function Home() {
  const [showHowTo, setShowHowTo] = useState(false);
  return (
    <GameProvider>
      <main className="min-h-screen bg-neutral-950 py-12 flex flex-col items-center relative">
        <button
          onClick={() => setShowHowTo(true)}
          className="absolute top-8 right-8 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow hover:scale-105 transition-transform z-10"
        >
          How to Play
        </button>
        <HowToPlayModal open={showHowTo} onClose={() => setShowHowTo(false)} />
        <h1 className="text-5xl md:text-6xl font-extrabold mb-12 heading-glow text-center tracking-tight select-none" style={{ letterSpacing: '-0.03em' }}>
          Equilibrium Architect
        </h1>
        <div className="w-full max-w-4xl flex flex-col gap-8">
          <GameStats />
          <DilemmaCard />
        </div>
      </main>
    </GameProvider>
  );
}
