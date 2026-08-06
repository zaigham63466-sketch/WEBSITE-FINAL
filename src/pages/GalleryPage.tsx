import { useState, useMemo, useCallback } from 'react';
import { galleryItems, galleryCategories } from '@/data';
import PageHero from '@/components/PageHero';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Lightbox from '@/components/Lightbox';

export default function GalleryPage() {
  const [active, setActive] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {galleryCategories.map(cat => (
              <button key={cat} onClick={() => { setActive(cat); setLightboxIndex(null); }}
                className={`px-4 py-2 rounded-full text-sm capitalize transition-colors ${active === cat ? 'bg-primary text-primary-foreground' : 'border border-border hover:bg-accent'}`}>
                {cat === 'all' ? 'All' : cat}
              </button>
            ))}
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => openLightbox(item.id)}
                  className={`relative break-inside-avoid rounded-xl overflow-hidden group cursor-pointer ${item.height}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-5">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="font-semibold text-sm text-white">{item.title}</p>
                      <p className="text-xs text-white/70 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

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
