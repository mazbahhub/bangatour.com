export interface VisaInfo {
  category: string;
  eligibleNationalities: string[];
  duration: string;
  feeEstimatedUSD: string;
  requirements: string[];
  keyAdvice: string;
}

export const visaGuideData = {
  lastVerifiedDate: 'October 2026',
  officialPortals: [
    {
      title: 'Bangladesh Department of Immigration & Passports',
      url: 'https://dip.gov.bd',
      description: 'Official portal for passport and immigration regulations.'
    },
    {
      title: 'Bangladesh Online Visa Application Portal',
      url: 'https://visa.gov.bd',
      description: 'Official government portal to submit pre-arrival visa application forms.'
    },
    {
      title: 'Bangladesh Police Special Branch (Tourist Verification)',
      url: 'https://sb.police.gov.bd',
      description: 'Immigration clearance and security advice for foreign nationals.'
    }
  ],
  visaCategories: [
    {
      category: 'Visa on Arrival (VoA)',
      eligibleNationalities: [
        'United States',
        'United Kingdom',
        'European Union / Schengen Member States',
        'Canada',
        'Australia',
        'New Zealand',
        'Japan',
        'South Korea',
        'Singapore',
        'Malaysia',
        'GCC Countries (UAE, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain)'
      ],
      duration: 'Up to 30 days (single entry, non-extendable at the airport; extensions possible via DIP Dhaka)',
      feeEstimatedUSD: '$51 USD (payable in cash USD or credit card at designated airport bank counter)',
      requirements: [
        'Valid passport with at least 6 months validity from the date of arrival',
        'Confirmed return or onward flight ticket',
        'Confirmed hotel reservation or proof of local accommodation',
        'Proof of sufficient funds (minimum $500 USD equivalent in cash or international card)',
        'Completed arrival card handed out during flight or in arrival hall'
      ],
      keyAdvice: 'Visa on Arrival counters are located immediately before passport control at Hazrat Shahjalal International Airport (DAC), Shah Amanat (CGP), and Osmani (ZYL). While VoA is widely granted for genuine tourism, processing times can take 20–45 minutes during peak international arrivals.'
    },
    {
      category: 'Pre-Arranged Tourist Visa (Sticker / Mission Issued)',
      eligibleNationalities: ['All passport holders worldwide eligible for Bangladeshi tourist visas'],
      duration: '30, 60, or 90 days (Single, Double, or Multiple Entry depending on mission)',
      feeEstimatedUSD: 'Varies by applicant nationality (typically $20–$160 USD)',
      requirements: [
        'Online application completed at visa.gov.bd',
        'Original passport with 6+ months validity and 2 blank pages',
        'Two recent passport-sized color photos with white background',
        'Flight itinerary and hotel reservation vouchers',
        'Bank statement showing financial sufficiency'
      ],
      keyAdvice: 'Recommended for travelers seeking longer stays, multiple entries, or those who prefer entering Bangladesh with confirmed visas in hand.'
    }
  ],
  importantDisclaimer: 'Visa policies, eligible nationalities, fees, and documentation are subject to government revision. Travelers MUST verify current requirements with their nearest Embassy or High Commission of Bangladesh prior to departure.'
};

