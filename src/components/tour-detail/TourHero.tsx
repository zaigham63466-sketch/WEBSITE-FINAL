import type { Tour } from '@/data';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function TourHero({ tour }: { tour: Tour }) {
  const categoryMap: Record<string, [string, string]> = { trek: ['Treks', '/treks'], expedition: ['Expeditions', '/expeditions'], valley: ['Valleys', '/valleys'], ski: ['Ski Tours', '/ski-tours'], cultural: ['Cultural Tours', '/cultural-tours'] };
  const [categoryLabel, categoryPath] = categoryMap[tour.category] || ['Tours', '/'];

  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-end">
      <img
        src={tour.image}
        alt={tour.name}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="relative z-10 container mx-auto px-4 pb-12">
        <nav className="flex items-center gap-1 text-base text-white/70 mb-4">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to={categoryPath} className="hover:text-white transition-colors">{categoryLabel}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white">{tour.name}</span>
        </nav>
        <h1 className="text-3xl md:text-5xl font-bold text-white">{tour.name}</h1>
        <p className="text-lg text-white/80 mt-3 max-w-2xl">{tour.description}</p>
      </div>
    </section>
  );
}
