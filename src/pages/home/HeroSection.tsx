import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import SnowParticles from '@/components/SnowParticles';

interface Slide {
  tag: string;
  headline: string;
  description: string;
  cta: string;
  to: string;
  image: string;
  snow: boolean;
}

const slides: Slide[] = [
  {
    tag: 'Peak Season · Jun – Aug',
    headline: 'Summer Trekking Season Is Open',
    description: 'Book your K2 Base Camp, Snow Lake, or Fairy Meadows trek before spaces fill.',
    cta: 'Explore Treks',
    to: '/treks',
    image: 'https://images.unsplash.com/photo-1597350340158-6b2c2ff93a3e?w=1600&q=80&auto=format&fit=crop',
    snow: true,
  },
  {
    tag: 'Winter · Dec – Mar',
    headline: 'Best of Winter — Ski Tours in Naltar',
    description: 'Backcountry powder through pine forests and open bowls in the Karakoram.',
    cta: 'View Ski Tours',
    to: '/ski-tours',
    image: 'https://images.unsplash.com/photo-1585654766816-8a9fe569d445?w=1600&q=80&auto=format&fit=crop',
    snow: true,
  },
  {
    tag: 'Limited · March Only',
    headline: 'Nowruz Festival Cultural Tour',
    description: 'Traditional music, dancing, and feasts in mountain villages — a once-a-year experience.',
    cta: 'Learn More',
    to: '/tours/nowruz-festival',
    image: 'https://images.unsplash.com/photo-1625865447666-ed0685236b85?w=1600&q=80&auto=format&fit=crop',
    snow: false,
  },
  {
    tag: 'Expeditions · 8,000m+',
    headline: 'Conquer the World\'s Highest Peaks',
    description: 'K2, Broad Peak, Gasherbrum — full expedition support for serious mountaineers.',
    cta: 'View Expeditions',
    to: '/expeditions',
    image: 'https://images.unsplash.com/photo-1633100291356-19e4e0dcb98f?w=1600&q=80&auto=format&fit=crop',
    snow: true,
  },
];

const AUTO_INTERVAL = 6000;
const RESUME_DELAY = 8000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent(i => (i + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(i => (i - 1 + slides.length) % slides.length);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  // Resume after user interaction
  useEffect(() => {
    if (!paused) return;
    const id = setTimeout(() => setPaused(false), RESUME_DELAY);
    return () => clearTimeout(id);
  }, [paused, current]);

  const handleUserNav = (action: () => void) => {
    setPaused(true);
    action();
  };

  const slide = slides[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <section
      className="relative w-full h-[85vh] min-h-[500px] max-h-[800px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slide images */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.img
          key={current}
          src={slide.image}
          alt={slide.headline}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />

      {/* Snow particles for applicable slides */}
      {slide.snow && <SnowParticles count={40} />}

      {/* Slide content */}
      <div className="relative h-full flex flex-col justify-end px-6 md:px-12 pb-24 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-white/60 mb-3">{slide.tag}</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white max-w-2xl leading-[1.1]">{slide.headline}</h2>
            <p className="text-base md:text-lg text-white/80 mt-3 max-w-lg">{slide.description}</p>
            <div className="mt-6">
              <Link
                to={slide.to}
                className="inline-block px-7 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                {slide.cta} →
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button
        onClick={() => handleUserNav(prev)}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-black/40 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => handleUserNav(next)}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/25 bg-black/20 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-black/40 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleUserNav(() => goTo(i))}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white scale-110' : 'bg-white/40 hover:bg-white/60'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
