import { useState, useMemo } from 'react';
import { testimonials, TravelerType } from '@/data';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';

const filters: { label: string; value: TravelerType | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Solo', value: 'solo' },
  { label: 'Family', value: 'family' },
  { label: 'Women Travelers', value: 'women' },
];

const typeLabels: Record<TravelerType, string> = { solo: 'Solo', family: 'Family', women: 'Women Traveler' };

export default function TestimonialsSection() {
  const [filter, setFilter] = useState<TravelerType | 'all'>('all');
  const [idx, setIdx] = useState(0);

  const filtered = useMemo(() => {
    const list = filter === 'all' ? testimonials : testimonials.filter(t => t.type === filter);
    return list.length > 0 ? list : testimonials;
  }, [filter]);

  const safeIdx = idx % filtered.length;
  const t = filtered[safeIdx];

  const handleFilter = (v: TravelerType | 'all') => {
    setFilter(v);
    setIdx(0);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold">Words From the Trail</h2>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {filters.map(f => (
            <button
              key={f.value}
              onClick={() => handleFilter(f.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${filter === f.value ? 'bg-primary text-primary-foreground' : 'border border-border text-muted-foreground hover:border-primary/50'}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-14">
          <AnimatePresence mode="wait">
            <motion.div key={`${filter}-${safeIdx}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              {/* Avatar placeholder */}
              <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center text-muted-foreground text-xl font-bold">
                {t.name.charAt(0)}
              </div>
              <Quote className="w-7 h-7 text-primary/30 mx-auto mb-4" />
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90">"{t.quote}"</p>
              <div className="mt-6">
                <p className="font-medium">{t.flag} {t.name}</p>
                <p className="text-base text-muted-foreground">{typeLabels[t.type]} · {t.trek}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => setIdx((safeIdx - 1 + filtered.length) % filtered.length)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-base text-muted-foreground">{safeIdx + 1} / {filtered.length}</span>
            <button onClick={() => setIdx((safeIdx + 1) % filtered.length)} className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
