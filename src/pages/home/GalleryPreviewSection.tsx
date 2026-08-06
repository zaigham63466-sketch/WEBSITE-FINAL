import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const previews = [
  { title: 'K2 at Dawn', image: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227?w=500&q=80&auto=format&fit=crop' },
  { title: 'Fairy Meadows', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80&auto=format&fit=crop' },
  { title: 'Mountain Camp', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=500&q=80&auto=format&fit=crop' },
  { title: 'Valley View', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&q=80&auto=format&fit=crop' },
];

export default function GalleryPreviewSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Gallery</p>
              <h2 className="text-3xl md:text-4xl font-bold">Captured Moments</h2>
            </div>
            <Link to="/gallery" className="hidden md:flex items-center gap-2 text-base text-primary font-medium hover:underline">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {previews.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <Link to="/gallery" className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer block">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-end p-4 bg-black/0 group-hover:bg-black/40 transition-colors">
                  <p className="text-base font-medium text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">{item.title}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <Link to="/gallery" className="flex md:hidden items-center justify-center gap-2 text-base text-primary font-medium mt-6 hover:underline">
          View Full Gallery <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
