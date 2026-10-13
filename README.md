# Discover Bangladesh — A Land of Rivers, Stories & Wonders

A cinematic, responsive travel and destination guide platform dedicated to Bangladesh, crafted for international travelers, cultural explorers, and adventure seekers.

Inspired by world-class travel editorial standards and tourism platforms like **bangladeshtrail.com** and **explore-bengal-bound.base44.app**.

---

## 🌟 Key Highlights & Features

1. **4K Cinematic Video Showcase & Theater Player**:
   - Verified 4K travel documentary streams for the Sundarbans, Sajek Valley, Sreemangal Tea Estates, Old Dhaka Mughal heritage, and the official *Beautiful Bangladesh: Land of Stories* film.
   - Bite-sized travel reels strip (*"Bengal in Motion"*) with instant modal playback.
   - Instant loading with zero-lag photography background and 4K Trailer modal.

2. **Interactive Bangladesh Cartography Map**:
   - Geographically accurate projection of Bangladesh with divisional borders and major delta rivers (Padma, Jamuna, Meghna, Surma, Karnaphuli).
   - Category filtering (Wildlife, Hill Tracts, Tea Country, Heritage, Beaches).
   - Drawer slide-out previews for 13+ tourist destinations with travel duration, best visiting seasons, and travel tips.

3. **Shoro Ritu (Six Seasons of Bangladesh)**:
   - Dedicated guide to the six traditional Bengali seasons (Grishma, Barsha, Sharat, Hemanta, Sheet, Basanta).
   - Seasonal weather overview, temperature ranges, rainfall, humidity, and signature cultural activities.

4. **Curated Signature Expeditions (Bengal Bound Edition)**:
   - Handcrafted travel packages with budget estimates, day schedules, and highlights (Sundarbans Tiger Safaris, Cloud Valleys of Sajek, Haor Houseboat Cruising, Tea Country Trails, Mughal Heritage Walks, Coastal Beaches).

5. **A Taste of Bangladesh & Signature Hilsa Guide**:
   - Culinary monograph of Shorshe Ilish (Mustard Hilsa Curry).
   - Traditional dishes: Kacchi Biryani, Bhorta banquets, Chittagong Mezban, Bogura Doi, and street food favorites.

6. **Interactive Trip Planner & Journey Architect**:
   - Customizable duration (3, 5, 7, 10 days), travel pace, and budget tier calculation (Backpacker, Moderate, Luxury).
   - 1-click **Copy Itinerary** and **Print/PDF Export** functionality.

7. **Comprehensive Travel Essentials**:
   - Visa on Arrival eligible nationalities & immigration rules.
   - Currency & ATM guidance, health & packing advice, tourist police contacts, and ethical travel guidelines.

---

## 🚀 Quick Start Guide (Local Setup)

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- `npm` or `yarn` or `pnpm`

### 1. Installation
Extract the zip file, open your terminal inside the project directory, and install dependencies:

```bash
npm install
```

### 2. Start the Development Server
Run the local Vite development server:

```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:3000
```
*(or the port specified in your terminal)*

### 3. Build for Production
To create an optimized production build:

```bash
npm run build
```

The production output will be generated inside the `dist/` folder.

---

## 🚀 Deployment Guide: Vercel & Netlify

This project is pre-configured for 1-click deployment on both **Vercel** (`vercel.json`) and **Netlify** (`netlify.toml` + `public/_redirects`).

### Option A: Deploy to Vercel (Recommended)

#### Method 1: Via GitHub (Fastest & Automatic Updates)
1. Initialize a git repository and push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Discover Bangladesh"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/discover-bangladesh.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** -> **"Project"**.
4. Import your `discover-bangladesh` repository.
5. Vercel will automatically detect **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **"Deploy"**. Your site will be live on a free `.vercel.app` domain in ~30 seconds!

#### Method 2: Via Vercel CLI (Direct from Terminal)
```bash
# Install Vercel CLI globally
npm i -g vercel

# Run deployment
vercel

# For production deployment
vercel --prod
```

---

