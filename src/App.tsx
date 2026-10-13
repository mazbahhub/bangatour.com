/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SearchModal } from './components/search/SearchModal';
import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { SeasonsPage } from './pages/SeasonsPage';
import { SeasonDetailPage } from './pages/SeasonDetailPage';
import { FoodPage } from './pages/FoodPage';
import { FoodDetailPage } from './pages/FoodDetailPage';
import { WildlifePage } from './pages/WildlifePage';
import { ItinerariesPage } from './pages/ItinerariesPage';
import { MapPage } from './pages/MapPage';
import { TravelGuidePage } from './pages/TravelGuidePage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage, TermsPage } from './pages/LegalPages';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    // Check initial pathname or hash
    const path = window.location.pathname;
    if (path && path !== '/') return path;
    const hash = window.location.hash.replace('#', '');
    return hash || '/';
  });

  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path && path !== '/') {
        setCurrentPath(path);
      } else {
        const hash = window.location.hash.replace('#', '');
        setCurrentPath(hash || '/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route matching logic
  const renderCurrentPage = () => {
    // 1. Homepage
    if (currentPath === '/' || currentPath === '') {
      return <HomePage onNavigate={navigate} />;
    }

    // 2. Destinations
    if (currentPath === '/destinations') {
      return <DestinationsPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/destinations/')) {
      const slug = currentPath.replace('/destinations/', '').split('?')[0];
      return <DestinationDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 3. Six Seasons
    if (currentPath === '/seasons') {
      return <SeasonsPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/seasons/')) {
      const slug = currentPath.replace('/seasons/', '').split('?')[0];
      return <SeasonDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 4. Food & Gastronomy
    if (currentPath === '/food') {
      return <FoodPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/food/')) {
      const slug = currentPath.replace('/food/', '').split('?')[0];
      return <FoodDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 5. Wildlife
    if (currentPath === '/wildlife') {
      return <WildlifePage onNavigate={navigate} />;
    }

    // 6. Itineraries & Trip Planner
    if (currentPath === '/itineraries' || currentPath === '/itinerary-planner' || currentPath === '/plan') {
      return <ItinerariesPage onNavigate={navigate} />;
    }

    // 7. Interactive Map
    if (currentPath === '/map') {
      return <MapPage onNavigate={navigate} />;
    }

    // 8. Travel Guides & Essentials / Visa
    if (
      currentPath === '/travel-guide' ||
      currentPath === '/travel-guides' ||
      currentPath === '/travel-essentials' ||
      currentPath === '/visa-guide'
    ) {
      return <TravelGuidePage onNavigate={navigate} />;
    }

    // 9. Editorial Magazine / Blog
    if (currentPath === '/blog') {
      return <BlogPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.replace('/blog/', '').split('?')[0];
      return <BlogDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 10. Institutional & Legal Pages
    if (currentPath === '/about') {
      return <AboutPage onNavigate={navigate} />;
    }
    if (currentPath === '/contact') {
      return <ContactPage onNavigate={navigate} />;
    }
    if (currentPath === '/privacy') {
      return <PrivacyPage onNavigate={navigate} />;
    }
    if (currentPath === '/terms') {
      return <TermsPage onNavigate={navigate} />;
    }

    // Fallback: render Home if route not found
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-[#1C1917] bg-[#FAF8F5] selection:bg-[#133E32] selection:text-[#FAF8F5]">
      {/* Top Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} />

      {/* Global Quick Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigate={navigate}
      />
    </div>
  );
}
