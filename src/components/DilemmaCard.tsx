import React, { useState } from 'react';
import { useGame } from '@/context/GameContext';

export function DilemmaCard() {
  const {
    currentDilemma,
    makeChoice,
    next,
    dilemmaNumber,
    dilemmasThisSeason,
    isSeasonComplete,
    isGameOver,
    resetGame,
  } = useGame();
  const [selected, setSelected] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);

  console.log('DilemmaCard render:', {
    currentDilemma: currentDilemma?.id,
    dilemmaNumber,
    dilemmasThisSeason,
    isSeasonComplete,
    isGameOver,
    selected,
    locked
  });

  // Reset selection and lock when new dilemma appears
  React.useEffect(() => {
    console.log('DilemmaCard effect - resetting state for new dilemma');
    setSelected(null);
    setLocked(false);
  }, [currentDilemma, isSeasonComplete]);

  if (isGameOver) {
    console.log('Rendering game over screen');
    return (
      <div className="glass p-8 text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4 heading-glow">Game Complete!</h2>
        <p className="mb-8 text-neutral-200 text-lg">You have led your community through many years of challenge and change.<br/>Thank you for playing!</p>
        <button
          onClick={resetGame}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Play Again
        </button>
      </div>
    );
  }

  if (isSeasonComplete) {
    console.log('Rendering season complete screen');
    return (
      <div className="glass p-8 text-center shadow-xl">
        <h2 className="text-2xl font-bold mb-4 heading-glow">Season Complete!</h2>
        {dilemmasThisSeason === 0 ? (
          <p className="mb-8 text-neutral-300">No dilemmas this season. Your community enjoys a period of stability.</p>
        ) : (
          <p className="mb-8 text-neutral-300">You&apos;ve made your decisions for this season. Ready to move forward?</p>
        )}
        <button
          onClick={() => {
            console.log('Continue to next season clicked');
            next();
          }}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Continue to Next Season
        </button>
      </div>
    );
  }

  if (!currentDilemma) return null;

  return (
    <div className="glass p-8 shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-neutral-400">Dilemma {dilemmaNumber} of {dilemmasThisSeason}</span>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-neutral-100 heading-glow">{currentDilemma.title}</h2>
      <p className="text-neutral-200 mb-8 text-lg">{currentDilemma.description}</p>
      <div className="space-y-6">
        {currentDilemma.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => {
              if (!selected && !locked) {
                setSelected(choice.id);
                setLocked(true);
                makeChoice(choice);
              }
            }}
            disabled={!!selected || locked}
            className={`w-full text-left p-6 rounded-xl border border-neutral-800 bg-neutral-900/70 transition-colors shadow-md group
              ${selected === choice.id ? 'ring-2 ring-blue-400 bg-gradient-to-r from-blue-900/60 to-purple-900/60' : ''}
              ${selected && selected !== choice.id ? 'opacity-50' : ''}
              ${!selected ? 'hover:bg-gradient-to-r hover:from-blue-900/60 hover:to-purple-900/60 cursor-pointer' : 'cursor-default'}
            `}
          >
            <h3 className="font-semibold mb-2 text-neutral-100 group-hover:text-blue-300 transition-colors text-lg">{choice.text}</h3>
            <p className="text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors">{choice.description}</p>
          </button>
        ))}
      </div>
      {selected && (
        <div className="flex justify-end mt-8">
          <button
            onClick={next}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
} 