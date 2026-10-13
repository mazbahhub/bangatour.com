import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: 'sundarbans',
    slug: 'sundarbans',
    name: 'Sundarbans Mangrove Forest',
    bengaliName: 'সুন্দরবন',
    region: 'Southwest Delta (Khulna & Bagerhat)',
    division: 'Khulna',
    category: 'wildlife',
    coordinates: {
      lat: 21.9497,
      lng: 89.1833,
      mapX: 35,
      mapY: 82,
    },
    shortDescription: 'The world’s largest contiguous mangrove forest and a UNESCO World Heritage sanctuary, home to the Royal Bengal tiger, spotted deer, and estuarine saltwater crocodiles.',
    fullDescription: 'Encompassing over 10,000 square kilometers across the delta formed by the confluence of the Ganges, Brahmaputra, and Meghna rivers, the Sundarbans is a tidal wonderland of breathing pneumatophore roots, Sundari trees, and labyrinthine waterways. Life here shifts with the daily surge of tides. Traveling aboard small wooden expedition cruisers, visitors witness one of the most untouched wilderness frontiers on Earth.',
    whyVisit: [
      'UNESCO World Heritage Site with unparalleled mangrove biodiversity',
      'The primary natural fortress of the majestic Royal Bengal tiger',
      'Silent boat journeys through narrow tidal creeks teeming with kingfishers and otters',
      'Observation towers at Katka, Kochikhali, and Karamjal with panoramic delta vistas',
      'Ancient traditional fishing with trained Asian small-clawed otters in Narail'
    ],
    mainAttractions: [
      {
        title: 'Kotka Wildlife Sanctuary',
        description: 'Renowned for open grasslands frequented by herds of spotted deer, wild boars, and watchtowers overlooking tiger territory.'
      },
      {
        title: 'Kochikhali River & Tiger Trail',
        description: 'A secluded sanctuary with sweeping sea views, dense sundari canopies, and mangrove mudflats frequented by monitor lizards.'
      },
      {
        title: 'Karamjal Eco-Tourism Center',
        description: 'Gateway breeding center for endangered Batagur baska river terrapins and estuarine crocodiles with an elevated wooden canopy boardwalk.'
      },
      {
        title: 'Hiron Point (Nilkamal)',
        description: 'Deep southern post where fresh river silt meets the brackish sea, ideal for birdwatchers tracking masked finfoots and white-bellied sea eagles.'
      }
    ],
    bestTimeToVisit: 'November to February (mild temperatures, calm waters, minimal rainfall)',
    recommendedDuration: '3 to 4 days (multi-day liveaboard river cruise)',
    activities: [
      'Multi-day wooden expedition vessel cruise',
      'Silent country-boat creek crawling at dawn',
      'Wildlife watchtower observation',
      'Tidal mudflat walking and birdwatching',
      'Stargazing on river estuaries under pristine unpolluted skies'
    ],
    seasonalAdvice: 'Winter brings calm tides and comfortable weather between 16°C and 25°C. Monsoon (June–August) transforms the forest into a vibrant emerald sea, but rougher waters require experienced navigators and seaworthy cruisers.',
    howToGetThere: {
      byAir: 'Fly from Dhaka to Jashore Airport (45 min), followed by a 1.5-hour drive to Khulna or Mongla Port.',
      byRoad: 'Drive from Dhaka to Mongla Port via the iconic Padma Bridge (approx. 4–5 hours on modern expressway).',
      byTrain: 'Daily intercity trains from Dhaka to Khulna Railway Station (approx. 7–8 hours).',
      byWater: 'Organized river cruise vessels depart directly from Mongla Port dockyards.'
    },
    localFoods: [
      'Sundarbans wild raw honey (collected by traditional Mouwals)',
      'Fresh river hilsa (Ilish) and giant tiger prawns (Bagda chingri)',
      'Chui Jhal spicy beef curry in Khulna city',
      'Local pitha and coconut sweets'
    ],
    safetyResponsibleTips: [
      'Always enter with an official Bangladesh Forest Department armed guard and licensed naturalist guide.',
      'Never disembark alone on unapproved mudflats; tigers are silent apex ambush predators.',
      'Strict zero-plastic policy: all waste must be collected and returned to the mainland.',
      'Maintain total silence during creek dinghy rides to avoid stressing wildlife.'
    ],
    relatedDestinations: ['bagerhat', 'kuakata', 'barishal-backwaters'],
    image: '/src/assets/images/sundarbans_mangrove_wildlife_1791862156168.jpg',
    imageCaption: 'A traditional wooden boat navigating the tidal mangrove waterways of the Sundarbans.',
    featured: true
  },
  {
    id: 'sajek-valley',
    slug: 'sajek-valley',
    name: 'Sajek Valley & Clouds',
    bengaliName: 'সাজেক ভ্যালি',
    region: 'Chittagong Hill Tracts (Rangamati)',
    division: 'Chittagong',
    category: 'hills',
    coordinates: {
      lat: 23.3828,
      lng: 92.2938,
      mapX: 86,
      mapY: 53,
    },
    shortDescription: 'Perched 1,800 feet above sea level, Sajek is often called the "Roof of Rangamati"—where travelers wake up above an endless sea of rolling white clouds.',
    fullDescription: 'Located near the lush border of the Chittagong Hill Tracts and the Indian state of Mizoram, Sajek Valley is surrounded by rugged verdant peaks, bamboo forests, and indigenous Lushei, Tripura, and Chakma tribal villages. Early mornings bring an extraordinary natural spectacle as clouds envelop the valleys beneath the wooden cottage balconies.',
    whyVisit: [
      'Witness the sea of morning clouds (Megh-er Desh) from your cottage veranda',
      'Stunning 360-degree sunset and sunrise viewpoints over rolling hills',
      'Rich indigenous heritage and warm hospitality of the Chakma and Tripura communities',
      'The exhilarating open-top "Chander Gari" mountain safari drive from Dighinala'
    ],
    mainAttractions: [
      {
        title: 'Konglak Peak',
        description: 'The highest point in Sajek Valley with an indigenous Tripura hamlet at its summit and panoramic views stretching across the horizon.'
      },
      {
        title: 'Helipad Sunrise Point',
        description: 'The gathering place for travelers to witness the golden sun breaking above cloud-filled valleys.'
      },
      {
        title: 'Ruilui Para Cultural Village',
        description: 'An ancient settlement inhabited by the Lushei people, featuring traditional bamboo stilt architecture and handcrafted textiles.'
      },
      {
        title: 'Sikari Khel Rock Trail',
        description: 'A secluded forest trail surrounded by wild banana groves and pristine mountain springs.'
      }
    ],
    bestTimeToVisit: 'September to March (October and November offer the most dramatic morning cloud seas)',
    recommendedDuration: '2 to 3 days',
    activities: [
      'Cloud gazing from cliffside eco-resort verandas',
      'Hiking to Konglak Peak at daybreak',
      'Open-air Chander Gari 4x4 mountain safari',
      'Sampling indigenous bamboo-cooked bamboo shoot delicacies',
      'Night-time stargazing with zero light pollution'
    ],
    seasonalAdvice: 'Autumn (October–November) offers the thickest cloud blankets. Monsoon turns the mountains into deep luminescent green with cascading streams, though hill roads require careful travel.',
    howToGetThere: {
      byAir: 'Fly from Dhaka to Chittagong (Shah Amanat), then drive 3.5 hours to Khagrachhari.',
      byRoad: 'Non-stop VIP bus from Dhaka to Khagrachhari (6–7 hours), then board a scheduled military-escorted Chander Gari jeep to Sajek (2.5 hours).',
      byTrain: 'Intercity train from Dhaka to Feni or Chattogram, then transfer by road.'
    },
    localFoods: [
      'Indigenous bamboo shoot curry (Bash Korol)',
      'Free-range mountain chicken roasted in whole bamboo cylinders',
      'Wild hill honey and fresh sweet mountain papayas',
      'Chakma herb-infused vegetable stew'
    ],
    safetyResponsibleTips: [
      'Non-Bangladeshi international travelers must carry valid passport copies and entry permits checked at army check-posts.',
      'Respect local indigenous customs, sacred groves, and always ask permission before taking portraits of villagers.',
      'Conserve water; hill resorts rely heavily on rainwater harvesting during the dry months.'
    ],
    relatedDestinations: ['kaptai-lake', 'sreemangal', 'coxs-bazar'],
    image: '/src/assets/images/sajek_valley_clouds_1791862156009.jpg',
    imageCaption: 'Dawn over Sajek Valley with wooden eco-cottages perched above an ocean of clouds.',
    featured: true
  },
  {
    id: 'sreemangal',
    slug: 'sreemangal',
    name: 'Sreemangal Tea Country & Rain Forests',
    bengaliName: 'শ্রীমঙ্গল',
    region: 'Sylhet Division (Moulvibazar)',
    division: 'Sylhet',
    category: 'nature',
    coordinates: {
      lat: 24.3065,
      lng: 91.7296,
      mapX: 74,
      mapY: 42,
    },
    shortDescription: 'The Tea Capital of Bangladesh, celebrated for emerald tea gardens, ancient rainforests harboring endangered Hoolock gibbons, and serene tribal hamlets.',
    fullDescription: 'Draped in undulating hills of tea bushes, pineapple plantations, and rubber estates, Sreemangal is one of South Asia’s most tranquil pastoral landscapes. It is home to Lawachara National Park, a remnant tropical rainforest where morning calls of the western hoolock gibbon echo through towering chapalish and fig canopies.',
    whyVisit: [
      'Endless emerald green tea estates stretching over gentle hillocks',
      'Trekking inside Lawachara National Park in search of rare primates and hornbills',
      'Tasting the legendary multi-layered 7-Color Tea at Nilkantha Tea Cabin',
      'Cycling along quiet tree-shaded country trails through Khasia and Monipuri villages',
      'Birdwatching sanctuary at Baikka Beel wetland reserve'
    ],
    mainAttractions: [
      {
        title: 'Lawachara National Park',
        description: 'A 1,250-hectare rainforest sanctuary bisected by a heritage railway line, sheltering the rare hoolock gibbon, capped langur, and barking deer.'
      },
      {
        title: 'Finlay & Zareen Tea Estates',
        description: 'Colonial-era tea plantations with scenic processing factories and walking trails among neat tea terraces.'
      },
      {
        title: 'Baikka Beel Wetland Sanctuary',
        description: 'A permanent bird sanctuary hosting over 100 species of migratory waterfowl, lotus ponds, and an elevated three-story observation tower.'
      },
      {
        title: 'Monipuri Handloom Village',
        description: 'Artisanal weavers crafting traditional Monipuri silk scarves, cotton lungis, and intricate floral wall hangings.'
      }
    ],
    bestTimeToVisit: 'October to March for cool pleasant walks; June to August for vibrant green tea flushes and gushing streams',
    recommendedDuration: '2 to 3 days',
    activities: [
      'Sunrise tea garden bicycle tours',
      'Guided primate tracking trek in Lawachara National Park',
      'Tasting single-origin green, white, and orthodox teas',
      'Traditional Monipuri weaving workshops',
      'Sunset birdwatching at Baikka Beel'
    ],
    seasonalAdvice: 'November to February offers sunny days around 22°C and cool crisp nights. Monsoon (June–September) is the plucking season when tea shrubs burst with tender new shoots.',
    howToGetThere: {
      byAir: 'Fly from Dhaka to Sylhet Osmani Airport (45 min), then a 1.5-hour private car drive to Sreemangal.',
      byRoad: 'AC luxury bus from Dhaka via Dhaka-Sylhet Highway (approx. 4–5 hours).',
      byTrain: 'The scenic Parabat or Jayantika Express train from Dhaka Kamalapur to Sreemangal Station (approx. 4 hours).'
    },
    localFoods: [
      'Fresh local pineapple and sweet Sylheti lemons (Shatkora)',
      'Beef curry cooked with aromatic wild citrus Shatkora',
      'Layered Seven-Color tea and artisanal orthodox tea infusions',
      'Monipuri fermented bamboo and fresh lake fish'
    ],
    safetyResponsibleTips: [
      'Stick to designated trails in Lawachara to protect fragile forest regeneration.',
      'Refrain from touching or feeding wildlife in national parks.',
      'Support Monipuri artisans directly by buying handloom goods from weaver homes.'
    ],
    relatedDestinations: ['ratargul-swamp', 'tanguar-haor', 'sajek-valley'],
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    imageCaption: 'Rolling tea terraces and forest wetlands in the tranquil countryside of Sreemangal.',
    featured: true
  },
  {
    id: 'old-dhaka',
    slug: 'old-dhaka',
    name: 'Old Dhaka & Lalbagh Fort',
    bengaliName: 'পুরান ঢাকা',
    region: 'Central Delta (Dhaka Division)',
    division: 'Dhaka',
    category: 'heritage',
    coordinates: {
      lat: 23.7196,
      lng: 90.3881,
      mapX: 52,
      mapY: 52,
    },
    shortDescription: 'A 400-year-old Mughal capital pulsing with labyrinthine spice alleys, ornate terracotta mansions, cycle rickshaw symphonies, and South Asia’s richest culinary heritage.',
    fullDescription: 'Founded as the Mughal capital of Jahangirnagar in 1610, Old Dhaka is a living museum. Here, winding alleys echo with the bells of decorative rickshaws, brass metalworkers hammer in hereditary workshops, and the Buriganga riverfront hums with river passenger launches. From the rose-tinted marble of Ahsan Manzil to the unfinished 17th-century bastion of Lalbagh Fort, history breathes in every doorway.',
    whyVisit: [
      'Explore the unfinished Mughal fort fortress and tomb of Pari Bibi at Lalbagh',
      'Wander Ahsan Manzil, the majestic "Pink Palace" on the Buriganga riverbank',
      'Taste legendary Old Dhaka mutton Kacchi Biryani cooked in sealed copper cauldrons',
      'Navigate Shankharia Bazar (Conch Shell Alley), a vibrant Hindu artisanal lane',
      'Experience the incredible human energy of Sadarghat river port'
    ],
    mainAttractions: [
      {
        title: 'Lalbagh Fort (Fort Aurangabad)',
        description: 'An incomplete 17th-century Mughal fort complex containing the Diwan-i-Aam, the subterranean tunnel legends, and the mausoleum of Bibi Pari.'
      },
      {
        title: 'Ahsan Manzil (The Pink Palace)',
        description: 'The opulent grand residence of the Nawabs of Dhaka, painted in distinctive light rose and housing antique Mughal portraits and palanquins.'
      },
      {
        title: 'Star Mosque (Tara Masjid)',
        description: 'An architectural jewel decorated with chinitikri mosaic glass motifs and thousands of five-pointed blue porcelain stars.'
      },
      {
        title: 'Sadarghat River Port',
        description: 'One of the busiest river ports on earth, where hundreds of wooden rowing skiffs navigate between giant multi-deck river steamers.'
      }
    ],
    bestTimeToVisit: 'October to March (pleasant walking weather and dry streets)',
    recommendedDuration: '1 to 2 days',
    activities: [
      'Guided heritage architectural walking tour through Old Dhaka alleys',
      'Cycle-rickshaw photography ride through Shankharia Bazar',
      'Mughal culinary food walk tasting Bakarkhani bread and Kacchi Biryani',
      'Sunset wooden boat ride on the Buriganga River',
      'Shopping for traditional brass crafts and pure attar perfumes'
    ],
    seasonalAdvice: 'Winter (December–February) is by far the most comfortable season for walking. Ramadan evenings offer an extraordinary food market along Chawkbazar.',
    howToGetThere: {
      byAir: 'Arrive at Hazrat Shahjalal International Airport (DAC) in Dhaka.',
      byRoad: 'Accessible by taxi, Uber, or CNG auto-rickshaw from central or north Dhaka (allow 45–75 mins depending on traffic).',
      byWater: 'Sadarghat connects Old Dhaka with southern Bangladesh via overnight river steamers.'
    },
    localFoods: [
      'Old Dhaka Kacchi Biryani (mutton marinated in yogurt with fragrant Chinigura rice)',
      'Bakarkhani (crispy layered spiced unleavened bread)',
      'Beauty Lassi & Falooda (traditional chilled rose yogurt drinks)',
      'Morog Polao (slow-cooked heritage chicken pilaf)'
    ],
    safetyResponsibleTips: [
      'Old Dhaka lanes are tight and bustling; keep valuables securely stowed in front pockets.',
      'Hire a licensed local heritage walking guide to navigate the labyrinthine alleys safely.',
      'Always ask before photographing shopkeepers and religious ceremony artisans.'
    ],
    relatedDestinations: ['sonargaon', 'paharpur', 'bagerhat'],
    image: '/src/assets/images/old_dhaka_heritage_culture_1791862157173.jpg',
    imageCaption: 'Timeless heritage architecture and lively street scenes in the historic heart of Old Dhaka.',
    featured: true
  },
  {
    id: 'saint-martins-island',
    slug: 'saint-martins-island',
    name: 'Saint Martin’s Coral Island',
    bengaliName: 'সেন্ট মার্টিন্স দ্বীপ',
    region: 'Bay of Bengal (Cox’s Bazar)',
    division: 'Chittagong',
    category: 'beaches',
    coordinates: {
      lat: 20.6272,
      lng: 92.3228,
      mapX: 89,
      mapY: 96,
    },
    shortDescription: 'Bangladesh’s only coral-rimmed island, known locally as "Narikel Jinjira" (Coconut Island), surrounded by crystal turquoise waters, coconut palms, and marine life.',
    fullDescription: 'Lying 9 kilometers south of the Teknaf peninsula in the southernmost waters of Bangladesh, Saint Martin’s is an 8-square-kilometer tropical paradise. The island features calm turquoise beaches, living coral colonies, nesting grounds for Olive Ridley sea turtles, and Chhera Dwip, an uninhabited coral islet accessible by foot during low tide.',
    whyVisit: [
      'Pristine crystal-clear turquoise waters and white shell beaches',
      'Snorkeling and scuba diving around living coral formations',
      'Walking across the tidal sandbar to the uninhabited islet of Chhera Dwip',
      'Fresh grilled Bay of Bengal sea fish served under starlit beach shacks',
      'Serene sunsets with silhouettes of leaning coconut palms'
    ],
    mainAttractions: [
      {
        title: 'Chhera Dwip',
        description: 'An uninhabited islet connected to Saint Martin’s by a coral spit, surrounded by crystalline shallow pools and black coral rocks.'
      },
      {
        title: 'West Beach (Paschim Para)',
        description: 'The premier sunset viewpoint with soft white sands and traditional wooden fishing trawlers resting on the shore.'
      },
      {
        title: 'Sea Turtle Marine Sanctuary',
        description: 'Dedicated conservation beaches where Olive Ridley sea turtles lay their eggs between November and February.'
      }
    ],
    bestTimeToVisit: 'November to February (ferries operate strictly during this calm winter window)',
    recommendedDuration: '2 to 3 days',
    activities: [
      'Snorkeling among submerged coral boulders',
      'Cycling around the entire island circumference along sandy village tracks',
      'Fresh seafood beach barbecues under coconut palms',
      'Stargazing on uninhabited southern shores',
      'Marine turtle conservation night patrols'
    ],
    seasonalAdvice: 'Government environmental regulations restrict ferry access outside the November–February season to protect the fragile marine ecology and coral reefs.',
    howToGetThere: {
      byAir: 'Fly from Dhaka to Cox’s Bazar Airport, then drive 2.5 hours to Teknaf or Nuniar Chhora Jetty.',
      byRoad: 'AC bus from Dhaka to Teknaf, then board the tourist cruise ship (2.5 hours sea transit).',
      byWater: 'Official passenger cruise liners (e.g. Bay One, Keari Sindbad) operate daily in winter.'
    },
    localFoods: [
      'Grilled red snapper, pomfret (Rupchanda), and giant lobsters',
      'Sweet green coconut water straight from local trees',
      'Kora and coral fish curry cooked in coconut milk',
      'Dry fish (Shutki) delicacies'
    ],
    safetyResponsibleTips: [
      'Never break, step on, or purchase coral souvenirs; the reef is fragile and legally protected.',
      'Carry all non-biodegradable waste back to the mainland; the island lacks recycling facilities.',
      'Check current environmental travel regulations and ferry schedules prior to arrival.'
    ],
    relatedDestinations: ['coxs-bazar', 'kuakata', 'kaptai-lake'],
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    imageCaption: 'Turquoise waters and coconut groves on the shores of Saint Martin’s Island.',
    featured: true
  },
  {
    id: 'tanguar-haor',
    slug: 'tanguar-haor',
    name: 'Tanguar Haor Wetland Oasis',
    bengaliName: 'টাঙ্গুয়ার হাওর',
    region: 'Sunamganj (Sylhet Division)',
    division: 'Sylhet',
    category: 'rivers',
    coordinates: {
      lat: 25.1333,
      lng: 91.1333,
      mapX: 62,
      mapY: 28,
    },
    shortDescription: 'A Ramsar-designated inland sea of freshwater wetlands beneath the Meghalaya hills, hosting over 200 species of migratory Siberian birds each winter.',
    fullDescription: 'Spanning across the foothill valleys of the Meghalayan plateau, Tanguar Haor transforms dramatically across seasons. In monsoon, it becomes a vast inland freshwater ocean where traditional wooden houseboats navigate between submerged swamp forests and floating villages. In winter, waters recede to expose lush beels teeming with millions of migratory birds.',
    whyVisit: [
      'Stay on luxury wooden houseboats floating under open starry skies',
      'Ramsar site of international ecological importance with over 200 migratory bird species',
      'Crystal-clear mountain streams at Shimul Bagan and Jadukata River nearby',
      'Majestic views of the Meghalaya mountain wall bordering India',
      'Authentic immersion into traditional river delta living'
    ],
    mainAttractions: [
      {
        title: 'Tanguar Watchtower',
        description: 'An elevated wooden viewing post surrounded by ancient Hijal and Koroch swamp trees standing submerged in fresh water.'
      },
      {
        title: 'Jadukata River & Blue Waters',
        description: 'A crystal-clear river flowing down from Meghalaya over soft silver sands, framed by green mountain slopes.'
      },
      {
        title: 'Shimul Bagan (Silk Cotton Tree Forest)',
        description: 'The largest cotton silk tree grove in Asia, bursting into an intense crimson red bloom during February and March.'
      },
      {
        title: 'Barikka Tila',
        description: 'A hilltop ridge offering breathtaking border views of the river meandering into Bangladesh from the Meghalaya mountains.'
      }
    ],
    bestTimeToVisit: 'July to September for floating houseboat experience; November to February for birdwatching',
    recommendedDuration: '2 to 3 days (on a boutique houseboat)',
    activities: [
      'Multi-day houseboat stay with rooftop lounge and local culinary service',
      'Swimming in crystal-clear freshwater lagoons',
      'Birdwatching with binoculars spotting bar-headed geese and osprey',
      'Cruising along the crystal waters of Jadukata River',
      'Visiting the crimson blooms of Shimul Bagan in late winter'
    ],
    seasonalAdvice: 'Monsoon (July–September) is the high season for houseboating when the wetland is full. In winter (December–February), the waters recede to reveal thousands of migratory birds feeding in the shallows.',
    howToGetThere: {
      byAir: 'Fly from Dhaka to Sylhet, then drive 2 hours to Sunamganj town.',
      byRoad: 'AC bus from Dhaka to Sunamganj (approx. 6 hours), then a short auto-rickshaw ride to Tahirpur ghat to board houseboats.',
      byTrain: 'Train to Sylhet, then road transfer to Sunamganj.'
    },
    localFoods: [
      'Freshly caught haor fish curry (Boal, Shoal, and Baim)',
      'Traditional Sylheti duck curry cooked with black pepper and ginger',
      'Fragrant local Kalijira and Chinigura rice',
      'Spicy mashed dry fish (Shutki bhorta)'
    ],
    safetyResponsibleTips: [
      'Choose eco-certified houseboats that have biological waste retention tanks to prevent polluting the wetland.',
      'Always wear a life vest during small country boat transfers.',
      'Never disturb flocks of migratory waterfowl or attempt to approach nests.'
    ],
    relatedDestinations: ['sreemangal', 'ratargul-swamp', 'sajek-valley'],
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    imageCaption: 'Expansive freshwater wetlands of Tanguar Haor beneath the foothills of Meghalaya.',
    featured: true
  },
  {
    id: 'coxs-bazar',
    slug: 'coxs-bazar',
    name: 'Cox’s Bazar & Marine Drive',
    bengaliName: 'কক্সবাজার',
    region: 'Southeastern Coast (Chittagong Division)',
    division: 'Chittagong',
    category: 'beaches',
    coordinates: {
      lat: 21.4272,
      lng: 91.9701,
      mapX: 84,
      mapY: 86,
    },
    shortDescription: 'The longest unbroken natural sea beach on the planet (120 km), backed by lush coastal hills, Buddhist pagodas, and the dramatic 80 km Marine Drive.',
    fullDescription: 'Stretching continuously from the mouth of the Bakkhali River down to the edge of Teknaf, Cox’s Bazar offers 120 kilometers of golden sand meeting the warm waves of the Bay of Bengal. Beyond the energetic main town, the 80-kilometer Marine Drive hugs the coastline with ocean breakers on one side and green rainforest-clad mountains on the other.',
    whyVisit: [
      'Walk along the world’s longest unbroken natural sandy sea beach',
      'Drive the iconic 80 km Marine Drive—one of South Asia’s most scenic coastal routes',
      'Surfing gentle warm swells at Laboni and Inani beach breaks',
      'Discover ancient Rakhine Buddhist temples and traditional cloth markets',
      'Spectacular sunset seafood dining overlooking crashing Bay of Bengal waves'
    ],
    mainAttractions: [
      {
        title: 'Inani Beach & Coral Rocks',
        description: 'Famous for its unique clusters of sharp black coral boulders, calm surf, and scenic hill backdrop.'
      },
      {
        title: 'Marine Drive Road',
        description: 'An unbroken ribbon of asphalt running directly between the Bay of Bengal surf and verdant mountain ranges.'
      },
      {
        title: 'Himchari National Park & Waterfalls',
        description: 'Coastal rainforest cliffs with hiking trails, scenic panoramic viewpoints, and seasonal waterfalls.'
      },
      {
        title: 'Ramu Buddhist Temples',
        description: 'A serene town 15 km inland housing historic Buddhist monasteries, including the 100-foot bronze reclining Buddha at Vimukti Bibekananda.'
      }
    ],
    bestTimeToVisit: 'October to April (cool breezes, gentle surf, and minimal rain)',
    recommendedDuration: '3 to 4 days',
    activities: [
      'Open-air Jeep cruising along the Marine Drive',
      'Surfing lessons with local surf clubs in Laboni Beach',
      'Sunset walks on tranquil secluded sands of Inani Beach',
      'Exploring Ramu’s centuries-old Buddhist monasteries',
      'Dining on grilled seafood at oceanfront cafes'
    ],
    seasonalAdvice: 'Winter (November–February) is dry and festive. Monsoon brings thrilling dramatic stormy seas and fewer crowds, perfect for dramatic ocean photography.',
    howToGetThere: {
      byAir: 'Multiple daily direct flights from Dhaka to Cox’s Bazar Airport (CXB) (approx. 50 mins).',
      byRoad: 'Luxury sleeper and VIP buses from Dhaka (8–10 hours).',
      byTrain: 'The newly launched high-speed Cox’s Bazar Express and Parjotok Express trains from Dhaka (approx. 8 hours).'
    },
    localFoods: [
      'Grilled Rupchanda (Silver Pomfret) with Bengali spice rubs',
      'Rakhine-style steamed sticky rice and fish curries',
      'Giant king prawn malaikari',
      'Local fresh coconut water'
    ],
    safetyResponsibleTips: [
      'Observe beach safety flag indicators before swimming; undertow currents can be strong.',
      'Wear sturdy water sandals when walking near coral rocks at Inani Beach.',
      'Support local community surf academies and licensed guides.'
    ],
    relatedDestinations: ['saint-martins-island', 'sajek-valley', 'kuakata'],
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    imageCaption: 'Golden sands and breaking surf along the endless coastline of Cox’s Bazar.',
    featured: true
  },
  {
    id: 'paharpur',
    slug: 'paharpur',
    name: 'Somapura Mahavihara at Paharpur',
    bengaliName: 'পাহাড়পুর বৌদ্ধ বিহার',
    region: 'North Bengal (Naogaon, Rajshahi Division)',
    division: 'Rajshahi',
    category: 'heritage',
    coordinates: {
      lat: 25.0319,
      lng: 88.9769,
      mapX: 38,
      mapY: 26,
    },
    shortDescription: 'A monumental 8th-century UNESCO World Heritage Buddhist monastic complex—the largest monastery south of the Himalayas—which influenced pagoda architecture across Asia.',
    fullDescription: 'Built by the second Pala Emperor Dharmapala in the late 8th century, Somapura Mahavihara was an intellectual epicenter of the ancient Buddhist world. Renowned Tibetan scholar Atisa Dipankara lived and taught here. The grand central cruciform shrine rises dramatically from a vast quadrangle of 177 monastic cells, adorned with hundreds of exquisite terracotta relief plaques.',
    whyVisit: [
      'UNESCO World Heritage Site and the largest Buddhist monastery in South Asia',
      'Iconic cruciform temple architecture that inspired Angkor Wat and Bagan temples',
      'Over 2,000 preserved terracotta plaques depicting classical Bengali everyday life, flora, and folklore',
      'Rich on-site archaeological museum displaying ancient stone sculptures and coins'
    ],
    mainAttractions: [
      {
        title: 'Central Cruciform Shrine',
        description: 'A soaring terraced monument with circumambulatory pathways rising 70 feet above the manicured green lawns.'
      },
      {
        title: 'Monastic Cells Quadrangle',
        description: '177 individual monk residential quarters forming a massive defensive perimeter around the central temple.'
      },
      {
        title: 'Archaeological Museum',
        description: 'Exhibits rare basalt sculptures of Avalokiteshvara, Tara, terracotta plaques, and antique copper plate inscriptions.'
      }
    ],
    bestTimeToVisit: 'November to February (pleasant dry winter weather)',
    recommendedDuration: '1 to 2 days',
    activities: [
      'Exploring the ancient brick monastery corridors',
      'Studying 8th-century terracotta art depicting animals, warriors, and dancers',
      'Photography of the central sanctum during early morning golden hour',
      'Visiting the nearby Mahasthangarh citadel ruins in Bogura'
    ],
    seasonalAdvice: 'Winter months provide crisp sunny weather ideal for exploring the outdoor archaeological park. Summer can be hot in the northern plains.',
    howToGetThere: {
      byAir: 'Fly from Dhaka to Rajshahi or Saidpur Airport, followed by a 2.5-hour drive.',
      byRoad: 'AC bus from Dhaka to Bogura (4.5 hours), then a local taxi to Paharpur (1.5 hours).',
      byTrain: 'Intercity train from Dhaka to Joypurhat Station, then 15 minutes by auto-rickshaw.'
    },
    localFoods: [
      'Bogura Doi (famous caramelized sweet clay-pot yogurt)',
      'North Bengal Kalai ruti (black gram flatbread with hot duck curry and chili paste)',
      'Traditional sweets of Joypurhat'
    ],
    safetyResponsibleTips: [
      'Do not climb or walk upon fragile terracotta relief plaques.',
      'Carry sun protection and plenty of drinking water while exploring the vast open complex.'
    ],
    relatedDestinations: ['bagerhat', 'old-dhaka', 'sonargaon'],
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    imageCaption: 'The majestic 8th-century Buddhist cruciform shrine of Somapura Mahavihara at Paharpur.',
    featured: false
  },
  {
    id: 'bagerhat',
    slug: 'bagerhat',
    name: 'Historic Mosque City of Bagerhat',
    bengaliName: 'বাগেরহাট ষাট গম্বুজ মসজিদ',
    region: 'Southwest (Khulna Division)',
    division: 'Khulna',
    category: 'heritage',
    coordinates: {
      lat: 22.6738,
      lng: 89.7423,
      mapX: 42,
      mapY: 74,
    },
    shortDescription: 'A UNESCO World Heritage city founded in the 15th century by the saint-general Khan Jahan Ali, crowned by the majestic Sixty Dome Mosque (Shat Gombuj Masjid).',
    fullDescription: 'Known in antiquity as Khalifatabad, the Historic Mosque City of Bagerhat is an extraordinary ensemble of 15th-century brick architecture blending Bengal terracotta craft with Imperial Sultanate engineering. The Sixty Dome Mosque features 77 low-profile curved domes supported by slender stone columns, built without mortar and surviving over 600 years amid the delta wetlands.',
    whyVisit: [
      'UNESCO World Heritage Site with the largest Sultanate-era brick mosque in Bangladesh',
      'Intricate terracotta mihrabs and medieval water reservoir engineering',
      'The legendary Khan Jahan Ali Shrine and sacred freshwater marsh crocodile pond',
      'Atmospheric rural lanes winding between ancient single-dome brick mosques'
    ],
    mainAttractions: [
      {
        title: 'Sixty Dome Mosque (Shat Gombuj Masjid)',
        description: 'Built between 1442 and 1459, featuring 77 domes, 60 stone pillars, thick tapered walls, and eleven arched doorways.'
      },
      {
        title: 'Mausoleum of Khan Jahan Ali',
        description: 'A serene single-domed tomb complex flanked by a massive medieval dighi (reservoir) inhabited by sacred freshwater marsh crocodiles.'
      },
      {
        title: 'Nine Dome Mosque (Nay Gombuj Masjid)',
        description: 'A finely balanced square mosque with nine domes and floral terracotta carvings near the Thakurdighi tank.'
      }
    ],
    bestTimeToVisit: 'October to March (cool and dry)',
    recommendedDuration: '1 to 2 days',
    activities: [
      'Architectural photography of Sultanate brick domes and stone arches',
      'Visiting the Khan Jahan Ali Dighi and observing the resident crocodiles',
      'Touring the on-site Bagerhat Museum with ancient pottery and Sultanate coins',
      'Pairing a visit to Bagerhat with an onward cruise into the Sundarbans'
    ],
    seasonalAdvice: 'Comfortable year-round, but November to February offers crisp blue skies and comfortable walking conditions.',
    howToGetThere: {
      byAir: 'Fly from Dhaka to Jashore, then 1.5-hour road transit to Bagerhat.',
      byRoad: 'Drive from Dhaka across the Padma Bridge (approx. 3.5 hours on express highway).',
      byTrain: 'Train to Khulna, then 45-minute drive east to Bagerhat.'
    },
    localFoods: [
      'Khulna Chui Jhal beef and mutton curry',
      'Fresh river fish bhorta and prawn curries',
      'Traditional date palm molasses sweets'
    ],
    safetyResponsibleTips: [
      'Remove footwear and dress modestly when entering active mosque sanctuaries.',
      'Refrain from touching historical mortar and terracotta carvings.'
    ],
    relatedDestinations: ['sundarbans', 'kuakata', 'old-dhaka'],
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    imageCaption: 'The iconic 15th-century Sixty Dome Mosque in Bagerhat, a masterpiece of Sultanate brick architecture.',
    featured: false
  },
  {
    id: 'ratargul-swamp',
    slug: 'ratargul-swamp',
    name: 'Ratargul Freshwater Swamp Forest',
    bengaliName: 'রাতারগুল সোয়াম্প ফরেস্ট',
    region: 'Sylhet Division (Gowainghat)',
    division: 'Sylhet',
    category: 'nature',
    coordinates: {
      lat: 25.0006,
      lng: 91.9317,
      mapX: 72,
      mapY: 34,
    },
    shortDescription: 'The "Amazon of Bangladesh"—one of South Asia’s few freshwater swamp forests, where canopies of millettia trees stand submerged in shimmering river waters.',
    fullDescription: 'Located 26 kilometers north of Sylhet, Ratargul is an evergreen freshwater wetland forest nourished by mountain runoff from India’s Meghalaya hills. During the monsoon, the water rises 20 to 30 feet, submerging the trunks of Koroch and Murta plants. Gliding through the flooded canopy aboard a silent wooden dinghy feels like entering an enchanted, sun-dappled water jungle.',
    whyVisit: [
      'Glide through flooded tree canopies on silent wooden paddle dinghies',
      'One of the very few freshwater swamp forests in all of South Asia',
      'Rich habitat for kingfishers, herons, water snakes, and monitor lizards',
      'Observation tower offering aerial views over the flooded green forest canopy'
    ],
    mainAttractions: [
      {
        title: 'Flooded Forest Waterway Trail',
        description: 'Winding boat channels where branches form living green arches overhead.'
      },
      {
        title: 'Forest Watchtower',
        description: 'A 5-story viewing tower providing panoramic views over the emerald flooded forest and distant blue hills.'
      }
    ],
    bestTimeToVisit: 'July to October (when the swamp is fully flooded and green)',
    recommendedDuration: 'Half day to full day',
    activities: [
      'Silent wooden paddle boat safari through submerged canopies',
      'Birdwatching for white-breasted kingfishers and pond herons',
      'Canopy photography from the observation tower'
    ],
    seasonalAdvice: 'Monsoon (July–October) is the only time to experience the flooded forest. In dry winter months, the waters recede and the area turns into dry woodland.',
    howToGetThere: {
      byAir: 'Fly from Dhaka to Sylhet Osmani Airport, then 1-hour drive by CNG or car to Motorghat boat dock.',
      byRoad: 'Drive from Sylhet city center (approx. 26 km, 1 hour).',
      byTrain: 'Train from Dhaka to Sylhet, then local transport.'
    },
    localFoods: [
      'Sylheti Akhni Polao',
      'Fresh river fish curry with Shatkora citrus',
      'Traditional sweet pan'
    ],
    safetyResponsibleTips: [
      'Always wear a life jacket on small wooden dinghies.',
      'Do not pluck leaves, disturb bird nests, or discard bottles into the water.'
    ],
    relatedDestinations: ['sreemangal', 'tanguar-haor', 'sajek-valley'],
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    imageCaption: 'Silent wooden dinghy drifting through the flooded tree canopy of Ratargul Swamp Forest.',
    featured: false
  },
  {
    id: 'kuakata',
    slug: 'kuakata',
    name: 'Kuakata "Daughter of the Sea"',
    bengaliName: 'কুয়াকাটা',
    region: 'South Coast (Patuakhali, Barisal Division)',
    division: 'Barisal',
    category: 'beaches',
    coordinates: {
      lat: 21.8200,
      lng: 90.1189,
      mapX: 49,
      mapY: 89,
    },
    shortDescription: 'A rare coastal beach in South Asia where visitors can watch both the sunrise and sunset over the Bay of Bengal from the exact same shoreline.',
    fullDescription: 'Located in southernmost Patuakhali, Kuakata’s wide 18-kilometer sandy beach offers panoramic ocean horizons unblocked by headlands. The area has a rich history tied to early Rakhine settlers who dug freshwater wells (kuas) along the coast. It is also the gateway to Fatrar Char mangrove forest, an eastern extension of the Sundarbans.',
    whyVisit: [
      'Unbroken views of both sunrise and sunset from the same beach location',
      'Explore the ancient Rakhine Buddhist village and the historic freshwater well',
      'Boat excursion to the untouched Fatrar Char mangrove forest',
      'Calm, wide expanse of firm silver-gray sand ideal for beach cycling'
    ],
    mainAttractions: [
      {
        title: 'Sunset and Sunrise Point',
        description: 'Expansive ocean point where the sun rises from and sinks back into the Bay of Bengal waters.'
      },
      {
        title: 'Fatrar Char Mangrove Reserve',
        description: 'An untouched mangrove wilderness with tidal creeks and deer habitat.'
      },
      {
        title: 'Keranipara Rakhine Village',
        description: 'Centuries-old Rakhine community with wooden stilt houses, handloom workshops, and Buddhist pagoda.'
      }
    ],
    bestTimeToVisit: 'November to March',
    recommendedDuration: '2 days',
    activities: [
      'Sunrise and sunset coastal walks',
      'Renting beach motorbikes or bicycles along the firm shoreline',
      'Boat excursion to Fatrar Char mangrove forest',
      'Visiting the Rakhine handloom weaving sheds'
    ],
    seasonalAdvice: 'Winter offers clear skies and cool sea breezes. Summer and monsoon bring dramatic ocean swells.',
    howToGetThere: {
      byAir: 'Fly from Dhaka to Barishal Airport, then drive 3 hours south to Kuakata.',
      byRoad: 'Drive from Dhaka via the Padma Bridge and Payra Bridge (approx. 5–6 hours on smooth expressways).',
      byWater: 'Take an overnight luxury passenger launch from Dhaka Sadarghat to Patuakhali, then drive 1 hour to Kuakata.'
    },
    localFoods: [
      'Freshly fried Rupchanda and Ilish at beachside stalls',
      'Barishali coconut milk prawn curry',
      'Rakhine sticky rice treats'
    ],
    safetyResponsibleTips: [
      'Respect morning prayer ceremonies at the Rakhine Buddhist temples.',
      'Check tide tables before driving along the remote eastern beach areas.'
    ],
    relatedDestinations: ['sundarbans', 'coxs-bazar', 'barishal-backwaters'],
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    imageCaption: 'Golden sunrise over the expansive Bay of Bengal waters at Kuakata beach.',
    featured: false
  },
  {
    id: 'kaptai-lake',
    slug: 'kaptai-lake',
    name: 'Kaptai Lake & Indigenous Rangamati',
    bengaliName: 'কাপ্তাই হ্রদ',
    region: 'Chittagong Hill Tracts (Rangamati)',
    division: 'Chittagong',
    category: 'hills',
    coordinates: {
      lat: 22.4960,
      lng: 92.2278,
      mapX: 83,
      mapY: 67,
    },
    shortDescription: 'The largest man-made lake in South Asia, ringed by dramatic jungle mountains, indigenous Chakma and Marma villages, and cascading waterfalls.',
    fullDescription: 'Created in the 1960s, Kaptai Lake spans over 700 square kilometers of turquoise and jade waters snaking through the hills of Rangamati. Wooden motorboats carry travelers past secluded islands, floating fish farms, and Buddhist monasteries perched on forested hilltops. Rangamati is the cultural capital of the indigenous Chakma people, renowned for colorful festivals and handloom traditions.',
    whyVisit: [
      'Cruise across vast turquoise lake waters flanked by rainforest-clad mountains',
      'Experience the rich cultural heritage and festivals of the Chakma and Marma people',
      'Boat to Shuvolong Waterfall cascading down steep sheer rock faces',
      'Walk across the iconic Rangamati Hanging Bridge and visit Rajban Vihara'
    ],
    mainAttractions: [
      {
        title: 'Shuvolong Waterfall',
        description: 'A spectacular natural waterfall tumbling down jagged green rock faces directly into Kaptai Lake.'
      },
      {
        title: 'Rajban Vihara Monastery',
        description: 'One of the most revered Theravada Buddhist monasteries in Bangladesh, set within quiet pine groves.'
      },
      {
        title: 'Tribal Cultural Museum',
        description: 'Exhibits traditional costumes, weapons, musical instruments, and manuscripts of the 11 indigenous hill tribes.'
      }
    ],
    bestTimeToVisit: 'October to March (serene waters, pleasant temperatures)',
    recommendedDuration: '2 days',
    activities: [
      'Private wooden motorboat lake expedition',
      'Visiting indigenous floating markets and weaving centers',
      'Tasting bamboo-steamed lake fish at island restaurants',
      'Walking across the scenic Rangamati suspension bridge'
    ],
    seasonalAdvice: 'Monsoon brings waterfalls to full volume and hills to their richest green. Winter provides glassy calm waters and comfortable hiking weather.',
    howToGetThere: {
      byAir: 'Fly from Dhaka to Chittagong, then 2.5 hours by car to Rangamati.',
      byRoad: 'AC bus from Dhaka or Chittagong directly to Rangamati town.',
      byWater: 'Lake launches connect various remote hill villages.'
    },
    localFoods: [
      'Traditional Chakma bamboo fish (fish steamed inside bamboo with wild herbs)',
      'Spicy mashed dry lake fish with green chilies',
      'Fresh wild hill bananas and sweet pineapples'
    ],
    safetyResponsibleTips: [
      'International travelers should register at the district security checkpoint.',
      'Support indigenous community-run boatmen and women weavers directly.'
    ],
    relatedDestinations: ['sajek-valley', 'coxs-bazar', 'sreemangal'],
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    imageCaption: 'Serene blue waters and lush emerald hills of Kaptai Lake in Rangamati.',
    featured: false
  },
  {
    id: 'sonargaon',
    slug: 'sonargaon',
    name: 'Sonargaon & Panam Ancient City',
    bengaliName: 'সোনারগাঁও ও পানাম নগর',
    region: 'Narayanganj (Dhaka Division)',
    division: 'Dhaka',
    category: 'heritage',
    coordinates: {
      lat: 23.6494,
      lng: 90.6019,
      mapX: 57,
      mapY: 55,
    },
    shortDescription: 'The historic medieval capital of Bengal under Isa Khan, featuring the hauntingly beautiful 19th-century merchant ghost town of Panam Nagar and the Jamdani weaving cradle.',
    fullDescription: 'Just 30 kilometers east of Dhaka, Sonargaon was the flourishing capital of the independent Sultanate of Bengal and the famous ruler Isa Khan in the 16th century. It was the historic terminus of the Grand Trunk Road. Panam Nagar stands today as a hauntingly intact single-street merchant city lined with 52 neoclassical and colonial mansions built by wealthy Hindu cotton and indigo merchants.',
    whyVisit: [
      'Walk down the evocative single street of Panam Nagar, a preserved merchant ghost town',
      'Explore the Folk Art & Craft Museum housed in the grand Boro Sardar Bari palace',
      'Watch master weavers creating UNESCO-recognized Jamdani fine muslin sarees',
      'Just a 1-hour easy day trip from Dhaka city center'
    ],
    mainAttractions: [
      {
        title: 'Panam Nagar Ghost City',
        description: 'A 600-meter paved avenue flanked on both sides by 52 deteriorating yet exquisite colonial mansions with iron verandas and mosaic tiles.'
      },
      {
        title: 'Boro Sardar Bari & Folk Art Museum',
        description: 'A restored 1901 palace containing a comprehensive museum of Bengali terracotta, wooden crafts, and Nakshi Kantha embroidered quilts.'
      },
      {
        title: 'Goaldi Mosque',
        description: 'A jewel of 1519 pre-Mughal Sultanate architecture featuring fine carved brick floral mihrabs.'
      }
    ],
    bestTimeToVisit: 'October to March (dry and pleasant for walking)',
    recommendedDuration: 'Full day trip from Dhaka',
    activities: [
      'Architectural photography along Panam Nagar’s historic street',
      'Visiting traditional Jamdani handloom weaving artisan workshops',
      'Strolling the tranquil palace ponds of the Folk Art Museum',
      'Picnicking by the historic Goaldi Mosque'
    ],
    seasonalAdvice: 'Pleasant year-round; avoid midday sun during the hot summer months of April and May.',
    howToGetThere: {
      byAir: 'Fly to Dhaka Airport.',
      byRoad: '1 to 1.5-hour drive from Dhaka via the Dhaka-Chittagong Highway.',
      byTrain: 'Take road transport or local bus directly from Gulistan in Dhaka.'
    },
    localFoods: [
      'Traditional sweet curd and roshogolla',
      'Spicy mustard river fish curry',
      'Narayanganj sweet puff pastries'
    ],
    safetyResponsibleTips: [
      'Do not lean against or enter unstable dilapidated building sections in Panam Nagar.',
      'Purchase genuine Jamdani textiles directly from authentic weaver cooperatives.'
    ],
    relatedDestinations: ['old-dhaka', 'paharpur', 'bagerhat'],
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    imageCaption: 'Historic 19th-century colonial merchant mansions along the single street of Panam Nagar.',
    featured: false
  },
  {
    id: 'barishal-backwaters',
    slug: 'barishal-backwaters',
    name: 'Barishal Floating Markets & Delta Backwaters',
    bengaliName: 'বরিশাল ভাসমান পেয়ারা বাজার',
    region: 'South Central Delta (Barishal Division)',
    division: 'Barisal',
    category: 'rivers',
    coordinates: {
      lat: 22.7010,
      lng: 90.3535,
      mapX: 47,
      mapY: 76,
    },
    shortDescription: 'The "Venice of Bengal"—an intricate labyrinth of tidal river canals, floating guava and rice markets, and serene coconut-shaded delta villages.',
    fullDescription: 'Located in the fertile heart of the river delta, the backwaters of Barishal and Jhalakathi are crisscrossed by hundreds of interconnecting rivers and canals. Every monsoon morning, hundreds of farmers paddle wooden canoes laden with crisp green guavas, coconuts, and floating rice to assemble at floating trading hubs like Kuriana and Bhimruli.',
    whyVisit: [
      'Experience the 200-year-old floating guava and produce markets at Bhimruli',
      'Cruise narrow jungle-fringed canals aboard traditional wooden paddle boats',
      'Experience overnight transit on the legendary heritage Rocket Paddle Steamer',
      'Immerse in tranquil village delta life untouched by modern highways'
    ],
    mainAttractions: [
      {
        title: 'Bhimruli Floating Guava Market',
        description: 'The liveliest floating market where wooden canoes gather at a canal intersection, surrounded by lush guava orchards.'
      },
      {
        title: 'Kuriana Floating Market & Orchards',
        description: 'Vast riverside guava and hog-plum orchards where visitors can walk through lush fruit groves.'
      },
      {
        title: 'Heritage Rocket Steamer Journey',
        description: 'Century-old British colonial paddle steamers (PS Ostrich, PS Mahsud) that still ply the rivers from Dhaka to Barishal.'
      }
    ],
    bestTimeToVisit: 'July to September for floating guava markets; November to February for pleasant weather and rice harvest',
    recommendedDuration: '2 days',
    activities: [
      'Early morning canal cruising by wooden motorized country boat',
      'Photography of boat-to-boat barter and trading at Bhimruli',
      'Overnight river cruise on a traditional paddle steamer',
      'Walking through tranquil riverside delta villages'
    ],
    seasonalAdvice: 'The floating guava markets operate only during the monsoon season (July to September). Winter offers dry, misty mornings and pleasant canal boat rides.',
    howToGetThere: {
      byAir: 'Fly from Dhaka to Barishal Airport (30 mins).',
      byRoad: 'Drive from Dhaka via the Padma Bridge (approx. 3.5 to 4 hours on smooth expressway).',
      byWater: 'Board a modern multi-deck luxury passenger launch or historic Rocket Steamer from Dhaka Sadarghat for an overnight cruise.'
    },
    localFoods: [
      'Fresh crisp Barishal guavas and hog plums',
      'Traditional Ilish curry cooked with coconut milk and mustard',
      'Steamed river crab curry and fresh river shrimp',
      'Local sandesh and sweet chhana'
    ],
    safetyResponsibleTips: [
      'Wear a life jacket on small wooden canal boats.',
      'Support local boatmen by negotiating fair rates and buying fresh fruit directly from farmers.'
    ],
    relatedDestinations: ['sundarbans', 'kuakata', 'old-dhaka'],
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    imageCaption: 'Wooden country boats trading produce at the vibrant floating canal markets of Barishal.',
    featured: false
  }
];
