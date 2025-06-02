import React, { createContext, useContext, useReducer, ReactNode, useState } from 'react';
import { GameState, Choice, INITIAL_GAME_STATE, Dilemma } from '@/types/game';
import { dilemmas as allDilemmas } from '@/data/dilemmas';

function clamp(val: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, val));
}

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

interface GameSession {
  state: GameState;
  year: number;
  season: number;
  dilemmas: Dilemma[];
  dilemmaIndex: number;
  answeredDilemmas: Record<string, boolean>;
}

type GameAction =
  | { type: 'START_GAME' }
  | { type: 'MAKE_CHOICE'; choice: Choice }
  | { type: 'NEXT_DILEMMA' }
  | { type: 'NEXT_SEASON' }
  | { type: 'RESET_GAME' };

interface GameContextType {
  state: GameState;
  currentDilemma: Dilemma | null;
  dilemmaNumber: number;
  dilemmasThisSeason: number;
  makeChoice: (choice: Choice) => void;
  next: () => void;
  resetGame: () => void;
  isSeasonComplete: boolean;
  isGameOver: boolean;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

function getDilemmasForSeasonYear(
  year: number,
  season: number,
  state: GameState
): Dilemma[] {
  // Filter for this year/season, and check condition if present
  const filtered = shuffle(
    allDilemmas.filter((d) => {
      if (d.year !== year || d.season !== season) return false;
      if (typeof d.condition === 'function') {
        return d.condition(state);
      }
      return true;
    })
  );
  // Randomly select 2 or 3 dilemmas if available
  const count = Math.min(filtered.length, 2 + Math.floor(Math.random() * 2)); // 2 or 3
  return filtered.slice(0, count);
}

const MAX_SEASON = 4;
const MAX_YEAR = 12;

function createInitialSession(): GameSession {
  return {
    state: { ...INITIAL_GAME_STATE },
    year: 1,
    season: 1,
    dilemmas: getDilemmasForSeasonYear(1, 1, INITIAL_GAME_STATE),
    dilemmaIndex: 0,
    answeredDilemmas: {},
  };
}

function gameReducer(session: GameSession, action: GameAction): GameSession {
  console.log('Action:', action.type, 'Current session:', {
    year: session.year,
    season: session.season,
    dilemmaIndex: session.dilemmaIndex,
    dilemmasLength: session.dilemmas.length,
    isSeasonComplete: session.dilemmaIndex >= session.dilemmas.length
  });

  switch (action.type) {
    case 'START_GAME': {
      return createInitialSession();
    }
    case 'MAKE_CHOICE': {
      const dilemma = session.dilemmas[session.dilemmaIndex];
      if (!dilemma || session.answeredDilemmas[dilemma.id]) return session; // Already answered
      // Prevent answering again
      const newAnswered = { ...session.answeredDilemmas, [dilemma.id]: true };
      const newState = { ...session.state };
      const { effects } = action.choice;
      console.log('Applying effects for dilemma', dilemma.id, effects);
      Object.entries(effects).forEach(([key, value]) => {
        if (key in newState.metrics) {
          newState.metrics[key as keyof typeof newState.metrics] = clamp(
            newState.metrics[key as keyof typeof newState.metrics] + (value ?? 0)
          );
        }
        if (key in newState.resources) {
          newState.resources[key as keyof typeof newState.resources] = clamp(
            newState.resources[key as keyof typeof newState.resources] + (value ?? 0)
          );
        }
      });
      const metrics = Object.values(newState.metrics);
      // Hard fail: if any metric is 0, well-being score is 0
      if (metrics.some((m) => m === 0)) {
        newState.wellBeingScore = 0;
      } else {
        newState.wellBeingScore = Math.round(metrics.reduce((a, b) => a + b, 0) / metrics.length);
      }
      // Increment dilemmaIndex to move to next dilemma or season complete
      return {
        ...session,
        state: newState,
        answeredDilemmas: newAnswered,
        dilemmaIndex: session.dilemmaIndex + 1,
      };
    }
    case 'NEXT_DILEMMA': {
      console.log('NEXT_DILEMMA - Current index:', session.dilemmaIndex, 'Total dilemmas:', session.dilemmas.length);
      if (session.dilemmaIndex + 1 < session.dilemmas.length) {
        return {
          ...session,
          dilemmaIndex: session.dilemmaIndex + 1,
        };
      }
      return session;
    }
    case 'NEXT_SEASON': {
      console.log('NEXT_SEASON - Starting search from year:', session.year, 'season:', session.season);
      let tempSeason = session.season;
      let tempYear = session.year;
      let newDilemmas: Dilemma[] = [];
      let found = false;
      
      while (tempYear <= MAX_YEAR) {
        tempSeason++;
        if (tempSeason > MAX_SEASON) {
          tempSeason = 1;
          tempYear++;
        }
        if (tempYear > MAX_YEAR) break;
        
        newDilemmas = getDilemmasForSeasonYear(tempYear, tempSeason, session.state);
        console.log('Checking year:', tempYear, 'season:', tempSeason, 'found dilemmas:', newDilemmas.length);
        if (newDilemmas.length > 0) {
          found = true;
          break;
        }
      }
      
      if (!found || tempYear > MAX_YEAR) {
        console.log('No more dilemmas found, ending game');
        return {
          ...session,
          year: MAX_YEAR + 1,
          season: MAX_SEASON + 1,
          dilemmas: [],
          dilemmaIndex: 0,
          answeredDilemmas: {},
          state: {
            ...session.state,
            year: MAX_YEAR + 1,
            season: MAX_SEASON + 1,
          },
        };
      }
      
      console.log('Moving to year:', tempYear, 'season:', tempSeason, 'with', newDilemmas.length, 'dilemmas');
      return {
        ...session,
        year: tempYear,
        season: tempSeason,
        dilemmas: newDilemmas,
        dilemmaIndex: 0,
        answeredDilemmas: {},
        state: {
          ...session.state,
          year: tempYear,
          season: tempSeason,
        },
      };
    }
    case 'RESET_GAME': {
      return createInitialSession();
    }
    default:
      return session;
  }
}

export function GameProvider({ children }: { children: ReactNode }) {
  const [session, dispatch] = useReducer(gameReducer, undefined, createInitialSession);
  const [showStartScreen, setShowStartScreen] = useState(true);

  // Ensure session is always reset when showing the start screen
  React.useEffect(() => {
    if (showStartScreen) {
      dispatch({ type: 'RESET_GAME' });
    }
  }, [showStartScreen]);

  const currentDilemma = session.dilemmas[session.dilemmaIndex] || null;
  const isSeasonComplete = session.dilemmaIndex >= session.dilemmas.length;
  const isGameOver = session.year > MAX_YEAR || session.dilemmas.length === 0 ||
    Object.values(session.state.metrics).some((m) => m === 0) ||
    Object.values(session.state.resources).some((r) => r === 0);

  const isWin = session.state.wellBeingScore === 100 &&
    Object.values(session.state.metrics).every(m => m > 0) &&
    Object.values(session.state.resources).every(r => r > 0);

  const HOW_TO_PLAY = `Welcome to Equilibrium Architect!\n\nYou are the leader of a small, isolated community in a post-environmental-shift world. Your goal is to maximize your society's Well-being Score by making tough decisions each season.\n\n- Each season, you'll face a dilemma with 2-3 choices.\n- Each choice affects your community's Resource Security, Community Cohesion, Ecological Health, Technological Advancement, and resources (food, water, energy).\n- There are no perfect solutions—every decision has trade-offs.\n- Try to keep all metrics balanced and your community thriving!\n\nGood luck, Architect!`;

  console.log('GameProvider state:', {
    year: session.year,
    season: session.season,
    dilemmaIndex: session.dilemmaIndex,
    dilemmasLength: session.dilemmas.length,
    isSeasonComplete,
    isGameOver,
    currentDilemma: currentDilemma?.id
  });

  const makeChoice = (choice: Choice) => {
    if (!isSeasonComplete && currentDilemma) {
      dispatch({ type: 'MAKE_CHOICE', choice });
    }
  };

  const next = () => {
    console.log('Next called - isSeasonComplete:', isSeasonComplete);
    if (!isSeasonComplete) {
      dispatch({ type: 'NEXT_DILEMMA' });
    } else {
      dispatch({ type: 'NEXT_SEASON' });
    }
  };

  const resetGame = () => {
    dispatch({ type: 'RESET_GAME' });
    setShowStartScreen(true);
  };

  const startGame = () => {
    dispatch({ type: 'START_GAME' });
    setShowStartScreen(false);
  };

  // Begin Game Screen
  if (showStartScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
        <div className="glass max-w-lg w-full p-10 relative shadow-2xl flex flex-col items-center text-center border-2 border-blue-500/40 rounded-2xl">
          <h1 className="text-4xl font-extrabold mb-6 heading-glow">Equilibrium Architect</h1>
          <pre className="whitespace-pre-wrap text-neutral-200 text-lg font-sans mb-6 text-left bg-black/30 rounded-lg p-4 border border-neutral-800 max-h-72 overflow-y-auto">{HOW_TO_PLAY}</pre>
          <button
            onClick={startGame}
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-bold shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Begin Game
          </button>
        </div>
      </div>
    );
  }

