import { tours } from '@/data';
import TourCard from '@/components/TourCard';
import PageHero from '@/components/PageHero';

export default function ValleysPage() {
  const valleys = tours.filter(t => t.category === 'valley');

  return (
    <>
      <PageHero tracker="Explore" title="Valley Tours" subtitle="Cultural journeys through Pakistan's most beautiful valleys." />
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valleys.map((t, i) => <TourCard key={t.id} tour={t} index={i} />)}
        </div>
      </section>
    </>
  );
}
