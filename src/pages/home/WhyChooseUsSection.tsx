import { Shield, Users, Mountain, Award } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const features = [
  { icon: Shield, title: 'Safety First', desc: 'Emergency protocols, satellite phones, and trained medical staff on every expedition.' },
  { icon: Users, title: 'Local Expertise', desc: 'Born-and-raised Karakoram guides who know every trail, weather pattern, and shortcut.' },
  { icon: Mountain, title: '15+ Years', desc: 'Over 200 successful expeditions and a 100% safety record since 2010.' },
  { icon: Award, title: 'Licensed & Certified', desc: 'Fully licensed by Pakistan Tourism Board with international mountaineering certifications.' },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 text-center">Why Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Built for the Mountains</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="text-base text-muted-foreground mt-2">{f.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
