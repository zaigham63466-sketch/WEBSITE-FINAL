import { tours } from '@/data';
import TourCard from '@/components/TourCard';
import PageHero from '@/components/PageHero';

export default function CulturalToursPage() {
  const culturalTours = tours.filter(t => t.category === 'cultural');

  return (
    <>
      <PageHero tracker="Heritage & Traditions" title="Cultural Tours" subtitle="Heritage sites, homestays, and living traditions of northern Pakistan." />
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {culturalTours.map((t, i) => (
            <div key={t.id} className="relative">
              <TourCard tour={t} index={i} />
              {t.id === 'nowruz-festival' && (
                <div className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                  Seasonal — March only
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
