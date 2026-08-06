import { tours } from '@/data';
import TourCard from '@/components/TourCard';
import ScrollReveal from '@/components/ScrollReveal';

export default function PopularToursSection() {
  const featured = tours.filter(t => ['k2-base-camp', 'broad-peak', 'hunza-valley', 'hunza-heritage'].includes(t.id));

  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 text-center">Featured</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Featured Adventures</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {featured.map((tour, i) => <TourCard key={tour.id} tour={tour} index={i} />)}
        </div>
      </div>
    </section>
  );
}
