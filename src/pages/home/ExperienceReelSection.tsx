import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// ─── Scene data ───
const scenes = [
  {
    text: '5 AM. The silence is absolute.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80&auto=format&fit=crop',
    tint: 'hsla(210, 60%, 25%, 0.45)',   // cold blue
  },
  {
    text: "Ice that hasn't melted in centuries.",
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1600&q=80&auto=format&fit=crop',
    tint: 'hsla(220, 20%, 15%, 0.35)',   // neutral dark
  },
  {
    text: 'The Milky Way, close enough to touch.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1600&q=80&auto=format&fit=crop',
    tint: 'hsla(240, 50%, 15%, 0.50)',   // deep indigo
  },
  {
    text: 'In the mountains, there are no strangers.',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1600&q=80&auto=format&fit=crop',
    tint: 'hsla(30, 60%, 25%, 0.40)',    // warm amber
  },
  {
    text: 'The reason you came.',
    image: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=1600&q=80&auto=format&fit=crop',
    tint: 'hsla(200, 10%, 10%, 0.20)',   // near clear
  },
];

// ─── Particle generation ───
type ParticleStyle = 'snow' | 'ice' | 'stars' | 'embers' | 'mist';
const PARTICLE_COUNT = 22;

function generateParticles() {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 6,
    duration: 4 + Math.random() * 6,
    size: 2 + Math.random() * 4,
    drift: -30 + Math.random() * 60,
  }));
}

