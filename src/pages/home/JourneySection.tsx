import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Snowflake, Mountain, TreePine, Leaf, Home } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const zones = [
  {
    icon: Snowflake, title: 'Snow & Ice', alt: '5,000m+',
    desc: 'Vast glaciers, crevasse fields, and the silence of the highest Karakoram.',
    gradient: 'from-[hsl(210,35%,88%)] via-[hsl(215,30%,82%)] to-[hsl(220,25%,78%)]',
    overlayFrom: 'from-[hsl(210,30%,95%)]/80',
    overlayTo: 'to-[hsl(215,20%,93%)]/80',
  },
  {
    icon: Mountain, title: 'Alpine Rock', alt: '3,500m',
    desc: 'Exposed granite walls, scree slopes, and the raw geology of ancient peaks.',
    gradient: 'from-[hsl(220,15%,80%)] via-[hsl(25,12%,78%)] to-[hsl(30,15%,75%)]',
    overlayFrom: 'from-[hsl(215,20%,93%)]/80',
    overlayTo: 'to-[hsl(30,18%,94%)]/80',
  },
  {
    icon: TreePine, title: 'Pine Forests', alt: '2,500m',
    desc: 'Dense cedar and juniper forests alive with birdsong and mountain streams.',
    gradient: 'from-[hsl(140,20%,72%)] via-[hsl(145,22%,68%)] to-[hsl(150,18%,65%)]',
    overlayFrom: 'from-[hsl(30,18%,94%)]/80',
    overlayTo: 'to-[hsl(150,15%,93%)]/80',
  },
  {
    icon: Leaf, title: 'Green Valleys', alt: '1,800m',
    desc: 'Terraced orchards, wildflower meadows, and emerald rivers cutting through valleys.',
    gradient: 'from-[hsl(100,25%,75%)] via-[hsl(90,20%,72%)] to-[hsl(80,22%,70%)]',
    overlayFrom: 'from-[hsl(150,15%,93%)]/80',
    overlayTo: 'to-[hsl(100,15%,94%)]/80',
  },
  {
    icon: Home, title: 'Village Life', alt: '1,200m',
    desc: 'Stone-built homes, warm chai, and the extraordinary hospitality of mountain communities.',
    gradient: 'from-[hsl(35,30%,75%)] via-[hsl(30,25%,72%)] to-[hsl(25,20%,70%)]',
    overlayFrom: 'from-[hsl(100,15%,94%)]/80',
    overlayTo: 'to-[hsl(35,25%,94%)]/80',
  },
];

function JourneyZone({ zone, index }: { zone: typeof zones[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentX = useTransform(scrollYProgress, [0, 0.3, 0.5], [index % 2 === 0 ? -60 : 60, 0, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25, 0.45], [0, 0.5, 1]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className={`absolute inset-x-0 -top-[30%] bottom-0 bg-gradient-to-br ${zone.gradient}`}
        style={{ y: bgY }}
      />

      {/* Semi-transparent tint overlay for text readability */}
      <div className={`absolute inset-0 bg-gradient-to-b ${zone.overlayFrom} ${zone.overlayTo}`} />

      <div className="relative max-w-5xl mx-auto px-6 md:px-20 py-28">
        {/* Altitude marker on the line */}
        <div className="absolute left-6 md:left-12 top-28 -translate-x-1/2 z-10">
          <div className="w-3 h-3 rounded-full bg-primary border-2 border-background" />
          <span className="absolute left-5 top-0 text-sm text-muted-foreground whitespace-nowrap font-medium">
            {zone.alt}
          </span>
        </div>

        {/* Content with slide-in animation */}
        <motion.div
          style={{ x: contentX, opacity: contentOpacity }}
          className="ml-8 md:ml-16"
        >
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center shrink-0 shadow-sm">
              <zone.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{zone.title}</h3>
              <p className="text-muted-foreground mt-2 max-w-lg text-base leading-relaxed">{zone.desc}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function JourneySection() {
  return (
    <section>
      <div className="py-20 px-6 text-center">
        <ScrollReveal>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">The Descent</p>
          <h2 className="text-3xl md:text-4xl font-bold">Journey Through Pakistan</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            From the icy summit to the warm valley floor — a vertical story told through altitude.
          </p>
        </ScrollReveal>
      </div>
      <div className="relative">
        {/* Altitude line */}
        <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-border/50 z-10" />
        {zones.map((zone, i) => (
          <JourneyZone key={zone.title} zone={zone} index={i} />
        ))}
      </div>
    </section>
  );
}
