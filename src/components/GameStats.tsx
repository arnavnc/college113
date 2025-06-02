import React from 'react';
import { useGame } from '@/context/GameContext';

export function GameStats() {
  const { state } = useGame();
  const { metrics, resources, wellBeingScore, season, year } = state;

  return (
    <div className="glass p-8 mb-6 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4 text-neutral-100 tracking-wide">Community Metrics</h2>
          <div className="space-y-4">
            {Object.entries(metrics).map(([key, value]) => (
              <div key={key} className="flex items-center gap-4">
                <div className="w-48 text-neutral-300 font-medium">
                  <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                </div>
                <div className="flex-1">
                  <div className="w-full bg-neutral-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-400 h-2.5 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(value, 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-12 text-right text-neutral-400 font-mono">{value}%</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-neutral-100 tracking-wide">Resources</h2>
          <div className="space-y-4">
            {Object.entries(resources).map(([key, value]) => (
              <div key={key} className="flex items-center gap-4">
                <div className="w-48 text-neutral-300 font-medium">
                  <span className="capitalize">{key}</span>
                </div>
                <div className="flex-1">
                  <div className="w-full bg-neutral-800 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full transition-all duration-300 ${value > 100 ? 'bg-gradient-to-r from-green-400 to-yellow-400 animate-pulse' : 'bg-gradient-to-r from-green-400 to-emerald-500'}`}
                      style={{ width: `${Math.min(value, 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div className={`w-12 text-right font-mono ${value > 100 ? 'text-yellow-300 font-bold' : 'text-neutral-400'}`}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-lg font-semibold text-neutral-400">Season {season}, Year {year}</span>
        <span className="text-lg font-semibold text-blue-400">Well-being Score: {wellBeingScore}%</span>
      </div>
    </div>
  );
} 