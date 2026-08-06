import type { Tour } from '@/data';
import TourCard from '@/components/TourCard';

export default function RelatedTours({ tours }: { tours: Tour[] }) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {tours.map((t, i) => (
            <TourCard key={t.id} tour={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
