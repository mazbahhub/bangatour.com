import { Season } from '../types';

export const seasons: Season[] = [
  {
    id: 'grishma',
    slug: 'grishma-summer',
    name: 'Summer',
    bengaliName: 'গ্রীষ্ম',
    transliteration: 'Grishma',
    monthsBengali: 'Baishakh – Jyaishtha',
    monthsEnglish: 'Mid-April to Mid-June',
    description: 'The Bengali New Year arrives with warmth, thunderstorms (Kalbaishakhi), and the beloved "Modhumash" (Honey Month)—when orchards overflow with luscious mangoes, jackfruits, litchis, and black plums.',
    atmosphere: 'Intense golden sunlit days, dramatic afternoon cloudbursts, vibrant Pohela Boishakh parades, and sweet floral scents of frangipani and krishnachura.',
    weatherOverview: {
      tempRange: '28°C – 38°C (82°F – 100°F)',
      rainfall: 'Moderate; sudden intense evening convective squalls (Nor’westers)',
      humidity: '65% – 85%'
    },
    recommendedExperiences: [
      'Celebrate Pohela Boishakh (Bengali New Year) in Dhaka with the Mangal Shobhajatra parade',
      'Taste seasonal GI-certified Rajshahi and Chapainawabganj Himsagar and Langra mangoes',
      'Witness the fiery crimson flame-of-the-forest (Krishnachura) blooming across university campuses',
      'Escape the midday heat into the breezy shaded tea trails of Sreemangal'
    ],
    topDestinations: ['Old Dhaka', 'Sreemangal', 'Kaptai Lake', 'Rajshahi'],
    seasonalFlavors: [
      'Juicy ripe mangoes (Himsagar, Amrapali, Langra)',
      'Aam Panna (roasted green mango cooler)',
      'Ripe jackfruit (Kathal)—the national fruit of Bangladesh',
      'Refreshing green coconut water'
    ],
    culturalFestivals: ['Pohela Boishakh (Bengali New Year)', 'Baishakhi Fairs & Folk Melas', 'Buddha Purnima'],
    clothingAdvice: 'Ultra-lightweight breathable cottons, linen shirts, sunhats, sunglasses, and an umbrella for sudden thunder showers.',
    accentColor: '#D97706',
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg'
  },
  {
    id: 'barsha',
    slug: 'barsha-monsoon',
    name: 'Monsoon',
    bengaliName: 'বর্ষা',
    transliteration: 'Barsha',
    monthsBengali: 'Asharh – Shraban',
    monthsEnglish: 'Mid-June to Mid-August',
    description: 'The soul of Bengal. The southwest monsoon sweeps across the delta, transforming rivers into inland oceans, filling wetlands, turning paddy fields into neon emerald, and inspiring centuries of poetry and music.',
    atmosphere: 'Torrential rhythmic downpours, misty river horizons, full-flowing waterfalls, lush green landscapes, and the unmistakable aroma of wet earth (petrichor).',
    weatherOverview: {
      tempRange: '26°C – 32°C (79°F – 90°F)',
      rainfall: 'Heavy and frequent, especially in the eastern and northeastern hills',
      humidity: '85% – 95%'
    },
    recommendedExperiences: [
      'Stay on a luxury wooden houseboat in the vast inland ocean of Tanguar Haor',
      'Glide through the flooded green tree canopy of Ratargul Swamp Forest on a paddle boat',
      'Experience the bustling floating guava markets of Barishal and Bhimruli by wooden skiff',
      'Indulge in rainy-day Bengali comfort: steaming Khichuri served with crispy fried Hilsa (Ilish)'
    ],
    topDestinations: ['Tanguar Haor', 'Ratargul Swamp Forest', 'Barishal Backwaters', 'Sajek Valley'],
    seasonalFlavors: [
      'Bhuna Khichuri (spiced lentil rice) with fried Ilish and Begun Bhaja (eggplant fritters)',
      'Fresh Padma river Hilsa (Ilish macher paturi)',
      'Taro stem curry with river prawns (Kochur loti)',
      'Hot spiced chai enjoyed while watching the rain'
    ],
    culturalFestivals: ['Barsha Utshab (Monsoon welcome festival)', 'Boat Races (Nouka Baich)', 'Rath Yatra'],
    clothingAdvice: 'Waterproof sandals, quick-drying synthetic clothing, heavy-duty umbrellas, and waterproof dry-bags for cameras and electronics.',
    accentColor: '#0D9488',
    image: '/src/assets/images/sundarbans_mangrove_wildlife_1791862156168.jpg'
  },
  {
    id: 'sharat',
    slug: 'sharat-autumn',
    name: 'Early Autumn',
    bengaliName: 'শরৎ',
    transliteration: 'Sharat',
    monthsBengali: 'Bhadra – Ashwin',
    monthsEnglish: 'Mid-August to Mid-October',
    description: 'Clear azure skies return, dotted with fluffy white cotton clouds. Riverbanks burst into bloom with endless swaying white Kashful reeds, announcing the arrival of Bengal’s grandest festival: Durga Puja.',
    atmosphere: 'Crisp bright blue skies, cool evening river breezes, white feather-like Kash flowers waving along sandbars, and the festive beat of the Dhak drum.',
    weatherOverview: {
      tempRange: '25°C – 33°C (77°F – 91°F)',
      rainfall: 'Decreasing rapidly; short occasional sunshine showers',
      humidity: '70% – 80%'
    },
    recommendedExperiences: [
      'Walk through fields of white Kashful (Saccharum spontaneum) along riverbanks at Diabari',
      'Experience the grand rituals, ornate clay idols, and street food of Durga Puja in Old Dhaka',
      'Take a sunset cruise along the Padma River near the iconic Padma Bridge',
      'Photograph the clear cloud reflections in the calm waters of Kaptai Lake'
    ],
    topDestinations: ['Dhaka (Durga Puja)', 'Kaptai Lake', 'Padma Riverbanks', 'Sajek Valley'],
    seasonalFlavors: [
      'Taler Kheer (aromatic palmyra palm pudding)',
      'Taler Pitha (sweet palm fritters)',
      'Durga Puja festive sweetmeats (Naru, Sandesh, Nimki)',
      'Fresh river baim and boal fish'
    ],
    culturalFestivals: ['Durga Puja (Grand autumn celebration)', 'Janmashtami', 'Kashful season walks'],
    clothingAdvice: 'Breathable daytime clothes, comfortable walking shoes for temple pandal-hopping, and a light wrap for breezy evenings.',
    accentColor: '#2563EB',
    image: '/src/assets/images/sajek_valley_clouds_1791862156009.jpg'
  },
  {
    id: 'hemanta',
    slug: 'hemanta-late-autumn',
    name: 'Late Autumn (The Golden Harvest)',
    bengaliName: 'হেমন্ত',
    transliteration: 'Hemanta',
    monthsBengali: 'Kartik – Agrahayan',
    monthsEnglish: 'Mid-October to Mid-December',
    description: 'The golden hour of the agrarian year. Endless paddy fields turn shimmering yellow, morning mist covers the villages, and the joyous Nabanna festival celebrates the first harvest of Aman rice.',
    atmosphere: 'Golden morning light, gentle cooling temperatures, delicate morning dewdrops on grass blades, and the fragrance of newly threshed fragrant rice.',
    weatherOverview: {
      tempRange: '20°C – 29°C (68°F – 84°F)',
      rainfall: 'Dry and sunny with almost zero precipitation',
      humidity: '55% – 70%'
    },
    recommendedExperiences: [
      'Cycle through rural Bengal villages to witness golden paddy harvests and threshing',
      'Celebrate Nabanna Utshab with freshly pounded rice flour sweets and folk dances',
      'Begin the trekking and camping season in Sajek Valley and Keokradong peaks',
      'Cruise through the peaceful waterways of the Sundarbans as the weather calms'
    ],
    topDestinations: ['Sreemangal', 'Sajek Valley', 'Sundarbans', 'Paharpur'],
    seasonalFlavors: [
      'New-harvest aromatic Chinigura rice dishes',
      'Chitol fish kofta and mustard fish curries',
      'Fresh date palm sap (Khejur Rosh) tapped at dawn',
      'Pitha made from freshly milled new rice flour'
    ],
    culturalFestivals: ['Nabanna Utshab (Harvest Festival)', 'Rash Mela in Dublar Char (Sundarbans)', 'Kartik Purnima'],
    clothingAdvice: 'Comfortable casuals for daytime and a light cardigan or denim jacket for cool evenings.',
    accentColor: '#CA8A04',
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg'
  },
  {
    id: 'sheet',
    slug: 'sheet-winter',
    name: 'Winter',
    bengaliName: 'শীত',
    transliteration: 'Sheet',
    monthsBengali: 'Poush – Magh',
    monthsEnglish: 'Mid-December to Mid-February',
    description: 'The premier travel season in Bangladesh. Crisp sunny days, cool sweater-weather evenings, blooming yellow mustard fields, date palm molasses (Nolen Gur), and an explosion of handmade steamed pithas.',
    atmosphere: 'Ethereal morning mists, bright golden afternoon sunshine, crackling outdoor chai gatherings, yellow mustard carpets, and cozy sweater weather.',
    weatherOverview: {
      tempRange: '12°C – 25°C (54°F – 77°F); northern plains dip to 8°C',
      rainfall: 'Practically zero; very dry and clear',
      humidity: '45% – 60%'
    },
    recommendedExperiences: [
      'Embark on a multi-day wildlife expedition vessel cruise into the Sundarbans',
      'Visit Saint Martin’s Coral Island and snorkel in turquoise Bay of Bengal waters',
      'Taste steaming street-side Bhapa Pitha and Patishapta sweetened with artisanal date jaggery',
      'Photograph vibrant endless yellow mustard fields (Shorishey khet) across the countryside',
      'Explore archaeological ruins of Paharpur and Bagerhat in comfortable walking weather'
    ],
    topDestinations: ['Sundarbans', 'Saint Martin’s Island', 'Cox’s Bazar', 'Bagerhat', 'Sreemangal'],
    seasonalFlavors: [
      'Bhapa Pitha (steamed rice cake with grated coconut and molten date jaggery)',
      'Patishapta (crepe rolls filled with caramelized condensed milk khoya)',
      'Doodh Pitha (rice dumplings steeped in sweet cardamom milk)',
      'Pure morning date palm sap (Khejur Rosh)',
      'Winter duck curry (Haasher mangsho) cooked with whole garlic and mustard oil'
    ],
    culturalFestivals: ['Poush Mela (Winter Pitha Festival)', 'Dhaka Literature Festival', 'Shakrain Kite Festival in Old Dhaka'],
    clothingAdvice: 'Sweaters, light jackets, shawls, and closed walking shoes. A warm fleece is recommended for chilly mornings in northern districts and hill tracts.',
    accentColor: '#475569',
    image: '/src/assets/images/sundarbans_mangrove_wildlife_1791862156168.jpg'
  },
  {
    id: 'basanta',
    slug: 'basanta-spring',
    name: 'Spring (The King of Seasons)',
    bengaliName: 'বসন্ত',
    transliteration: 'Basanta',
    monthsBengali: 'Falgun – Chaitra',
    monthsEnglish: 'Mid-February to Mid-April',
    description: 'Known as "Rituraj" (The King of Seasons). Nature awakens in a riot of yellow and orange. The sweet song of the Asian Koel rings through gardens, Shimul trees burst into fiery scarlet flowers, and spring breezes bring pleasant warmth.',
    atmosphere: 'Pleasant gentle breezes, brilliant floral explosions of Shimul and Palash, cheerful yellow sarees and kurtas for Pahela Falgun, and perfect outdoor adventure weather.',
    weatherOverview: {
      tempRange: '20°C – 32°C (68°F – 90°F)',
      rainfall: 'Low to moderate; clear skies',
      humidity: '50% – 65%'
    },
    recommendedExperiences: [
      'Celebrate Pahela Falgun (First Day of Spring) dressed in marigold yellow alongside thousands of revelers',
      'Visit the crimson silk-cotton forest of Shimul Bagan in Sunamganj along the Jadukata river',
      'Browse rare books and literary talks at the month-long Amar Ekushey Boi Mela in Dhaka',
      'Trek through the blooming hill forests of Bandarban and Rangamati'
    ],
    topDestinations: ['Shimul Bagan (Sunamganj)', 'Dhaka Cultural Hubs', 'Sreemangal', 'Bandarban Hills'],
    seasonalFlavors: [
      'Fresh green spring vegetables and bitter gourd starters (Shukto)',
      'Delicate spring fish curries with freshly ground coriander',
      'Chhana sandesh flavored with cardamom',
      'Green mango salads (Kacha aamer tok)'
    ],
    culturalFestivals: ['Pahela Falgun (Spring Festival)', 'Amar Ekushey Book Fair (Boi Mela)', 'Holi / Dol Jatra'],
    clothingAdvice: 'Bright comfortable cottons, light cardigans for early mornings, and comfortable walking sandals.',
    accentColor: '#EAB308',
    image: '/src/assets/images/sajek_valley_clouds_1791862156009.jpg'
  }
];
