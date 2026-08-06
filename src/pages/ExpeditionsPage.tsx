import { tours } from '@/data';
import TourCard from '@/components/TourCard';
import PageHero from '@/components/PageHero';

export default function ExpeditionsPage() {
  const expeditions = tours.filter(t => t.category === 'expedition');

  return (
    <>
      <PageHero tracker="8,000m+" title="Expeditions" subtitle="High-altitude mountaineering for experienced climbers." />
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expeditions.map((t, i) => <TourCard key={t.id} tour={t} index={i} />)}
        </div>
      </section>
    </>
  );
}
