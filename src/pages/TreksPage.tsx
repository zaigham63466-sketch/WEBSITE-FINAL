import { tours } from '@/data';
import TourCard from '@/components/TourCard';
import PageHero from '@/components/PageHero';

export default function TreksPage() {
  const treks = tours.filter(t => t.category === 'trek');

  return (
    <>
      <PageHero tracker="Adventures" title="Treks" subtitle="Multi-day treks through the Karakoram and Himalaya." />
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treks.map((t, i) => <TourCard key={t.id} tour={t} index={i} />)}
        </div>
      </section>
    </>
  );
}
