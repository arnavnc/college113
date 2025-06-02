export type ResourceType = 'food' | 'water' | 'energy';
export type MetricType = 'resourceSecurity' | 'communityCohesion' | 'ecologicalHealth' | 'technologicalAdvancement';

export interface GameState {
  season: number;
  year: number;
  metrics: {
    resourceSecurity: number;
    communityCohesion: number;
    ecologicalHealth: number;
    technologicalAdvancement: number;
  };
  resources: {
    food: number;
    water: number;
    energy: number;
  };
  wellBeingScore: number;
}

export interface Choice {
  id: string;
  text: string;
  effects: {
    resourceSecurity?: number;
    communityCohesion?: number;
    ecologicalHealth?: number;
    technologicalAdvancement?: number;
    food?: number;
    water?: number;
    energy?: number;
  };
  description: string;
}

export interface Dilemma {
  id: string;
  title: string;
  description: string;
  choices: Choice[];
  season: number;
  year: number;
  condition?: (state: GameState) => boolean;
}

export const INITIAL_GAME_STATE: GameState = {
  season: 1,
  year: 1,
  metrics: {
    resourceSecurity: 50,
    communityCohesion: 50,
    ecologicalHealth: 50,
    technologicalAdvancement: 50,
  },
  resources: {
    food: 100,
    water: 100,
    energy: 100,
  },
  wellBeingScore: 50,
}; 