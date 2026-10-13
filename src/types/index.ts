export type DestinationCategory = 'nature' | 'heritage' | 'beaches' | 'wildlife' | 'rivers' | 'hills';

export interface Destination {
  id: string;
  slug: string;
  name: string;
  bengaliName: string;
  region: string;
  division: 'Dhaka' | 'Chittagong' | 'Sylhet' | 'Khulna' | 'Rajshahi' | 'Barisal' | 'Rangpur' | 'Mymensingh';
  category: DestinationCategory;
  coordinates: {
    lat: number;
    lng: number;
    mapX: number; // Percentage on SVG map (0-100)
    mapY: number; // Percentage on SVG map (0-100)
  };
  shortDescription: string;
  fullDescription: string;
  whyVisit: string[];
  mainAttractions: {
    title: string;
    description: string;
  }[];
  bestTimeToVisit: string;
  recommendedDuration: string;
  activities: string[];
  seasonalAdvice: string;
  howToGetThere: {
    byAir?: string;
    byRoad?: string;
    byTrain?: string;
    byWater?: string;
  };
  localFoods: string[];
  safetyResponsibleTips: string[];
  relatedDestinations: string[]; // slugs
  image: string;
  imageCaption: string;
  featured?: boolean;
}

export interface Season {
  id: string;
  slug: string;
  name: string;
  bengaliName: string;
  transliteration: string;
  monthsBengali: string;
  monthsEnglish: string;
  description: string;
  atmosphere: string;
  weatherOverview: {
    tempRange: string;
    rainfall: string;
    humidity: string;
  };
  recommendedExperiences: string[];
  topDestinations: string[]; // names or slugs
  seasonalFlavors: string[];
  culturalFestivals: string[];
  clothingAdvice: string;
  accentColor: string;
  image: string;
}

export interface FoodItem {
  id: string;
  slug: string;
  name: string;
  bengaliName: string;
  region: string;
  flavorProfile: string;
  keyIngredients: string[];
  preparationStyle: string;
  culturalSignificance: string;
  whereToTry: string;
  dietaryNotes: string;
  image: string;
  isSpecialFeature?: boolean;
  relatedFoods?: string[];
}

export interface WildlifeAnimal {
  id: string;
  name: string;
  bengaliName: string;
  scientificName: string;
  category: 'Mammals' | 'Reptiles' | 'Aquatic' | 'Birds';
  status: 'Endangered' | 'Vulnerable' | 'Critically Endangered' | 'Protected';
  description: string;
  habitat: string;
  whereToSpot: string;
  responsibleTravelRule: string;
  image: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  highlights: string[];
  activities: string[];
  travelTips: string;
  recommendedStay: string;
}

export interface Itinerary {
  id: string;
  slug: string;
  title: string;
  durationDays: number;
  pace: 'Relaxed' | 'Balanced' | 'Active';
  targetAudience: string;
  summary: string;
  route: string[];
  highlights: string[];
  days: ItineraryDay[];
  transportOverview: string;
  budgetEstimateUSD: {
    backpacker: number;
    comfort: number;
    luxury: number;
  };
  image: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Destinations' | 'Culture & Heritage' | 'Wildlife & Nature' | 'Food & Culinary' | 'Travel Essentials';
  author: {
    name: string;
    role: string;
  };
  readTime: string;
  publishDate: string;
  excerpt: string;
  image: string;
  content: {
    heading?: string;
    paragraphs: string[];
  }[];
  tags: string[];
}
