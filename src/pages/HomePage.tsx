import HeroSection from '@/pages/home/HeroSection';
import CategoriesSection from '@/pages/home/CategoriesSection';
import PopularToursSection from '@/pages/home/PopularToursSection';
import AboutPreviewSection from '@/pages/home/AboutPreviewSection';
import TrustSection from '@/pages/home/TrustSection';
import TestimonialsSection from '@/pages/home/TestimonialsSection';
import SeasonalHighlightSection from '@/pages/home/SeasonalHighlightSection';
import VisaTeaserSection from '@/pages/home/VisaTeaserSection';
import HomeContactSection from '@/pages/home/HomeContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <PopularToursSection />
      <AboutPreviewSection />
      <TrustSection />
      <TestimonialsSection />
      <SeasonalHighlightSection />
      <VisaTeaserSection />
      <HomeContactSection />
    </>
  );
}
