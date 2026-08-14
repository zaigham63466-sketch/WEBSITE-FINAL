import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SnowParticles from '@/components/SnowParticles';

const categories = [
  { title: 'Treks', desc: 'Multi-day treks through the Karakoram and Himalaya.', to: '/treks', image: '/images/k2 base camp trek.jpeg', snow: true },
  { title: 'Expeditions', desc: '8,000m peaks for experienced mountaineers.', to: '/expeditions', image: '/images/Broad Peak Expedition.jpeg', snow: true },
  { title: 'Valleys', desc: "Cultural tours through Pakistan's most beautiful valleys.", to: '/valleys', image: '/images/Skardu Valley Explorer.jpeg', snow: false },
  { title: 'Ski Tours', desc: "Backcountry skiing across Pakistan's legendary peaks.", to: '/ski-tours', image: '/images/Hispar Glacier Ski.jpeg', snow: true },
  { title: 'Cultural Tours', desc: 'Heritage sites, homestays, and living traditions.', to: '/cultural-tours', image: '/images/cultural.jpeg', snow: false },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.1}>
              <Link
                to={cat.to}
                className="group relative block h-[420px] rounded-2xl overflow-hidden border border-border/50 transition-all duration-500 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/85" />
                {cat.snow && <SnowParticles count={15} />}
                <div className="relative h-full flex flex-col justify-end p-7">
                  <h3 className="text-2xl font-bold text-white">{cat.title}</h3>
                  <p className="text-sm text-white/70 mt-1.5 leading-relaxed">{cat.desc}</p>
                  <span className="inline-flex items-center gap-1.5 mt-5 px-5 py-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white w-fit transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground">
                    Explore <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