export const travelEssentialsData = [
  {
    topic: 'Money, Currency & Payments',
    summary: 'The official currency is the Bangladeshi Taka (BDT, ৳).',
    details: [
      'Cash is king for street markets, cycle rickshaws, small restaurants, and boat rentals. Always carry notes of ৳20, ৳50, ৳100, and ৳500.',
      'International Visa and Mastercard credit cards are widely accepted in upscale hotels, shopping malls, supermarkets (Unimart, Shwapno), and fine dining restaurants.',
      'ATMs are abundant in major cities (look for Standard Chartered, Eastern Bank, Dutch-Bangla Bank, and City Bank with Visa/Plus/Mastercard logos).',
      'Mobile financial services like bKash and Nagad dominate local commerce; international travelers can easily pay via partner digital wallets or local guides.'
    ]
  },
  {
    topic: 'SIM Cards & Connectivity',
    summary: 'High-speed 4G coverage is widespread across cities, highways, and tourist hubs.',
    details: [
      'Purchase an official tourist SIM card right inside the arrival concourse at Dhaka Airport (counters operate 24/7).',
      'Grameenphone (GP) offers the widest nationwide coverage, especially in remote regions like the Sundarbans and Chittagong Hill Tracts.',
      'Robi and Banglalink offer excellent high-speed mobile data packages in urban and tourist corridors.',
      'Required to buy a SIM: original passport and copy, tourist visa stamp, and a passport-size photo (many counters take digital photos on site).',
      'eSIMs from international providers (Airalo, Nomad, Holafly) function smoothly in Bangladesh via local roaming partner networks.'
    ]
  },
  {
    topic: 'Local Transportation',
    summary: 'Getting around Bangladesh is an authentic adventure in itself.',
    details: [
      'Ride-Hailing: Uber and Pathao operate extensively in Dhaka and Chattogram for both cars and motorcycles.',
      'CNG Auto-Rickshaws: Green three-wheelers run on compressed natural gas. Always agree on a fare beforehand or insist on the meter in Dhaka.',
      'Cycle Rickshaws: Human-powered decorative cycle rickshaws are the iconic way to experience Old Dhaka and neighbourhood streets.',
      'Domestic Flights: Biman Bangladesh, US-Bangla Airlines, and Air Astra provide frequent 30–50 minute hops connecting Dhaka with Cox’s Bazar, Sylhet, Jashore, Saidpur, and Chittagong.',
      'Intercity Trains: Bangladesh Railway connects major cities. Book AC Chair (Snigdha) or First Class Berths for comfortable scenic journeys.',
      'River Passenger Launches & Steamers: Multi-deck luxury passenger launches connect Dhaka Sadarghat with Barishal and the southern delta overnight, offering private AC cabins with river view balconies.'
    ]
  },
  {
    topic: 'Cultural Etiquette & Dress Code',
    summary: 'Bangladesh is celebrated for extraordinary hospitality toward foreign guests.',
    details: [
      'Greetings: A warm "Salam Alaikum" (peace be upon you) or "Nomoshkar" with a gentle nod is universally welcomed.',
      'Dress Modestly: Dress respectfully. Both men and women should cover shoulders and knees when visiting historic sites, village hamlets, and places of worship. Loose, breathable linens or cotton kurtas are ideal.',
      'Mosques & Temples: Remove footwear before entering any temple or mosque. Women should carry a light scarf (orna) to cover hair when entering mosques.',
      'Hospitality: Bengalis are famously hospitable and will often offer tea (cha), sweets, or meals. Graciously accepting or taking a small sip shows warmth and respect.',
      'Photography Courtesy: Always ask permission before photographing individuals, particularly women and religious ascetics. Bangladeshis are generally very welcoming of photography.'
    ]
  },
  {
    topic: 'Health, Water & Food Safety',
    summary: 'Simple sensible precautions ensure a healthy and rewarding journey.',
    details: [
      'Drinking Water: NEVER drink unfiltered tap water. Drink only sealed bottled mineral water (Mum, Kinley, Pran, Spa) or purified boiled water.',
      'Street Food: Enjoy Bangladesh’s vibrant street food culture mindfully. Choose stalls with high turnover where food is cooked fresh and piping hot before your eyes.',
      'Mosquito Protection: Carry DEET-based mosquito repellent, especially when traveling in rainforests (Lawachara), swamp forests, or hill valleys.',
      'Sun & Hydration: In summer and monsoon, high humidity requires regular hydration with coconut water (Daab) and electrolyte drinks (Orsaline-N available at every pharmacy for pennies).'
    ]
  },
  {
    topic: 'Safety & Emergency Contacts',
    summary: 'Bangladesh is generally a peaceful and welcoming country for foreign visitors.',
    details: [
      'National Emergency Helpline: Dial 999 (toll-free, operates 24/7 for Police, Ambulance, and Fire Service).',
      'Tourist Police Hotline: +880 1320 001299 (dedicated English-speaking support for international travelers).',
      'Hill Tracts Safety: When traveling in Khagrachhari, Rangamati, and Bandarban, international visitors must register at police/army checkpoints with passport photocopies.'
    ]
  }
];
