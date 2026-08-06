import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function AboutPreviewSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <ScrollReveal>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80&auto=format&fit=crop"
              alt="Mountain team at summit viewpoint"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <h2 className="text-3xl font-bold">Born in the Mountains</h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Three Gilgit-Baltistan natives turned a childhood of climbing and exploring into a world-class adventure company. We know every trail, every village, every hidden viewpoint — because we grew up here.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 text-primary font-medium mt-6 hover:underline">
            Read Our Story <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