### Option B: Deploy to Netlify

#### Method 1: Via GitHub
1. Push your project to GitHub (same as Option A).
2. Go to [netlify.com](https://netlify.com) and log in.
3. Click **"Add new site"** -> **"Import an existing project"** -> **GitHub**.
4. Select your `discover-bangladesh` repository.
5. Netlify will read `netlify.toml` automatically:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click **"Deploy discover-bangladesh"**.

#### Method 2: Drag & Drop (No Git needed!)
1. Build the production bundle locally:
   ```bash
   npm run build
   ```
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the generated `dist/` folder directly into the Netlify browser window.
4. Your website will be live immediately!

---

### 🇧🇩 বাংলা ডেপ্লয় গাইড (Vercel ও Netlify)

#### Vercel-এ ডেপ্লয় করার সহজ নিয়ম:
1. কোডগুলো GitHub-এ আপলোড করুন (`git push`)।
2. [Vercel.com](https://vercel.com)-এ গিয়ে GitHub দিয়ে লগইন করুন।
3. **"Add New Project"** ক্লিক করে আপনার রিপোজিটরি সিলেক্ট করুন।
4. `vercel.json` ফাইলে আগেই সব রাউটিং কনফিগার করা আছে, সরাসরি **Deploy** বাটনে চাপ দিন। ৩০ সেকেন্ডের মধ্যে লাইভ লিঙ্ক পেয়ে যাবেন!

#### Netlify-তে ডেপ্লয় করার সহজ নিয়ম:
- **সবচেয়ে সহজ (Drag & Drop):** টার্মিনালে `npm run build` চালান। তারপর তৈরি হওয়া `dist` ফোল্ডারটি [app.netlify.com/drop](https://app.netlify.com/drop)-এ টেনে ছেড়ে দিন, সাইট সাথে সাথে লাইভ হয়ে যাবে!
- **GitHub দিয়ে:** Netlify-তে রিপোজিটরি কানেক্ট করলে `netlify.toml` অনুযায়ী অটোমেটিক বিল্ড ও ডেপ্লয় হয়ে যাবে।

---

## 📁 Project Structure

```
├── public/                 # Static assets & public downloads
├── src/
│   ├── assets/             # Generated photography & visual assets
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── map/            # Interactive SVG Bangladesh Map
│   │   ├── planner/        # Interactive Trip Planner & Cost Calculator
│   │   ├── river/          # Delta river story visualization
│   │   ├── search/         # Destination search modal
│   │   └── video/          # 4K Cinema Theater & Bite-Sized Travel Reels
│   ├── data/
│   │   ├── articles.ts     # Travel stories & editorial articles
│   │   ├── destinations.ts # 13+ detailed destination monographs
│   │   ├── foods.ts        # Culinary heritage & Hilsa guide
│   │   ├── itineraries.ts  # 3, 5, 7, and 10 day detailed schedules
│   │   ├── seasons.ts      # Six Bengali seasons data
│   │   ├── travelGuides.ts # Visa on Arrival & traveler practicals
│   │   └── wildlife.ts     # Sundarbans biodiversity catalog
│   ├── pages/              # Page routes & views
│   ├── types/              # TypeScript interface definitions
│   ├── App.tsx             # Main router and view orchestrator
│   ├── index.css           # Tailwind CSS and theme design tokens
│   └── main.tsx            # React application entry point
├── index.html              # HTML entry point with meta tags & Google fonts
├── package.json            # Project dependencies & scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build & bundler configuration
```

---

## 🎨 Design System & Colors
- **Obsidian & Midnight Navy**: `#060A12`, `#080D1A`, `#0F172A`
- **Luminous Golden Amber**: `#F59E0B`, `#D97706`
- **River Azure**: `#0284C7`, `#2563EB`
- **Warm Alabaster Light**: `#FAF9F6`, `#F8FAFC`
- **Typography**: Playfair Display (Serif) & Plus Jakarta Sans (Sans-serif)

---

## 📄 License
Created for Discover Bangladesh. All rights reserved.
