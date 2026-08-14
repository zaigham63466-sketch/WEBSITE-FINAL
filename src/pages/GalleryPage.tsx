import { useState, useMemo, useCallback } from 'react';
import { galleryItems, galleryCategories } from '@/data';
import PageHero from '@/components/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Maximize2 } from 'lucide-react';
import Lightbox from '@/components/Lightbox';

export default function GalleryPage() {
  const [active, setActive] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: galleryItems.length };
    galleryCategories.forEach(cat => {
      if (cat !== 'all') {
        counts[cat] = galleryItems.filter(item => item.category === cat).length;
      }
    });
    return counts;
  }, []);

  const filtered = useMemo(() =>
    active === 'all' ? galleryItems : galleryItems.filter(g => g.category === active),
    [active]
  );

  const openLightbox = useCallback((itemId: string) => {
    const idx = filtered.findIndex(f => f.id === itemId);
    if (idx !== -1) setLightboxIndex(idx);
  }, [filtered]);

  return (
    <>
      <PageHero tracker="Visual Stories" title="Captured Memories" subtitle="Moments frozen in time across Pakistan's wild north." />
      <section className="py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter Pills with Category Count Badges */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-8">
            {galleryCategories.map(cat => {
              const count = categoryCounts[cat] || 0;
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => { setActive(cat); setLightboxIndex(null); }}
                  className={`px-4 py-2 rounded-full text-xs font-medium capitalize transition-all duration-300 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-md scale-[1.02]'
                      : 'border border-border/80 text-foreground/80 hover:bg-accent hover:border-accent-foreground/20'
                  }`}
                >
                  <span>{cat === 'all' ? 'All' : cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-muted text-muted-foreground'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Asymmetric Bento-Style Masonry Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-[240px] gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, idx) => {
                // Determine Hero / Featured Bento Spans for asymmetric visual hierarchy
                const isHero = active === 'all' 
                  ? (idx === 0 || idx === 7 || idx === 13) 
                  : (idx === 0);

                const spanClasses = isHero 
                  ? 'sm:col-span-2 sm:row-span-2' 
                  : 'col-span-1 row-span-1';

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.92, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
                    onClick={() => openLightbox(item.id)}
                    className={`relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500 bg-muted/40 ${spanClasses}`}
                  >
                    {/* Image with subtle 1.05x hover scale */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5" />

                    {/* Sliding Caption Label */}
                    <div className="absolute inset-x-0 bottom-0 p-5 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-none">
                      <p className="font-bold text-base text-white drop-shadow-md leading-tight">{item.title}</p>
                      <p className="text-xs text-white/80 font-medium flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-primary-foreground/90 shrink-0" />
                        <span>{item.location}</span>
                      </p>
                    </div>

                    {/* Hover Zoom Icon */}
                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Interactive Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}
