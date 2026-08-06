import { tours } from '@/data';
import TourCard from '@/components/TourCard';
import PageHero from '@/components/PageHero';

export default function SkiToursPage() {
  const skiTours = tours.filter(t => t.category === 'ski');

  return (
    <>
      <PageHero tracker="Winter Adventures" title="Ski Tours" subtitle="Backcountry skiing across Pakistan's legendary peaks and valleys." />
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skiTours.map((t, i) => <TourCard key={t.id} tour={t} index={i} />)}
        </div>
      </section>
    </>
  );
}
