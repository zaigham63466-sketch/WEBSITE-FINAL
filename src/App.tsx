import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import TopUtilityBar from '@/components/TopUtilityBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { Toaster } from '@/components/ui/sonner';

const HomePage = lazy(() => import('@/pages/HomePage'));
const TreksPage = lazy(() => import('@/pages/TreksPage'));
const ExpeditionsPage = lazy(() => import('@/pages/ExpeditionsPage'));
const ValleysPage = lazy(() => import('@/pages/ValleysPage'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const TourDetailPage = lazy(() => import('@/pages/TourDetailPage'));
const SkiToursPage = lazy(() => import('@/pages/SkiToursPage'));
const CulturalToursPage = lazy(() => import('@/pages/CulturalToursPage'));
const SafetyPage = lazy(() => import('@/pages/SafetyPage'));
const VisaGuidePage = lazy(() => import('@/pages/VisaGuidePage'));

export default function App() {
  return (
    <BrowserRouter>
      <TopUtilityBar />
      <div className="sticky top-0 z-50 w-full h-0">
        <Navbar />
      </div>
      <main className="min-h-screen">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/treks" element={<TreksPage />} />
            <Route path="/expeditions" element={<ExpeditionsPage />} />
            <Route path="/valleys" element={<ValleysPage />} />
            <Route path="/ski-tours" element={<SkiToursPage />} />
            <Route path="/cultural-tours" element={<CulturalToursPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/safety" element={<SafetyPage />} />
            <Route path="/tours/:id" element={<TourDetailPage />} />
            <Route path="/pakistan-visa-guide" element={<VisaGuidePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppWidget />
      <Toaster />
    </BrowserRouter>
  );
}
