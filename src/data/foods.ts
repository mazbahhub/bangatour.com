import { FoodItem } from '../types';

export const foods: FoodItem[] = [
  {
    id: 'shorshe-ilish',
    slug: 'shorshe-ilish',
    name: 'Shorshe Ilish (Mustard Hilsa)',
    bengaliName: 'সর্ষে ইলিশ',
    region: 'Padma & Meghna River Deltas (National Dish)',
    flavorProfile: 'Pungent, silky, rich with mustard heat, savory umami, and delicate grassy river notes',
    keyIngredients: [
      'Fresh Padma or Meghna river Hilsa steaks',
      'Freshly ground yellow and black mustard seed paste',
      'Cold-pressed virgin mustard oil (Kachi Ghani)',
      'Slit fresh green bird’s eye chillies',
      'Turmeric powder and sea salt',
      'Nigella seeds (Kalonji)'
    ],
    preparationStyle: 'Thick fish steaks are gently simmered in a freshly stone-ground mustard paste emulsified with fragrant mustard oil and punctuated by whole green chilies until the oily, succulent fish releases its natural omega-rich juices.',
    culturalSignificance: 'Hilsa (Tenualosa ilisha) is the National Fish of Bangladesh and the supreme crown jewel of Bengali cuisine. Mentioned in medieval Mangalkavya literature, no festive Bengali meal or Pohela Boishakh celebration is complete without this silver monarch of the delta rivers.',
    whereToTry: 'Padma riverbanks at Mawa Ghat (Munshiganj), heritage restaurants in Old Dhaka, or riverside dhabas overlooking the confluence of the Padma and Jamuna.',
    dietaryNotes: 'Contains fish and mustard. Rich in healthy Omega-3 fatty acids. Served with steaming white rice.',
    image: '/src/assets/images/hilsa_fish_culinary_1791862157523.jpg',
    isSpecialFeature: true,
    relatedFoods: ['kacchi-biryani', 'bhorta-banquet', 'panta-ilish']
  },
  {
    id: 'kacchi-biryani',
    slug: 'kacchi-biryani',
    name: 'Old Dhaka Kacchi Biryani',
    bengaliName: 'কাচ্চি বিরিয়ানি',
    region: 'Old Dhaka (Puran Dhaka)',
    flavorProfile: 'Fragrant, aromatic with saffron, cardamom, and ghee; tender fall-apart mutton with buttery spiced potatoes',
    keyIngredients: [
      'Tender bone-in young mutton/goat',
      'Aromatic fine Chinigura or Kalijira rice',
      'Pure country ghee (clarified butter)',
      'Potatoes fried in saffron and ghee',
      'Mawa (reduced milk solids), aloo bukhara (sour plums), and fried onions (beresta)',
      'Whole spices: green cardamom, mace, nutmeg, cinnamon, and shahi jeera'
    ],
    preparationStyle: 'Raw marinated meat (hence "kacchi", meaning raw) is layered at the bottom of a large heavy copper cauldron (degh), topped with soaked aromatic rice, saffron milk, and fried potatoes, then sealed airtight with flour dough and slow-steamed over glowing charcoal embers (dum).',
    culturalSignificance: 'Brought to perfection by Mughal chefs who settled in Dhaka in the 17th century, Kacchi Biryani is the indispensable centerpiece of Bangladeshi weddings, Eid celebrations, and culinary heritage.',
    whereToTry: 'Heritage institutions in Old Dhaka such as Grand Nawab, Fakruddin, Kolkata Kacchi, or traditional wedding banquets.',
    dietaryNotes: 'Contains dairy (ghee, milk). Halal.',
    image: '/src/assets/images/old_dhaka_heritage_culture_1791862157173.jpg',
    isSpecialFeature: false,
    relatedFoods: ['shorshe-ilish', 'mezban-gosht', 'fuchka']
  },
  {
    id: 'bhorta-banquet',
    slug: 'bhorta-banquet',
    name: 'The Traditional Bhorta Banquet',
    bengaliName: 'ঐতিহ্যবাহী ভর্তা ও ভাত',
    region: 'Pan-Bangladesh (Home & Rice Hotel Heritage)',
    flavorProfile: 'Fiery, rustic, smoky, pungent with mustard oil, caramelized garlic, and toasted dried red chillies',
    keyIngredients: [
      'Cold-pressed pungent mustard oil',
      'Roasted garlic cloves and finely chopped red shallots',
      'Crisp roasted dry red chilies (Shukna morich)',
      'Base ingredients: fire-roasted eggplant (Begun), mashed potatoes (Aloo), sun-dried fermented fish (Shutki), river shrimp (Chingri), coriander, or green banana'
    ],
    preparationStyle: 'Vegetables, legumes, fish, or herbs are roasted on open charcoal or boiled, then hand-mashed together on a stone sil-nora with roasted garlic, fiery red chillies, fresh shallots, and generous amounts of raw pungent mustard oil.',
    culturalSignificance: 'Bhorta represents the democratic heart and soul of Bangladeshi everyday gastronomy. In traditional "Bhater Hotels" (rice hotels), a single plate of steaming hot rice is typically served with a dazzling wheel of 10 to 20 different colorful bhortas.',
    whereToTry: 'Nirob Hotel in Nazira Bazar (Old Dhaka), Kasturi Restaurant (Purana Paltan), or highway dhabas along the Comilla and Sylhet corridors.',
    dietaryNotes: 'Vegetable bhortas are strictly vegan/vegetarian; fish and shrimp varieties contain seafood. Naturally gluten-free.',
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    isSpecialFeature: false,
    relatedFoods: ['shorshe-ilish', 'chui-jhal', 'kacchi-biryani']
  },
  {
    id: 'mezban-gosht',
    slug: 'mezban-gosht',
    name: 'Chattogram Mezban Gosht',
    bengaliName: 'মেজবানি মাংস',
    region: 'Chattogram (Chittagong Coastal Belt)',
    flavorProfile: 'Intensely spicy, deep mahogany red, aromatic with roasted cumin, fenugreek, and mustard, with a rich fiery gravy',
    keyIngredients: [
      'Prime cuts of tender beef with marrow bone',
      'Mezbani masala blend: radhuni, fenugreek, mace, nutmeg, dry red chillies, and roasted cumin',
      'Mustard oil and crushed garlic',
      'Chana dal (split Bengal gram) simmered with meat bones'
    ],
    preparationStyle: 'A communal festival feast where hundreds of kilograms of beef are cooked inside giant cast-iron cauldrons over firewood. The unique addition of radhuni (wild celery seed) and chana dal creates its distinct aroma.',
    culturalSignificance: 'Mezban is a centuries-old Chittagonian tradition of hosting grand hospitality feasts open to the entire public, commemorating milestones and paying homage to community spirit without social division.',
    whereToTry: 'Mezban Haat, Gausia, or Barcode Mezban in Chattogram city, as well as specialized Chittagonian diaspora eateries in Dhaka.',
    dietaryNotes: 'Halal beef. Very high spice heat level.',
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    isSpecialFeature: false,
    relatedFoods: ['kacchi-biryani', 'chui-jhal']
  },
  {
    id: 'bogura-doi',
    slug: 'bogura-doi',
    name: 'Bogura Mishti Doi (Caramelized Curd)',
    bengaliName: 'বগুড়ার মিষ্টি দই',
    region: 'Bogura (Rajshahi Division)',
    flavorProfile: 'Caramel-sweet, creamy, velvety, with a subtle smoky tang from traditional porous earthenware pots',
    keyIngredients: [
      'Full-fat cow and buffalo milk',
      'Caramelized sugarcane or palm sugar',
      'Natural cultured curd starter',
      'Porous baked red terracotta clay pots (Sara/Handi)'
    ],
    preparationStyle: 'Fresh rich milk is slow-boiled for hours in giant vats until reduced to a dense golden-brown reduction. It is sweetened with caramelized sugar, seeded with traditional culture, and poured into unglazed red clay pots that breathe and wick away excess moisture overnight.',
    culturalSignificance: 'Protected by Geographical Indication (GI) status, Bogura Doi was created over 130 years ago by the Ghosh family of Sherpur. Queen Elizabeth II and international dignitaries were famously gifted this delicacy.',
    whereToTry: 'Gour Gopal, Akboria Grand Hotel, and Asia Sweetmeat in Bogura city; available at premium confectionery shops across Dhaka.',
    dietaryNotes: 'Vegetarian. Contains dairy.',
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    isSpecialFeature: false,
    relatedFoods: ['winter-pitha', 'fuchka']
  },
  {
    id: 'fuchka',
    slug: 'fuchka',
    name: 'Fuchka & Chotpoti (Street Food Icon)',
    bengaliName: 'ফুচকা ও চটপটি',
    region: 'Pan-Bangladesh (Premier Street Food)',
    flavorProfile: 'Crispy, tangy, fiery, savory, refreshing, bursting with spiced tamarind water and chili zest',
    keyIngredients: [
      'Crispy hollow spherical semolina-wheat shells (Puri)',
      'Filling: spiced yellow split peas (Chotpoti dubli), mashed potatoes, grated hard-boiled egg',
      'Special Tok (Tamarind water): concentrated sour tamarind juice, black salt (Bit laban), roasted cumin, chili flakes, and fresh mint',
      'Freshly chopped green chillies, coriander, and thinly sliced red onions'
    ],
    preparationStyle: 'The vendor cracks open the top of the crisp golden shell with their thumb, fills it with a spoonful of warm spiced potato-pea mixture, sprinkles grated egg, and dunks the entire shell into chilled spiced tamarind water immediately before serving.',
    culturalSignificance: 'Fuchka is Bangladesh’s undisputed street food royalty. Unlike regional variants across the subcontinent, Bangladeshi Fuchka is famous for its dense chickpea-potato filling, generous grated egg topping, and extra-sour spiced tamarind water.',
    whereToTry: 'Dhanmondi Lake promenade, Bailey Road, and Dhaka University TSC campus in Dhaka.',
    dietaryNotes: 'Vegetarian. Spicy. Contains gluten (shells).',
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    isSpecialFeature: false,
    relatedFoods: ['bhorta-banquet', 'bogura-doi']
  },
  {
    id: 'chui-jhal',
    slug: 'chui-jhal',
    name: 'Khulna Chui Jhal Gosht',
    bengaliName: 'চুই ঝাল মাংস',
    region: 'Southwest (Khulna, Bagerhat & Satkhira)',
    flavorProfile: 'Intense herbal peppery heat, medicinal woodsy warmth, tingling tongue sensation, rich savory gravy',
    keyIngredients: [
      'Chui Jhal vine stems (Piper chaba), sliced into 2-inch chunks',
      'Prime mutton or beef with whole soft garlic bulbs',
      'Cold-pressed mustard oil',
      'Ground roasted cumin, coriander, and ginger paste'
    ],
    preparationStyle: 'Chunks of the aromatic medicinal Piper chaba vine stem and whole unpeeled garlic bulbs are simmered slowly alongside meat in deep cast-iron pots. The woody stem softens to the texture of boiled potato, infusing the curry with an invigorating, aromatic warmth.',
    culturalSignificance: 'A proud culinary badge of southwestern Bangladesh. Travelers crossing the Padma Bridge make dedicated pilgrimages to Khulna just to experience authentic Chui Jhal.',
    whereToTry: 'Abbas Hotel in Chuknagar (Khulna), Kamrul Hotel in Khulna city, or specialized south-bengal restaurants in Dhaka.',
    dietaryNotes: 'Halal meat. Distinct pepper heat that is soothing rather than irritating to the stomach.',
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    isSpecialFeature: false,
    relatedFoods: ['mezban-gosht', 'bhorta-banquet']
  },
  {
    id: 'winter-pitha',
    slug: 'winter-pitha',
    name: 'Artisanal Winter Pithas (Bhapa & Patishapta)',
    bengaliName: 'শীতের পিঠা (ভাপা ও পাটিসাপটা)',
    region: 'Rural Bengal & Street Stalls (Winter Specialty)',
    flavorProfile: 'Warm, comforting, aromatic with sweet date palm molasses (Nolen Gur) and fresh grated coconut',
    keyIngredients: [
      'Freshly coarse-milled new Aman rice flour',
      'Nolen Gur / Jhola Gur (liquid artisanal date palm jaggery tapped at dawn)',
      'Freshly grated sweet coconut flesh',
      'Kheer / Khoya (condensed milk solids) for patishapta fillings'
    ],
    preparationStyle: 'Bhapa Pitha is formed in miniature clay saucers layered with rice flour, molasses, and coconut, then steamed over boiling water wrapped in muslin cloth. Patishapta is made by spreading thin rice-flour crepes on a hot griddle and rolling them around sweet cardamom-infused milk fudge.',
    culturalSignificance: 'Pithas are an intimate part of Bengali agrarian heritage, celebrating the winter rice harvest and the dawn tapping of wild date palm trees.',
    whereToTry: 'Winter street corners across every city and town from November to February, or the National Pitha Festival at Bangladesh Shilpakala Academy in Dhaka.',
    dietaryNotes: 'Vegetarian. Naturally dairy-free options available (Bhapa).',
    image: '/src/assets/images/hero_bangladesh_cinematic_1791862154817.jpg',
    isSpecialFeature: false,
    relatedFoods: ['bogura-doi', 'shorshe-ilish']
  }
];
