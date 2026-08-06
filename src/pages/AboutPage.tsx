import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { founders, businessInfo } from '@/data';
import { Shield, Award, Handshake, Heart, BadgeCheck, Users, Trophy, Music, Instagram, Phone } from 'lucide-react';

const values = [
  { icon: Shield, title: 'Safety', desc: 'Every decision starts with the safety of our team and trekkers.' },
  { icon: Heart, title: 'Passion', desc: "We don't just work in the mountains — we live for them." },
  { icon: Handshake, title: 'Community', desc: 'We employ local guides, porters, and cooks from Gilgit-Baltistan.' },
  { icon: Award, title: 'Excellence', desc: 'Fully licensed, certified, and committed to world-class service.' },
];

const timeline = [
  { year: '2010', event: 'K2Adventure founded in Skardu by three childhood friends.' },
  { year: '2013', event: 'First international expedition — Broad Peak with a Japanese team.' },
  { year: '2016', event: 'Expanded to valley cultural tours across Hunza, Skardu, and Ghizer.' },
  { year: '2019', event: 'Reached 100 successful expeditions with zero incidents.' },
  { year: '2023', event: 'Launched women-led trek program with female guides from Shimshal.' },
  { year: '2026', event: 'Serving trekkers from 40+ countries every season.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero tracker="Our Story" title="Born in the Mountains" subtitle="Guiding the world through Pakistan since 2010." />

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-lg text-muted-foreground leading-relaxed">
              K2Adventure was founded by three friends who grew up in the valleys of Gilgit-Baltistan.
              We started with a single tent, a dream, and an intimate knowledge of every trail in the Karakoram.
              Today, we lead over 200 expeditions a year — but our philosophy hasn't changed: show people the real Pakistan,
              keep them safe, and make them fall in love with the mountains.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 px-6 bg-card/50">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal><h2 className="text-2xl font-bold text-center mb-12">What Drives Us</h2></ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal><h2 className="text-2xl font-bold text-center mb-10">Licensing & Credentials</h2></ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: BadgeCheck, title: 'GB Tourism License', detail: '#XXXXX (placeholder)' },
              { icon: Users, title: 'ATTA Member', detail: 'Adventure Travel Trade Association' },
              { icon: Trophy, title: 'PTDC Registered', detail: 'Pakistan Tourism Development Corp.' },
            ].map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1}>
                <div className="border border-border rounded-xl p-5 text-center bg-card">
                  <c.icon className="w-6 h-6 text-primary mx-auto" />
                  <p className="font-medium mt-3 text-sm">{c.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal><h2 className="text-2xl font-bold text-center mb-14">Our Journey</h2></ScrollReveal>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            {timeline.map((t, i) => (
              <ScrollReveal key={t.year} delay={i * 0.08}>
                <div className="relative flex items-start gap-6 mb-10 ml-4">
                  <div className="absolute left-0 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 mt-1.5" />
                  <div className="ml-6">
                    <p className="text-sm text-primary font-medium">{t.year}</p>
                    <p className="text-muted-foreground mt-1">{t.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal><h2 className="text-2xl font-bold text-center mb-12">The Team</h2></ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-8 mb-10">
            {founders.map((f, i) => (
              <ScrollReveal key={f.name} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-xl p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    {f.image ? (
                      <img
                        src={f.image}
                        alt={f.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20 shrink-0"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-xl font-bold text-primary shrink-0">
                        {f.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-lg">{f.name}</h3>
                      <p className="text-sm text-primary font-medium">{f.role}</p>
                    </div>
                  </div>
                  {f.bio && <p className="text-sm text-muted-foreground leading-relaxed">{f.bio}</p>}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="border border-border rounded-xl p-6 bg-card grid sm:grid-cols-3 gap-6 text-center sm:text-left items-center">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Travel Agency</p>
                <p className="text-base font-semibold text-foreground mt-1">{businessInfo.travelAgency}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Cultural Music Partner</p>
                <div className="flex items-center justify-center sm:justify-start gap-1.5 mt-1">
                  <Music className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-base font-semibold text-foreground">{businessInfo.culturalMusicPartner}</span>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Official Contact</p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-1 text-sm">
                  <a
                    href={`https://instagram.com/${businessInfo.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    <Instagram className="w-4 h-4 text-primary shrink-0" />
                    <span>@{businessInfo.instagram}</span>
                  </a>
                  <a
                    href={`https://wa.me/${businessInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <span>{businessInfo.whatsapp}</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
