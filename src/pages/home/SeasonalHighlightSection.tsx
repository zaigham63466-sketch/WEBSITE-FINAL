import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { tours } from '@/data';
import ScrollReveal from '@/components/ScrollReveal';

// Easy to swap each season — just change the ID and season label
const SEASONAL_TOUR_ID = 'k2-base-camp';
const SEASON_LABEL = 'Peak Season · Jun–Aug';

export default function SeasonalHighlightSection() {
  const tour = tours.find(t => t.id === SEASONAL_TOUR_ID);
  if (!tour) return null;

  return (
    <section className="py-20 px-6 bg-card/60">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden">
              <img
                src="https://images.fillout.com/792909/6cqckjyk3j/generated-images/f3oreHYVDKZJgXPjDG6jpJ/img_GJHxdaXmyxci-kVl.jpg"
                alt="Trekker on Baltoro Glacier with K2"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <span className="inline-block text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full font-medium">
                {SEASON_LABEL}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-4">{tour.name}</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                The Karakoram is at its best right now. Trek through the Baltoro Glacier to stand beneath the world's most formidable peak — spaces filling fast for this season.
              </p>
              <p className="font-semibold mt-4">From ${tour.price.toLocaleString()} · {tour.duration}</p>
              <Link
                to={`/tours/${tour.id}`}
                className="inline-flex items-center gap-1.5 text-primary font-medium mt-4 hover:underline"
              >
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
