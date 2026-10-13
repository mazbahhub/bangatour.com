import { Itinerary } from '../types';

export const itineraries: Itinerary[] = [
  {
    id: '3-days-express',
    slug: '3-days-express',
    title: 'The Delta & Tea Country Express',
    durationDays: 3,
    pace: 'Active',
    targetAudience: 'First-time visitors with limited time, stopover travelers, or business visitors wanting an authentic cultural snapshot.',
    summary: 'Experience the electric contrasts of Bangladesh: from the 400-year-old Mughal street life of Old Dhaka to the emerald green serenity of Sreemangal’s rainforests and colonial tea estates.',
    route: ['Dhaka', 'Old Mughal Quarter', 'Sreemangal Tea Estates', 'Lawachara Rainforest'],
    highlights: [
      'Architectural photography at Lalbagh Fort and Ahsan Manzil Pink Palace',
      'Cycle-rickshaw food tour tasting authentic Old Dhaka Kacchi Biryani',
      'Scenic morning express train ride through rural Bengal paddy fields',
      'Primate tracking in Lawachara National Park and sipping 7-color tea'
    ],
    transportOverview: 'Domestic transport utilizes a mix of private chauffeured AC vehicles in Dhaka and the scenic Parabat Express intercity train to Sylhet division.',
    budgetEstimateUSD: {
      backpacker: 120,
      comfort: 280,
      luxury: 550
    },
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    days: [
      {
        day: 1,
        title: 'Mughal Heritage & Labyrinths of Old Dhaka',
        location: 'Dhaka',
        highlights: ['Lalbagh Fort', 'Ahsan Manzil', 'Shankharia Bazar', 'Buriganga Riverboat ride'],
        activities: [
          'Morning check-in and heritage walking tour through Lalbagh Fort and Tomb of Pari Bibi',
          'Explore Ahsan Manzil (The Pink Palace) overlooking the active Buriganga riverfront',
          'Cycle-rickshaw ride through Shankharia Bazar (Conch Shell Lane) and Star Mosque',
          'Evening dinner tasting authentic mutton Kacchi Biryani and Bakarkhani'
        ],
        travelTips: 'Start early around 8:30 AM to beat traffic; keep comfortable walking shoes and modest attire for visiting historic places of worship.',
        recommendedStay: 'Heritage guest house in Old Dhaka or boutique hotel in Banani/Gulshan'
      },
      {
        day: 2,
        title: 'Train to the Emerald Tea Country of Sreemangal',
        location: 'Sreemangal (Sylhet)',
        highlights: ['Scenic Train Ride', 'Tea Garden Sunset', 'Nilkantha 7-Color Tea Cabin'],
        activities: [
          'Board the 6:40 AM Parabat Express train from Kamalapur Station to Sreemangal',
          'Arrive by 11:00 AM; check in to an eco-cottage tucked amidst lush tea gardens',
          'Afternoon bicycle ride along quiet private tracks through Finlay Tea Estates',
          'Taste the famous multi-layered 7-Color Tea at Nilkantha and enjoy dinner with Sylheti citrus Shatkora beef'
        ],
        travelTips: 'Book AC Snigdha or Shovon Chair train tickets in advance via Shohoz or a licensed local travel concierge.',
        recommendedStay: 'Eco-resort or tea estate bungalow in Sreemangal'
      },
      {
        day: 3,
        title: 'Primate Trek in Lawachara Rainforest & Return',
        location: 'Sreemangal & Dhaka',
        highlights: ['Western Hoolock Gibbons', 'Monipuri Handloom Village', 'Return to Capital'],
        activities: [
          'Early morning 6:30 AM guided jungle trek in Lawachara National Park to spot Western Hoolock Gibbons',
          'Visit a traditional Khasia betel-leaf village and Monipuri handloom weaving shed',
          'Afternoon train or private car return to Dhaka in time for evening flights or connections'
        ],
        travelTips: 'Bring insect repellent and silent walking shoes for the morning rainforest trek.',
        recommendedStay: 'Dhaka Airport transit hotel or departure flight'
      }
    ]
  },
  {
    id: '5-days-highlands-clouds',
    slug: '5-days-highlands-clouds',
    title: 'Tea Highlands & Cloud Valleys',
    durationDays: 5,
    pace: 'Balanced',
    targetAudience: 'Photographers, nature lovers, couples, and travelers seeking mountain vistas and serene forest retreats.',
    summary: 'Ascend from the lush tea gardens of Sreemangal into the cloud-draped peaks of Sajek Valley and the deep blue waters of Kaptai Lake in the Chittagong Hill Tracts.',
    route: ['Dhaka', 'Sreemangal Rainforest', 'Khagrachhari', 'Sajek Valley', 'Kaptai Lake'],
    highlights: [
      'Waking up above an ocean of rolling morning clouds from your cliffside balcony in Sajek',
      'The thrilling open-top 4x4 Chander Gari mountain safari through the hill tracts',
      'Hoolock gibbon tracking in Lawachara and birdwatching at Baikka Beel',
      'Cruising peaceful Kaptai Lake waters surrounded by rainforest mountains'
    ],
    transportOverview: 'Combines scenic intercity trains with high-clearance 4WD vehicles (Chander Gari) and lake cruisers.',
    budgetEstimateUSD: {
      backpacker: 220,
      comfort: 490,
      luxury: 950
    },
    image: '/src/assets/images/sajek_valley_clouds_1791862156009.jpg',
    days: [
      {
        day: 1,
        title: 'Dhaka to Sreemangal Tea Country',
        location: 'Sreemangal',
        highlights: ['Express Train', 'Tea garden sunset', 'Local cuisine'],
        activities: [
          'Board morning intercity train to Sreemangal',
          'Afternoon walk through Zareen Tea Estate and birdwatching at Baikka Beel wetland tower',
          'Evening dinner with authentic duck curry and local tea tasting'
        ],
        travelTips: 'Sit on the left side of the train for the best river and rural paddy field views.',
        recommendedStay: 'Tea plantation resort'
      },
      {
        day: 2,
        title: 'Rainforest Gibbons & Monipuri Weavers',
        location: 'Sreemangal',
        highlights: ['Lawachara Primate Trek', 'Monipuri Handlooms', 'Khasia Betel Village'],
        activities: [
          'Guided primate tracking in Lawachara National Park',
          'Explore Monipuri artisanal village; observe traditional back-strap loom weaving',
          'Evening relaxation and packing for the hill tracts journey'
        ],
        travelTips: 'Support local weavers by buying authentic handwoven silk stoles directly from artisans.',
        recommendedStay: 'Eco-cottage in Sreemangal'
      },
      {
        day: 3,
        title: 'Ascent to Sajek Valley: The Kingdom of Clouds',
        location: 'Sajek Valley',
        highlights: ['Chander Gari Safari', 'Konglak Peak Sunset', 'Stargazing'],
        activities: [
          'Morning private transfer to Khagrachhari; board the noon military-escorted 4x4 Chander Gari',
          'Thrilling mountain ascent through mist-covered peaks to Ruilui Para, Sajek Valley',
          'Sunset trek to Konglak Peak (highest point in Sajek) overlooking the Mizoram border',
          'Night-time bonfire and indigenous bamboo-roasted chicken dinner under starry skies'
        ],
        travelTips: 'Carry original passport for foreign national security checkpoints at Dighinala and Ruilui.',
        recommendedStay: 'Cliffside wooden eco-resort overlooking the valley'
      },
      {
        day: 4,
        title: 'Sunrise Above the Clouds & Journey to Rangamati',
        location: 'Sajek & Rangamati',
        highlights: ['Sunrise Sea of Clouds', 'Kaptai Lake cruise', 'Shuvolong Waterfall'],
        activities: [
          'Wake up at 5:30 AM to watch the sea of fluffy white clouds filling the valleys below',
          'Morning descent by jeep to Khagrachhari, then drive to picturesque Rangamati',
          'Afternoon private motorboat cruise across emerald Kaptai Lake to Shuvolong Waterfall'
        ],
        travelTips: 'Have your camera charged; the dawn cloud blanket changes dynamically by the minute.',
        recommendedStay: 'Lakefront hotel in Rangamati'
      },
      {
        day: 5,
        title: 'Indigenous Culture & Return to Dhaka',
        location: 'Rangamati to Dhaka',
        highlights: ['Rajban Vihara', 'Tribal Cultural Museum', 'Return Transit'],
        activities: [
          'Morning visit to Rajban Vihara Buddhist Monastery and Chakma Handloom stalls',
          'Transfer to Chattogram Airport (Shah Amanat) for a 45-minute flight back to Dhaka'
        ],
        travelTips: 'Direct flights from Chittagong to Dhaka depart frequently throughout the afternoon.',
        recommendedStay: 'Dhaka City'
      }
    ]
  },
  {
    id: '7-days-classic-bengal',
    slug: '7-days-classic-bengal',
    title: 'Classic Bengal: Wildlife, Rivers & UNESCO Heritage',
    durationDays: 7,
    pace: 'Balanced',
    targetAudience: 'Wildlife enthusiasts, cultural travelers, history lovers, and bucket-list explorers.',
    summary: 'The quintessential journey across Bangladesh. Cruise the uncharted mangrove labyrinths of the Sundarbans aboard a liveaboard expedition vessel, visit the UNESCO 60-Dome Mosque of Bagerhat, explore the floating backwaters of Barishal, and delve into Old Dhaka.',
    route: ['Dhaka', 'Padma Bridge', 'Bagerhat', 'Sundarbans Mangrove Cruise', 'Barishal Backwaters'],
    highlights: [
      'Three-day liveaboard wildlife cruise deep inside the Sundarbans UNESCO Tiger Reserve',
      'Silent early-morning creek explorations in wooden dinghies tracking deer and otters',
      'The 15th-century Sixty Dome Mosque in Bagerhat—masterpiece of Sultanate architecture',
      'Cruising through the vibrant morning floating guava and rice markets of Barishal',
      'Crossing the mighty Padma River via the monumental Padma Bridge'
    ],
    transportOverview: 'Luxury AC road transit over the Padma Bridge, dedicated private river expedition vessel in the Sundarbans, and scenic delta ferry connections.',
    budgetEstimateUSD: {
      backpacker: 350,
      comfort: 780,
      luxury: 1450
    },
    image: '/src/assets/images/sundarbans_mangrove_wildlife_1791862156168.jpg',
    days: [
      {
        day: 1,
        title: 'Arrival & Mughal Splendors of Old Dhaka',
        location: 'Dhaka',
        highlights: ['Lalbagh Fort', 'Ahsan Manzil', 'Kacchi Biryani'],
        activities: [
          'Morning arrival and transfer to hotel; lunch tasting Old Dhaka Biryani',
          'Afternoon heritage exploration of Lalbagh Fort and Shankharia Bazar',
          'Evening briefing with your naturalist guide for the upcoming Sundarbans expedition'
        ],
        travelTips: 'Drink only bottled water and try traditional chilled Beauty Lassi.',
        recommendedStay: 'Central Dhaka hotel'
      },
      {
        day: 2,
        title: 'Padma Bridge Crossing to UNESCO Bagerhat',
        location: 'Dhaka to Mongla',
        highlights: ['Padma Bridge Expressway', 'Sixty Dome Mosque', 'Embarkation on Cruise'],
        activities: [
          'Drive south across the iconic 6.15-kilometer Padma Bridge engineering marvel',
          'Arrive in Bagerhat: explore the UNESCO World Heritage Sixty Dome Mosque and Khan Jahan Ali Dighi',
          'Proceed to Mongla Port dockyards; embark upon your private wooden river expedition vessel',
          'Cruise into the northern fringes of the Sundarbans as the sun sets over the Passur River'
        ],
        travelTips: 'All forest entry permits are arranged at Mongla; keep passport handy.',
        recommendedStay: 'Liveaboard river cruiser cabin'
      },
      {
        day: 3,
        title: 'Into the Deep Mangrove: Kotka Wildlife Sanctuary',
        location: 'Sundarbans Tiger Reserve',
        highlights: ['Kotka Watchtower', 'Tiger Trail Mudflats', 'Spotted Deer herds'],
        activities: [
          'Silent dawn creek crawl on an unmotorized wooden dinghy to listen for bird calls and wildlife',
          'Guided trek through Kotka wildlife sanctuary with an armed forest ranger',
          'Ascend the Kotka watchtower overlooking open grasslands frequented by spotted deer and wild boar',
          'Walk along Jamtola beach facing the vast Bay of Bengal'
        ],
        travelTips: 'Wear neutral earth-toned clothing (khaki/green); avoid perfumes or bright colors.',
        recommendedStay: 'Liveaboard cruiser anchored in secluded river creek'
      },
      {
        day: 4,
        title: 'Kochikhali River Estuaries & Silent Creek Crawls',
        location: 'Sundarbans',
        highlights: ['Kochikhali Sanctuary', 'River Dolphin spotting', 'Mangrove Forest Ecology'],
        activities: [
          'Early morning canoe cruise through Kochikhali narrow waterways',
          'Observe saltwater crocodiles basking on muddy river banks at low tide',
          'Learn about unique mangrove adaptations: pneumatophores, stilt roots, and viviparous seedlings',
          'Evening barbecue on the ship’s open deck under millions of unpolluted stars'
        ],
        travelTips: 'Keep binoculars ready for rare birds like the Masked Finfoot and White-bellied Sea Eagle.',
        recommendedStay: 'Liveaboard cruiser'
      },
      {
        day: 5,
        title: 'Karamjal Breeding Sanctuary & Return to Mainland',
        location: 'Sundarbans to Khulna',
        highlights: ['Karamjal Boardwalk', 'Batagur baska terrapins', 'Khulna Chui Jhal Dinner'],
        activities: [
          'Visit Karamjal Eco-Tourism Center to see the endangered river terrapin breeding program',
          'Walk the elevated wooden canopy trail above the mangrove forest floor',
          'Disembark at Mongla in the afternoon and transfer to Khulna',
          'Taste the famous local Chui Jhal spicy beef or mutton for dinner'
        ],
        travelTips: 'Buy raw Sundarbans wild honey certified by local cooperatives in Mongla.',
        recommendedStay: 'City hotel in Khulna'
      },
      {
        day: 6,
        title: 'The Venice of Bengal: Barishal Floating Backwaters',
        location: 'Barishal',
        highlights: ['Floating Guava Markets', 'Canal Paddle Boat Tour', 'Rocket Steamer Heritage'],
        activities: [
          'Morning drive to Barishal district through lush rural delta countryside',
          'Board a wooden canoe to navigate the historic floating markets of Bhimruli and Kuriana',
          'Observe boat-to-boat trading of fruits, vegetables, and household goods along jungle canals',
          'Visit traditional pottery and river blacksmith hamlets'
        ],
        travelTips: 'The best light for photographing floating markets is between 7:30 AM and 9:30 AM.',
        recommendedStay: 'Riverfront hotel in Barishal'
      },
      {
        day: 7,
        title: 'Return to Dhaka via Ancient Panam City',
        location: 'Barishal to Dhaka',
        highlights: ['Panam Nagar Merchant Ghost Town', 'Jamdani Muslin Weaving', 'Farewell Banquet'],
        activities: [
          'Drive back toward Dhaka; stop at Sonargaon to explore Panam Nagar 19th-century merchant ghost city',
          'Visit a master Jamdani weaver atelier to witness UNESCO-recognized muslin weaving',
          'Evening farewell dinner in Dhaka featuring authentic Shorshe Ilish (Mustard Hilsa)'
        ],
        travelTips: 'Pack fragile Jamdani scarves in your carry-on luggage.',
        recommendedStay: 'Dhaka Departure'
      }
    ]
  },
  {
    id: '10-days-grand-odyssey',
    slug: '10-days-grand-odyssey',
    title: 'The Grand Bangladesh Odyssey',
    durationDays: 10,
    pace: 'Balanced',
    targetAudience: 'Dedicated explorers wanting an all-encompassing, immersive journey across all of Bangladesh’s primary landscapes.',
    summary: 'From ancient archaeological Buddhist universities in the north to the tiger-stalked mangroves in the south, the misty cloud valleys of the east, and the turquoise coral reefs of the Bay of Bengal.',
    route: ['Dhaka', 'Paharpur UNESCO Monastery', 'Sreemangal Tea Country', 'Tanguar Haor Houseboat', 'Sundarbans Tiger Cruise', 'Cox’s Bazar & Marine Drive'],
    highlights: [
      'Stand inside the 8th-century cruciform ruins of Somapura Mahavihara at Paharpur',
      'Sleep on an eco-houseboat in the vast mountain-backed wetland of Tanguar Haor',
      'Walk amidst the colonial tea plantations and gibbon rainforests of Sreemangal',
      'Full 3-day wildlife navigation through the Sundarbans UNESCO Mangrove Reserve',
      'Cruise the dramatic 80 km oceanfront Marine Drive in Cox’s Bazar to Inani Beach'
    ],
    transportOverview: 'Integrated combination of domestic flights, AC expressways, scenic trains, houseboats, and chartered expedition cruisers.',
    budgetEstimateUSD: {
      backpacker: 550,
      comfort: 1250,
      luxury: 2400
    },
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    days: [
      {
        day: 1,
        title: 'Welcome to the Delta: Old Dhaka Discoveries',
        location: 'Dhaka',
        highlights: ['Lalbagh Fort', 'Rickshaw Heritage Run', 'Sadarghat River Port'],
        activities: [
          'Arrival at Dhaka International Airport; transfer to hotel',
          'Afternoon immersive exploration of Lalbagh Fort, Star Mosque, and Ahsan Manzil',
          'Sunset wooden boat ride across the frenetic Buriganga River'
        ],
        travelTips: 'Exchange currency for clean BDT notes at airport booths; credit cards work in major hotels but street markets use cash.',
        recommendedStay: 'Luxury hotel in Dhaka'
      },
      {
        day: 2,
        title: 'Archaeological Splendors: Paharpur & Bogura',
        location: 'Bogura & Paharpur',
        highlights: ['Somapura Mahavihara', 'Terracotta Art', 'Bogura Doi'],
        activities: [
          'Morning departure north across the Jamuna Multi-purpose Bridge to Bogura',
          'Explore UNESCO World Heritage Somapura Mahavihara at Paharpur, South Asia’s largest Buddhist monastery',
          'Study thousands of intact 8th-century terracotta plaques depicting Pala-era everyday life',
          'Taste authentic caramelized Bogura Doi served in traditional red clay pots'
        ],
        travelTips: 'The archaeological museum closes on Sundays; plan your date accordingly.',
        recommendedStay: 'Boutique heritage hotel in Bogura'
      },
      {
        day: 3,
        title: 'Across the Delta to the Tea Hills of Sreemangal',
        location: 'Sreemangal',
        highlights: ['Tea Terraces', 'Bicycle Country Trails', 'Layered Tea'],
        activities: [
          'Travel east to Sreemangal tea country through lush rural countryside',
          'Check in to a tea garden eco-lodge nestled beneath shade trees',
          'Afternoon cycling tour through colonial tea estates and tasting 7-color tea'
        ],
        travelTips: 'Carry a lightweight rain jacket for the northeastern hills.',
        recommendedStay: 'Tea estate bungalow'
      },
      {
        day: 4,
        title: 'Gibbon Rainforest Trek & Tanguar Haor Houseboat',
        location: 'Lawachara & Sunamganj',
        highlights: ['Hoolock Gibbons', 'Sunamganj Houseboat', 'Jadukata River'],
        activities: [
          'Dawn canopy trek in Lawachara National Park to observe the Western Hoolock Gibbon family groups',
          'Drive north to Tahirpur boat ghat; embark upon your private wooden houseboat in Tanguar Haor',
          'Cruise along the pristine Jadukata River with panoramic views of India’s Meghalaya mountains',
          'Stargaze from the open wooden rooftop deck of your floating houseboat'
        ],
        travelTips: 'Ensure your mobile devices are fully charged; houseboats use quiet solar power arrays.',
        recommendedStay: 'Eco-houseboat in Tanguar Haor'
      },
      {
        day: 5,
        title: 'Bird Sanctuary Dawn & Flight to the South Coast',
        location: 'Sunamganj to Cox’s Bazar',
        highlights: ['Haor Sunrise', 'Sylhet to Cox’s Bazar transit', 'Sunset over Bay of Bengal'],
        activities: [
          'Watch the golden sunrise over vast wetland beels and observe flocks of waterfowl',
          'Return to Sylhet airport for a short flight connection to Cox’s Bazar coastal city',
          'Evening barefoot walk along Laboni Beach watching the fiery sunset over the Bay of Bengal'
        ],
        travelTips: 'Try grilled pomfret (Rupchanda) with Bengali spices at oceanfront shacks.',
        recommendedStay: 'Beachfront resort in Cox’s Bazar'
      },
      {
        day: 6,
        title: 'The Iconic 80 km Marine Drive & Coral Rocks of Inani',
        location: 'Cox’s Bazar Coast',
        highlights: ['Marine Drive', 'Inani Black Coral Rocks', 'Himchari National Park'],
        activities: [
          'Open-top Jeep excursion down the dramatic Marine Drive highway',
          'Explore Inani Beach’s black coral rock pools and calm surf breaks',
          'Hike up Himchari coastal cliffs for sweeping panoramic views of the open ocean',
          'Sunset seafood barbecue dinner overlooking the crashing waves'
        ],
        travelTips: 'Wear sturdy water shoes when exploring rock pools at Inani Beach.',
        recommendedStay: 'Inani Beach eco-resort'
      },
      {
        day: 7,
        title: 'Transit to Khulna & Sixty Dome Mosque',
        location: 'Bagerhat & Mongla',
        highlights: ['Padma Bridge Crossing', 'Sixty Dome Mosque UNESCO', 'Cruise Embarkation'],
        activities: [
          'Morning flight to Jashore / road transfer via Padma expressway to Bagerhat',
          'Explore the 15th-century Sixty Dome Mosque and ancient Khan Jahan Ali reservoir',
          'Board your chartered expedition vessel at Mongla Port; begin the Sundarbans voyage'
        ],
        travelTips: 'The ship has limited Wi-Fi; enjoy the digital detox in the pristine wild delta.',
        recommendedStay: 'Liveaboard expedition vessel'
      },
      {
        day: 8,
        title: 'Deep Sundarbans: Kotka Wildlife Sanctuaries',
        location: 'Sundarbans Tiger Reserve',
        highlights: ['Silent Creek Dinghy Tour', 'Tiger Footprints', 'Jamtola Secluded Beach'],
        activities: [
          'Silent paddle boat exploration through narrow mangrove tributaries at sunrise',
          'Hike the forest trail with armed guards to find fresh tiger pugmarks in tidal silt',
          'Observe hundreds of spotted deer grazing at Kotka grassland clearing',
          'Walk along pristine Jamtola beach facing the Bay of Bengal'
        ],
        travelTips: 'Never speak loudly during creek rides; silence allows close wildlife encounters.',
        recommendedStay: 'Liveaboard expedition vessel'
      },
      {
        day: 9,
        title: 'Kochikhali River Sanctuaries & Mangrove Ecology',
        location: 'Sundarbans Estuary',
        highlights: ['Estuarine Crocodiles', 'Ganges River Dolphins', 'Barbecue under Stars'],
        activities: [
          'Cruise through Kochikhali river channels watching for river dolphins and basking crocodiles',
          'Learn about traditional honey collection practices and coastal flood defense ecology',
          'Evening deck barbecue under billions of clear Milky Way stars'
        ],
        travelTips: 'Carry a telephoto zoom lens (200mm–400mm) for bird and wildlife photography.',
        recommendedStay: 'Liveaboard expedition vessel'
      },
      {
        day: 10,
        title: 'Karamjal Boardwalk & Farewell to Bangladesh',
        location: 'Mongla to Dhaka',
        highlights: ['Karamjal Terrapins', 'Scenic flight back to Dhaka', 'Departure'],
        activities: [
          'Morning visit to Karamjal crocodile and terrapin conservation center',
          'Disembark at Mongla; drive to Jashore for a 35-minute flight back to Dhaka',
          'Final souvenir shopping at Aarong for handcrafted Nakshi Kantha quilts, Jamdani silk, and wild honey',
          'Transfer to Hazrat Shahjalal International Airport for onward international departure'
        ],
        travelTips: 'Arrive at Dhaka International Airport 3 hours prior to international flights.',
        recommendedStay: 'Departure'
      }
    ]
  }
];
