export interface PersonaProps {
  organizationId: string;
  companyId: string;
  myself: {
    name: string;
    gender: string;
    age: number;
    avatarFilename: string;
  };
  biography: {
    description: string;
    occupation: string;
    family: string;
    gols: [];
    location: string;
  };
  personality: {
    introvertOrExtrovert: number;
    analitycalOrCreative: number;
    loyalOrFickle: number;
    passiveOrActive: number;
    morePersonality: string;
  };
  voice: {
    speech: string;
    tone: string;
    emojiUsage: string;
  };
  motivation: {
    archetype: string;
    control: number;
    entretaiment: number;
    curiosity: number;
    fame: number;
    friendship: number;
  };
  journeys: [];
  id: string;
  createdAt: string;
  updatedAt: string;
}