function Particles({ style }: { style: ParticleStyle }) {
  const particles = useMemo(generateParticles, []);

  const classMap: Record<ParticleStyle, string> = {
    snow: 'portal-particle--snow',
    ice: 'portal-particle--ice',
    stars: 'portal-particle--stars',
    embers: 'portal-particle--embers',
    mist: 'portal-particle--mist',
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map(p => (
        <div
          key={p.id}
          className={`absolute rounded-full ${classMap[style]}`}
          style={{
            left: `${p.left}%`,
            width: style === 'mist' ? `${p.size * 8}px` : `${p.size}px`,
            height: style === 'mist' ? `${p.size * 4}px` : `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--p-drift': `${p.drift}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

// ─── Altitude counter ───
function AltitudeCounter({ progress }: { progress: number }) {
  const alt = Math.round(1200 + progress * (5150 - 1200));
  const formatted = alt.toLocaleString();

  return (
    <div className="absolute bottom-8 left-8 z-20 flex items-end gap-2 select-none">
      <span className="text-white/30 text-xs tracking-widest uppercase font-medium">Alt</span>
      <span
        className="text-white/70 text-2xl md:text-3xl font-light tabular-nums portal-altitude-pulse"
        key={Math.floor(alt / 100)} // re-trigger pulse per 100m jump
      >
        {formatted}
        <span className="text-base ml-0.5">m</span>
      </span>
    </div>
  );
}

// ─── Main component ───
export default function ExperienceReelSection() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start start', 'end end'],
  });

  // Determine current phase (0–4) and progress within phase
  const [phase, setPhase] = useState(0);
  const [scrollProg, setScrollProg] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', v => {
    // reserve last 15% for CTA
    const adjusted = Math.min(v / 0.85, 1);
    const p = Math.min(4, Math.floor(adjusted * 5));
    setPhase(p);
    setScrollProg(adjusted);
  });

  // Image opacities — each image fades in then out across its phase
  const img0 = useTransform(scrollYProgress, [0, 0.12, 0.15, 0.17], [1, 1, 0.3, 0]);
  const img1 = useTransform(scrollYProgress, [0.12, 0.17, 0.29, 0.32, 0.34], [0, 0.3, 1, 0.3, 0]);
  const img2 = useTransform(scrollYProgress, [0.29, 0.34, 0.46, 0.49, 0.51], [0, 0.3, 1, 0.3, 0]);
  const img3 = useTransform(scrollYProgress, [0.46, 0.51, 0.63, 0.66, 0.68], [0, 0.3, 1, 0.3, 0]);
  const img4 = useTransform(scrollYProgress, [0.63, 0.68, 0.85], [0, 0.3, 1]);
  const imgOpacities = [img0, img1, img2, img3, img4];

  // Parallax shift per image
  const imgY0 = useTransform(scrollYProgress, [0, 0.17], ['0%', '-8%']);
  const imgY1 = useTransform(scrollYProgress, [0.12, 0.34], ['5%', '-8%']);
  const imgY2 = useTransform(scrollYProgress, [0.29, 0.51], ['5%', '-8%']);
  const imgY3 = useTransform(scrollYProgress, [0.46, 0.68], ['5%', '-8%']);
  const imgY4 = useTransform(scrollYProgress, [0.63, 0.85], ['5%', '-8%']);
  const imgYs = [imgY0, imgY1, imgY2, imgY3, imgY4];

  // Text opacity — fade in center of each phase
  const textOpacity = useTransform(scrollYProgress, [
    0,    0.04, 0.12, 0.15,   // phase 0
    0.17, 0.21, 0.29, 0.32,   // phase 1
    0.34, 0.38, 0.46, 0.49,   // phase 2
    0.51, 0.55, 0.63, 0.66,   // phase 3
    0.68, 0.72, 0.82, 0.85,   // phase 4
  ], [
    0, 1, 1, 0,
    0, 1, 1, 0,
    0, 1, 1, 0,
    0, 1, 1, 0,
    0, 1, 1, 0,
  ]);

  const textY = useTransform(scrollYProgress, [
    0,    0.04, 0.12, 0.15,
    0.17, 0.21, 0.29, 0.32,
    0.34, 0.38, 0.46, 0.49,
    0.51, 0.55, 0.63, 0.66,
    0.68, 0.72, 0.82, 0.85,
  ], [
    30, 0, 0, -20,
    30, 0, 0, -20,
    30, 0, 0, -20,
    30, 0, 0, -20,
    30, 0, 0, -20,
  ]);

  // CTA fade
  const ctaOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.85, 0.95], [30, 0]);

  const particleStyles: ParticleStyle[] = ['snow', 'ice', 'stars', 'embers', 'mist'];

  return (
    <section ref={wrapperRef} className="relative" style={{ height: '280vh' }}>
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        {/* Background images — all stacked, opacity-controlled */}
        {scenes.map((scene, i) => (
          <motion.img
            key={i}
            src={scene.image}
            alt=""
            style={{ opacity: imgOpacities[i], y: imgYs[i] }}
            className="absolute inset-0 w-full h-[115%] object-cover will-change-transform"
            loading={i < 2 ? 'eager' : 'lazy'}
          />
        ))}

        {/* Color tint overlay — crossfades */}
        <div
          className="absolute inset-0 z-[5] transition-colors duration-1000 ease-in-out"
          style={{ backgroundColor: scenes[phase]?.tint }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 z-[6] portal-vignette" />

        {/* Particles — only render current phase */}
        <div className="absolute inset-0 z-[7]">
          <Particles style={particleStyles[phase]} />
        </div>

        {/* Center text */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <motion.p
            style={{ opacity: textOpacity, y: textY }}
            className="text-white text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] font-light leading-relaxed max-w-2xl text-center italic tracking-wide will-change-transform"
          >
            {scenes[phase]?.text}
          </motion.p>
        </div>

        {/* Altitude counter */}
        <AltitudeCounter progress={Math.min(scrollProg, 1)} />

        {/* Scroll hint at start */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll to experience</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <svg width="16" height="16" viewBox="0 0 16 16" className="text-white/40" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 6l4 4 4-4" />
            </svg>
          </motion.div>
        </motion.div>

        {/* CTA ending */}
        <motion.div
          style={{ opacity: ctaOpacity, y: ctaY }}
          className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-5 pointer-events-none"
        >
          <p className="text-white/50 text-xs tracking-[0.3em] uppercase">
            K2 Adventure Treks & Expeditions
          </p>
          <h3 className="text-white text-3xl md:text-4xl font-bold">
            Ready to begin?
          </h3>
          <Link
            to="/treks"
            className="mt-1 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity pointer-events-auto"
          >
            Explore Treks
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