  // Win Screen
  if (isWin) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-700/90 via-blue-800/90 to-purple-900/90">
        <div className="glass max-w-lg w-full p-10 relative shadow-2xl flex flex-col items-center text-center border-2 border-green-400/60 rounded-2xl animate-pulse">
          <h2 className="text-4xl font-extrabold mb-6 heading-glow text-green-300">You Win!</h2>
          <p className="mb-8 text-neutral-100 text-lg">Congratulations! Your leadership has brought your community to perfect well-being. Balance, prosperity, and harmony have been achieved.<br/>Thank you for playing Equilibrium Architect!</p>
          <button
            onClick={() => window.location.reload()}
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 text-white text-xl font-bold shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  // Game Over Screen
  if (isGameOver) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
        <div className="glass max-w-lg w-full p-10 relative shadow-2xl flex flex-col items-center text-center border-2 border-red-500/40 rounded-2xl">
          <h2 className="text-4xl font-extrabold mb-6 heading-glow text-red-400">Game Over</h2>
          <p className="mb-8 text-neutral-200 text-lg">One of your community&apos;s core metrics has collapsed. Your leadership has ended in crisis.<br/>Try again to keep all aspects of your society in balance!</p>
          <button
            onClick={() => window.location.reload()}
            className="px-10 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-bold shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <GameContext.Provider
      value={{
        state: session.state,
        currentDilemma: isSeasonComplete ? null : currentDilemma,
        dilemmaNumber: session.dilemmaIndex + 1,
        dilemmasThisSeason: session.dilemmas.length,
        makeChoice,
        next,
        resetGame,
        isSeasonComplete,
        isGameOver,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
} 