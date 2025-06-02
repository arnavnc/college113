import { Dilemma } from '@/types/game';

export const dilemmas: Dilemma[] = [
  // Year 1
  {
    id: 'd1',
    title: 'The Water Crisis',
    description: 'Our community\'s water supply is running low. We\'ve discovered a new technology that can purify water more efficiently, but it requires significant energy and might impact local wildlife.',
    season: 1,
    year: 1,
    choices: [
      {
        id: 'c1',
        text: 'Implement the new water purification technology',
        description: 'Increase water by 30, decrease ecological health by 15 and energy by 20.',
        effects: { water: 30, ecologicalHealth: -15, energy: -20, technologicalAdvancement: 10 }
      },
      {
        id: 'c2',
        text: 'Implement traditional water conservation methods',
        description: 'Increase water by 15, improve community cohesion by 10, ecological health by 5.',
        effects: { water: 15, communityCohesion: 10, ecologicalHealth: 5 }
      }
    ]
  },
  {
    id: 'd2',
    title: 'Food Storage Dilemma',
    description: 'A new pest threatens our food stores. We can use chemical pesticides or try natural predators.',
    season: 1,
    year: 1,
    choices: [
      {
        id: 'c3',
        text: 'Use chemical pesticides',
        description: 'Increase food by 20, decrease ecological health by 20.',
        effects: { food: 20, ecologicalHealth: -20 }
      },
      {
        id: 'c4',
        text: 'Introduce natural predators',
        description: 'Increase food by 10, increase ecological health by 10, risk community cohesion (-5) if predators become a nuisance.',
        effects: { food: 10, ecologicalHealth: 10, communityCohesion: -5 }
      }
    ]
  },
  {
    id: 'd3',
    title: 'Energy Rationing',
    description: 'Energy reserves are low. Should we ration energy or invest in emergency solar panels?',
    season: 1,
    year: 1,
    choices: [
      {
        id: 'c5',
        text: 'Ration energy',
        description: 'Decrease energy by 10, increase community cohesion by 10 (shared sacrifice).',
        effects: { energy: -10, communityCohesion: 10 }
      },
      {
        id: 'c6',
        text: 'Install emergency solar panels',
        description: 'Increase energy by 20, decrease technological advancement by 5 (rushed, inefficient tech).',
        effects: { energy: 20, technologicalAdvancement: -5 }
      }
    ]
  },
  {
    id: 'd4',
    title: 'Education or Labor?',
    description: 'A new generation is coming of age. Should we prioritize education or immediate labor for recovery?',
    season: 2,
    year: 1,
    choices: [
      {
        id: 'c7',
        text: 'Prioritize education',
        description: 'Increase technological advancement by 15, decrease food and energy by 10 (less labor).',
        effects: { technologicalAdvancement: 15, food: -10, energy: -10 }
      },
      {
        id: 'c8',
        text: 'Prioritize labor',
        description: 'Increase food and energy by 15, decrease technological advancement by 10.',
        effects: { food: 15, energy: 15, technologicalAdvancement: -10 }
      }
    ]
  },
  {
    id: 'd5',
    title: 'Forest Restoration',
    description: 'A grant is available for reforesting nearby land, but it will take resources away from food production.',
    season: 2,
    year: 1,
    choices: [
      {
        id: 'c9',
        text: 'Accept the grant and reforest',
        description: 'Increase ecological health by 20, decrease food by 15.',
        effects: { ecologicalHealth: 20, food: -15 }
      },
      {
        id: 'c10',
        text: 'Focus on food production',
        description: 'Increase food by 15, decrease ecological health by 10.',
        effects: { food: 15, ecologicalHealth: -10 }
      }
    ]
  },
  {
    id: 'd6',
    title: 'Community Festival',
    description: 'A festival could boost morale but will use up resources.',
    season: 3,
    year: 1,
    choices: [
      {
        id: 'c11',
        text: 'Hold the festival',
        description: 'Increase community cohesion by 20, decrease food and water by 10.',
        effects: { communityCohesion: 20, food: -10, water: -10 }
      },
      {
        id: 'c12',
        text: 'Cancel the festival',
        description: 'No change to resources, decrease community cohesion by 10.',
        effects: { communityCohesion: -10 }
      }
    ]
  },
  {
    id: 'd7',
    title: 'Flood Warning',
    description: 'Heavy rains threaten to flood the fields. Should we build barriers or evacuate?',
    season: 3,
    year: 1,
    choices: [
      {
        id: 'c13',
        text: 'Build barriers',
        description: 'Decrease energy by 15, increase food by 10 (fields saved).',
        effects: { energy: -15, food: 10 }
      },
      {
        id: 'c14',
        text: 'Evacuate fields',
        description: 'Decrease food by 10, increase community cohesion by 10 (safety prioritized).',
        effects: { food: -10, communityCohesion: 10 }
      }
    ]
  },
  {
    id: 'd8',
    title: 'Healthcare Investment',
    description: 'A traveling doctor offers to stay if we invest in a clinic, but it will cost resources.',
    season: 4,
    year: 1,
    choices: [
      {
        id: 'c15',
        text: 'Build the clinic',
        description: 'Increase community cohesion by 15, decrease energy and food by 10.',
        effects: { communityCohesion: 15, energy: -10, food: -10 }
      },
      {
        id: 'c16',
        text: 'Decline the offer',
        description: 'No change to resources, decrease community cohesion by 10.',
        effects: { communityCohesion: -10 }
      }
    ]
  },
  {
    id: 'd9',
    title: 'Trade with Outsiders',
    description: 'A nearby community offers to trade water for food. Do we accept?',
    season: 1,
    year: 2,
    choices: [
      {
        id: 'c17',
        text: 'Trade food for water',
        description: 'Decrease food by 15, increase water by 20.',
        effects: { food: -15, water: 20 }
      },
      {
        id: 'c18',
        text: 'Decline the trade',
        description: 'No change to resources.',
        effects: { }
      }
    ]
  },
  {
    id: 'd10',
    title: 'Solar Farm Expansion',
    description: 'We can expand our solar farm, but it will take land from agriculture.',
    season: 2,
    year: 2,
    choices: [
      {
        id: 'c19',
        text: 'Expand the solar farm',
        description: 'Increase energy by 25, decrease food by 15.',
        effects: { energy: 25, food: -15 }
      },
      {
        id: 'c20',
        text: 'Keep land for agriculture',
        description: 'Increase food by 10, decrease energy by 10.',
        effects: { food: 10, energy: -10 }
      }
    ]
  },
  {
    id: 'd11',
    title: 'Cultural Preservation',
    description: 'Elders want to preserve old traditions, but youth want to modernize. How do you balance this?',
    season: 3,
    year: 2,
    choices: [
      {
        id: 'c21',
        text: 'Support tradition',
        description: 'Increase community cohesion by 15, decrease technological advancement by 10.',
        effects: { communityCohesion: 15, technologicalAdvancement: -10 }
      },
      {
        id: 'c22',
        text: 'Support modernization',
        description: 'Increase technological advancement by 15, decrease community cohesion by 10.',
        effects: { technologicalAdvancement: 15, communityCohesion: -10 }
      },
      {
        id: 'c23',
        text: 'Try to balance both',
        description: 'Small increases to both, but less overall.',
        effects: { communityCohesion: 5, technologicalAdvancement: 5 }
      }
    ]
  },
  {
    id: 'd12',
    title: 'Drought Emergency',
    description: 'A severe drought hits. Should we use emergency water reserves or import water at high cost?',
    season: 4,
    year: 2,
    choices: [
      {
        id: 'c24',
        text: 'Use emergency reserves',
        description: 'Decrease water by 20, increase food by 10.',
        effects: { water: -20, food: 10 }
      },
      {
        id: 'c25',
        text: 'Import water',
        description: 'Decrease energy by 15, increase water by 15.',
        effects: { energy: -15, water: 15 }
      }
    ]
  },
  {
    id: 'd13',
    title: 'Wildlife Sanctuary',
    description: 'A rare species is found nearby. Should we create a sanctuary, limiting development?',
    season: 1,
    year: 3,
    choices: [
      {
        id: 'c26',
        text: 'Create the sanctuary',
        description: 'Increase ecological health by 25, decrease food and energy by 10.',
        effects: { ecologicalHealth: 25, food: -10, energy: -10 }
      },
      {
        id: 'c27',
        text: 'Continue development',
        description: 'Increase food and energy by 10, decrease ecological health by 20.',
        effects: { food: 10, energy: 10, ecologicalHealth: -20 }
      }
    ]
  },
  {
    id: 'd14',
    title: 'Refugee Arrival',
    description: 'A group of climate refugees arrives seeking shelter. Do we accept them?',
    season: 2,
    year: 3,
    choices: [
      {
        id: 'c28',
        text: 'Accept the refugees',
        description: 'Increase community cohesion by 10, decrease food and water by 15.',
        effects: { communityCohesion: 10, food: -15, water: -15 }
      },
      {
        id: 'c29',
        text: 'Turn them away',
        description: 'No change to resources, decrease community cohesion by 15.',
        effects: { communityCohesion: -15 }
      }
    ]
  },
  {
    id: 'd15',
    title: 'Tech Investment Opportunity',
    description: 'A tech company offers to build a research lab, but it will use a lot of energy and water.',
    season: 3,
    year: 3,
    choices: [
      {
        id: 'c30',
        text: 'Accept the investment',
        description: 'Increase technological advancement by 25, decrease energy and water by 15.',
        effects: { technologicalAdvancement: 25, energy: -15, water: -15 }
      },
      {
        id: 'c31',
        text: 'Decline the offer',
        description: 'No change to resources.',
        effects: { }
      }
    ]
  },
  {
    id: 'd16',
    title: 'Wind Turbine Proposal',
    description: 'Engineers propose building wind turbines, but they may disrupt local bird populations.',
    season: 4,
    year: 3,
    choices: [
      {
        id: 'c32',
        text: 'Build the turbines',
        description: 'Increase energy by 20, decrease ecological health by 10.',
        effects: { energy: 20, ecologicalHealth: -10 }
      },
      {
        id: 'c33',
        text: 'Protect the birds',
        description: 'Increase ecological health by 10, decrease energy by 10.',
        effects: { ecologicalHealth: 10, energy: -10 }
      }
    ]
  },
  {
    id: 'd17',
    title: 'Desalination Plant',
    description: 'A drought prompts consideration of a desalination plant, but it is energy-intensive.',
    season: 1,
    year: 4,
    choices: [
      {
        id: 'c34',
        text: 'Build the plant',
        description: 'Increase water by 25, decrease energy by 20.',
        effects: { water: 25, energy: -20 }
      },
      {
        id: 'c35',
        text: 'Rely on conservation',
        description: 'Increase community cohesion by 10, decrease water by 10.',
        effects: { communityCohesion: 10, water: -10 }
      }
    ]
  },
  {
    id: 'd18',
    title: 'Nighttime Curfew',
    description: 'A rise in thefts prompts a debate over imposing a curfew.',
    season: 2,
    year: 4,
    choices: [
      {
        id: 'c36',
        text: 'Impose curfew',
        description: 'Increase community cohesion by 10, decrease technological advancement by 5 (less night work).',
        effects: { communityCohesion: 10, technologicalAdvancement: -5 }
      },
      {
        id: 'c37',
        text: 'Trust the community',
        description: 'Increase community cohesion by 5, risk food loss (-10) if thefts continue.',
        effects: { communityCohesion: 5, food: -10 }
      }
    ]
  },
  {
    id: 'd19',
    title: 'River Pollution',
    description: 'A factory upstream is polluting the river. Do you confront them or adapt locally?',
    season: 3,
    year: 4,
    choices: [
      {
        id: 'c38',
        text: 'Confront the factory',
        description: 'Increase community cohesion by 10, risk water loss (-10) if they retaliate.',
        effects: { communityCohesion: 10, water: -10 }
      },
      {
        id: 'c39',
        text: 'Adapt locally',
        description: 'Decrease water by 10, increase technological advancement by 10 (new filtration methods).',
        effects: { water: -10, technologicalAdvancement: 10 }
      }
    ]
  },
  {
    id: 'd20',
    title: 'Heatwave Response',
    description: 'A record heatwave threatens the elderly. Do you open cooling centers or distribute home kits?',
    season: 4,
    year: 4,
    choices: [
      {
        id: 'c40',
        text: 'Open cooling centers',
        description: 'Increase community cohesion by 10, decrease energy by 15.',
        effects: { communityCohesion: 10, energy: -15 }
      },
      {
        id: 'c41',
        text: 'Distribute home kits',
        description: 'Decrease energy by 10, increase technological advancement by 5.',
        effects: { energy: -10, technologicalAdvancement: 5 }
      }
    ]
  },
  {
    id: 'd21',
    title: 'Genetically Modified Crops',
    description: 'Scientists offer GM crops to boost food, but some fear unknown risks.',
    season: 1,
    year: 5,
    choices: [
      {
        id: 'c42',
        text: 'Adopt GM crops',
        description: 'Increase food by 30, decrease community cohesion by 10 (controversy).',
        effects: { food: 30, communityCohesion: -10 }
      },
      {
        id: 'c43',
        text: 'Reject GM crops',
        description: 'No change to food, increase community cohesion by 10.',
        effects: { communityCohesion: 10 }
      }
    ]
  },
  {
    id: 'd22',
    title: 'Artisan Revival',
    description: 'A group wants to revive traditional crafts, but it may slow technological progress.',
    season: 2,
    year: 5,
    choices: [
      {
        id: 'c44',
        text: 'Support the revival',
        description: 'Increase community cohesion by 15, decrease technological advancement by 10.',
        effects: { communityCohesion: 15, technologicalAdvancement: -10 }
      },
      {
        id: 'c45',
        text: 'Focus on progress',
        description: 'Increase technological advancement by 10, decrease community cohesion by 5.',
        effects: { technologicalAdvancement: 10, communityCohesion: -5 }
      }
    ]
  },
  {
    id: 'd23',
    title: 'Forest Fire',
    description: 'A wildfire threatens the outskirts. Do you fight it or evacuate?',
    season: 3,
    year: 5,
    choices: [
      {
        id: 'c46',
        text: 'Fight the fire',
        description: 'Decrease energy by 20, increase ecological health by 15.',
        effects: { energy: -20, ecologicalHealth: 15 }
      },
      {
        id: 'c47',
        text: 'Evacuate',
        description: 'Decrease food by 10, increase community cohesion by 10.',
        effects: { food: -10, communityCohesion: 10 }
      }
    ]
  },
  {
    id: 'd24',
    title: 'Rainwater Harvesting',
    description: 'A proposal to install rainwater tanks for every home.',
    season: 4,
    year: 5,
    choices: [
      {
        id: 'c48',
        text: 'Install tanks',
        description: 'Increase water by 20, decrease energy by 10.',
        effects: { water: 20, energy: -10 }
      },
      {
        id: 'c49',
        text: 'Keep current system',
        description: 'No change to resources.',
        effects: { }
      }
    ]
  },
  {
    id: 'd25',
    title: 'Youth Council',
    description: 'Young people want a say in governance. Do you create a youth council?',
    season: 1,
    year: 6,
    choices: [
      {
        id: 'c50',
        text: 'Create the council',
        description: 'Increase community cohesion by 15, decrease technological advancement by 5 (debate slows progress).',
        effects: { communityCohesion: 15, technologicalAdvancement: -5 }
      },
      {
        id: 'c51',
        text: 'Maintain current leadership',
        description: 'No change to resources, decrease community cohesion by 10.',
        effects: { communityCohesion: -10 }
      }
    ]
  },
  {
    id: 'd26',
    title: 'Biofuel Experiment',
    description: 'A scientist proposes converting food waste to biofuel.',
    season: 2,
    year: 6,
    choices: [
      {
        id: 'c52',
        text: 'Fund the experiment',
        description: 'Increase energy by 15, decrease food by 10.',
        effects: { energy: 15, food: -10 }
      },
      {
        id: 'c53',
        text: 'Decline the proposal',
        description: 'No change to resources.',
        effects: { }
      }
    ]
  },
  {
    id: 'd27',
    title: 'Community Garden',
    description: 'Residents want to convert a park into a community garden.',
    season: 3,
    year: 6,
    choices: [
      {
        id: 'c54',
        text: 'Approve the garden',
        description: 'Increase food by 15, decrease ecological health by 5 (less wild space).',
        effects: { food: 15, ecologicalHealth: -5 }
      },
      {
        id: 'c55',
        text: 'Keep the park',
        description: 'Increase ecological health by 10, decrease food by 5.',
        effects: { ecologicalHealth: 10, food: -5 }
      }
    ]
  },
  {
    id: 'd28',
    title: 'Water Pipeline Leak',
    description: 'A major leak is discovered in the water pipeline.',
    season: 4,
    year: 6,
    choices: [
      {
        id: 'c56',
        text: 'Repair immediately',
        description: 'Decrease energy by 10, increase water by 15.',
        effects: { energy: -10, water: 15 }
      },
      {
        id: 'c57',
        text: 'Delay repairs',
        description: 'Decrease water by 10, increase energy by 5.',
        effects: { water: -10, energy: 5 }
      }
    ]
  },
  {
    id: 'd29',
    title: 'Cultural Festival',
    description: 'A proposal for a large festival to celebrate community heritage.',
    season: 1,
    year: 7,
    choices: [
      {
        id: 'c58',
        text: 'Hold the festival',
        description: 'Increase community cohesion by 20, decrease food and water by 10.',
        effects: { communityCohesion: 20, food: -10, water: -10 }
      },
      {
        id: 'c59',
        text: 'Postpone the festival',
        description: 'No change to resources, decrease community cohesion by 10.',
        effects: { communityCohesion: -10 }
      }
    ]
  },
  {
    id: 'd30',
    title: 'Medical Supply Shortage',
    description: 'A shortage of medical supplies threatens public health.',
    season: 2,
    year: 7,
    choices: [
      {
        id: 'c60',
        text: 'Import supplies at high cost',
        description: 'Decrease energy by 15, increase community cohesion by 10.',
        effects: { energy: -15, communityCohesion: 10 }
      },
      {
        id: 'c61',
        text: 'Ration supplies',
        description: 'Decrease community cohesion by 10, no change to resources.',
        effects: { communityCohesion: -10 }
      }
    ]
  },
  {
    id: 'd31',
    title: 'Eco-Tourism Opportunity',
    description: 'A company wants to bring eco-tourists, promising income but risking the environment.',
    season: 3,
    year: 7,
    choices: [
      {
        id: 'c62',
        text: 'Allow eco-tourism',
        description: 'Increase energy by 10, decrease ecological health by 15.',
        effects: { energy: 10, ecologicalHealth: -15 }
      },
      {
        id: 'c63',
        text: 'Decline the offer',
        description: 'No change to resources.',
        effects: { }
      }
    ]
  },
  {
    id: 'd32',
    title: 'Epidemic Outbreak',
    description: 'A contagious disease spreads. Do you quarantine or focus on treatment?',
    season: 4,
    year: 7,
    choices: [
      {
        id: 'c64',
        text: 'Quarantine affected areas',
        description: 'Decrease community cohesion by 15, increase food by 10 (less movement).',
        effects: { communityCohesion: -15, food: 10 }
      },
      {
        id: 'c65',
        text: 'Focus on treatment',
        description: 'Decrease energy by 10, increase community cohesion by 10.',
        effects: { energy: -10, communityCohesion: 10 }
      }
    ]
  },
  {
    id: 'd33',
    title: 'Conditional: Black Market Emerges',
    description: 'If food < 30, a black market emerges. Do you crack down or tolerate it?',
    season: 1,
    year: 8,
    choices: [
      {
        id: 'c66',
        text: 'Crack down',
        description: 'Increase community cohesion by 10, decrease food by 5.',
        effects: { communityCohesion: 10, food: -5 }
      },
      {
        id: 'c67',
        text: 'Tolerate the market',
        description: 'Increase food by 10, decrease community cohesion by 10.',
        effects: { food: 10, communityCohesion: -10 }
      }
    ]
  },
  {
    id: 'd34',
    title: 'Conditional: Water Contamination',
    description: 'If water < 30, contamination is discovered. Do you shut down the supply or risk illness?',
    season: 2,
    year: 8,
    choices: [
      {
        id: 'c68',
        text: 'Shut down supply',
        description: 'Decrease water by 10, increase community cohesion by 10 (safety prioritized).',
        effects: { water: -10, communityCohesion: 10 }
      },
      {
        id: 'c69',
        text: 'Risk illness',
        description: 'Increase water by 10, decrease community cohesion by 15.',
        effects: { water: 10, communityCohesion: -15 }
      }
    ]
  },
  {
    id: 'd35',
    title: 'Conditional: Tech Boom',
    description: 'If technological advancement > 80, a tech boom attracts outsiders. Do you welcome them or limit growth?',
    season: 3,
    year: 8,
    choices: [
      {
        id: 'c70',
        text: 'Welcome outsiders',
        description: 'Increase community cohesion by 15, decrease food and water by 10.',
        effects: { communityCohesion: 15, food: -10, water: -10 }
      },
      {
        id: 'c71',
        text: 'Limit growth',
        description: 'Increase food and water by 10, decrease community cohesion by 10.',
        effects: { food: 10, water: 10, communityCohesion: -10 }
      }
    ]
  },
  {
    id: 'd36',
    title: 'Toxic Algae Bloom',
    description: 'A toxic algae bloom threatens the water supply. Do you use chemicals to clear it or let nature take its course?',
    season: 3,
    year: 8,
    choices: [
      { id: 'c102', text: 'Use chemicals', description: 'Increase water by 15, decrease ecological health by 15.', effects: { water: 15, ecologicalHealth: -15 } },
      { id: 'c103', text: 'Let nature take its course', description: 'Decrease water by 10, increase ecological health by 10.', effects: { water: -10, ecologicalHealth: 10 } }
    ]
  },
  {
    id: 'd37',
    title: 'Conditional: Solar Panel Overload',
    description: 'If energy > 120, your solar grid is overloaded. Do you invest in storage or sell excess energy?',
    season: 4,
    year: 8,
    choices: [
      { id: 'c104', text: 'Invest in storage', description: 'Decrease energy by 20, increase technological advancement by 10.', effects: { energy: -20, technologicalAdvancement: 10 } },
      { id: 'c105', text: 'Sell excess energy', description: 'Increase food and water by 10, decrease energy by 10.', effects: { food: 10, water: 10, energy: -10 } }
    ]
  },
  {
    id: 'd38',
    title: 'Conditional: Community Fracture',
    description: 'If community cohesion < 25, a faction threatens to split off. Do you negotiate or let them go?',
    season: 1,
    year: 9,
    choices: [
      { id: 'c106', text: 'Negotiate', description: 'Increase community cohesion by 15, decrease food by 10.', effects: { communityCohesion: 15, food: -10 } },
      { id: 'c107', text: 'Let them go', description: 'Decrease community cohesion by 10, increase food by 10.', effects: { communityCohesion: -10, food: 10 } }
    ]
  },
  {
    id: 'd39',
    title: 'Conditional: Plague of Locusts',
    description: 'If food < 40, a locust swarm threatens crops. Do you use pesticides or accept the loss?',
    season: 2,
    year: 9,
    choices: [
      { id: 'c108', text: 'Use pesticides', description: 'Increase food by 20, decrease ecological health by 20.', effects: { food: 20, ecologicalHealth: -20 } },
      { id: 'c109', text: 'Accept the loss', description: 'Decrease food by 15, increase ecological health by 10.', effects: { food: -15, ecologicalHealth: 10 } }
    ]
  },
  {
    id: 'd40',
    title: 'Conditional: Tech Sabotage',
    description: 'If technological advancement > 110, saboteurs target your infrastructure. Do you increase security or repair after attacks?',
    season: 3,
    year: 9,
    choices: [
      { id: 'c110', text: 'Increase security', description: 'Decrease energy by 10, increase community cohesion by 10.', effects: { energy: -10, communityCohesion: 10 } },
      { id: 'c111', text: 'Repair after attacks', description: 'Decrease technological advancement by 10, increase energy by 10.', effects: { technologicalAdvancement: -10, energy: 10 } }
    ]
  },
  {
    id: 'd41',
    title: 'Conditional: Drought Recovery',
    description: 'If water < 30, a rare rainstorm offers a chance to recover. Do you store water or share freely?',
    season: 4,
    year: 9,
    choices: [
      { id: 'c112', text: 'Store water', description: 'Increase water by 20, decrease community cohesion by 10.', effects: { water: 20, communityCohesion: -10 } },
      { id: 'c113', text: 'Share freely', description: 'Increase community cohesion by 15, increase water by 5.', effects: { communityCohesion: 15, water: 5 } }
    ]
  },
  {
    id: 'd42',
    title: 'Conditional: Energy Innovation',
    description: 'If technological advancement > 120, a new energy source is discovered. Do you adopt it or stick with current tech?',
    season: 1,
    year: 10,
    choices: [
      { id: 'c114', text: 'Adopt new energy', description: 'Increase energy by 30, decrease ecological health by 10.', effects: { energy: 30, ecologicalHealth: -10 } },
      { id: 'c115', text: 'Stick with current tech', description: 'No change to resources, increase community cohesion by 5.', effects: { communityCohesion: 5 } }
    ]
  },
  {
    id: 'd43',
    title: 'Conditional: Water Diplomacy',
    description: 'If water < 25, a neighboring community offers help for a price. Do you accept or refuse?',
    season: 2,
    year: 10,
    choices: [
      { id: 'c116', text: 'Accept help', description: 'Increase water by 20, decrease food by 10.', effects: { water: 20, food: -10 } },
      { id: 'c117', text: 'Refuse help', description: 'No change to resources, increase community cohesion by 5.', effects: { communityCohesion: 5 } }
    ]
  },
  {
    id: 'd44',
    title: 'Conditional: Food Export Boom',
    description: 'If food > 130, you can export food for profit. Do you export or store for the future?',
    season: 3,
    year: 10,
    choices: [
      { id: 'c118', text: 'Export food', description: 'Increase energy and water by 10, decrease food by 20.', effects: { energy: 10, water: 10, food: -20 } },
      { id: 'c119', text: 'Store food', description: 'Increase food by 10, decrease community cohesion by 5.', effects: { food: 10, communityCohesion: -5 } }
    ]
  },
  {
    id: 'd45',
    title: 'Conditional: Social Media Uproar',
    description: 'If technological advancement > 100, a social media scandal erupts. Do you address it or ignore?',
    season: 4,
    year: 10,
    choices: [
      { id: 'c120', text: 'Address the scandal', description: 'Increase community cohesion by 10, decrease technological advancement by 5.', effects: { communityCohesion: 10, technologicalAdvancement: -5 } },
      { id: 'c121', text: 'Ignore it', description: 'Decrease community cohesion by 10, increase technological advancement by 5.', effects: { communityCohesion: -10, technologicalAdvancement: 5 } }
    ]
  },
  {
    id: 'd46',
    title: 'Conditional: Eco-Refugee Surge',
    description: 'If ecological health < 30, a surge of eco-refugees arrives. Do you accept or turn them away?',
    season: 1,
    year: 11,
    choices: [
      { id: 'c122', text: 'Accept refugees', description: 'Increase community cohesion by 15, decrease food and water by 15.', effects: { communityCohesion: 15, food: -15, water: -15 } },
      { id: 'c123', text: 'Turn them away', description: 'No change to resources, decrease community cohesion by 10.', effects: { communityCohesion: -10 } }
    ]
  },
  {
    id: 'd47',
    title: 'Conditional: Festival of Progress',
    description: 'If all metrics > 110, a festival is proposed to celebrate progress. Do you celebrate or save resources?',
    season: 2,
    year: 11,
    choices: [
      { id: 'c124', text: 'Celebrate', description: 'Increase community cohesion by 20, decrease food, water, and energy by 10 each.', effects: { communityCohesion: 20, food: -10, water: -10, energy: -10 } },
      { id: 'c125', text: 'Save resources', description: 'Increase food, water, and energy by 5 each, decrease community cohesion by 5.', effects: { food: 5, water: 5, energy: 5, communityCohesion: -5 } }
    ]
  },
  {
    id: 'd48',
    title: 'Conditional: Blackout Panic',
    description: 'If energy < 15, panic spreads after a blackout. Do you reassure the public or focus on repairs?',
    season: 3,
    year: 11,
    choices: [
      { id: 'c126', text: 'Reassure the public', description: 'Increase community cohesion by 10, decrease energy by 5.', effects: { communityCohesion: 10, energy: -5 } },
      { id: 'c127', text: 'Focus on repairs', description: 'Increase energy by 10, decrease community cohesion by 5.', effects: { energy: 10, communityCohesion: -5 } }
    ]
  },
  {
    id: 'd49',
    title: 'Conditional: Water Purity Scare',
    description: 'If water < 20, a scare about water purity spreads. Do you invest in purification or reassure the public?',
    season: 4,
    year: 11,
    choices: [
      { id: 'c128', text: 'Invest in purification', description: 'Decrease energy by 10, increase water by 20.', effects: { energy: -10, water: 20 } },
      { id: 'c129', text: 'Reassure the public', description: 'Increase community cohesion by 10, decrease water by 5.', effects: { communityCohesion: 10, water: -5 } }
    ]
  },
  {
    id: 'd50',
    title: 'Conditional: Utopian Invitation',
    description: 'If all metrics > 120, you are invited to join a utopian alliance. Do you join or remain independent?',
    season: 1,
    year: 12,
    choices: [
      { id: 'c130', text: 'Join the alliance', description: 'Increase community cohesion by 30, decrease food, water, energy by 10 each.', effects: { communityCohesion: 30, food: -10, water: -10, energy: -10 } },
      { id: 'c131', text: 'Remain independent', description: 'Increase food, water, energy by 10 each, decrease community cohesion by 10.', effects: { food: 10, water: 10, energy: 10, communityCohesion: -10 } }
    ]
  },
]; 