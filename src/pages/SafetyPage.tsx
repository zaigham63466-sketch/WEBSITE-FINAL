import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Shield, BadgeCheck, Radio, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    icon: Shield,
    title: 'Gilgit-Baltistan Is Safe for Travelers',
    text: 'Gilgit-Baltistan is a peaceful autonomous region with its own governance, distinct from the rest of Pakistan. Thousands of international trekkers visit safely every season. The Karakoram Highway is a well-maintained corridor and the local communities are famously welcoming to visitors. Foreign governments including the UK, US, and Germany currently advise that Gilgit-Baltistan is open to tourists with normal precautions.',
  },
  {
    icon: BadgeCheck,
    title: 'Guide Vetting & Certification',
    text: 'Every K2Adventure guide holds a government-issued mountaineering or trekking license, wilderness first aid certification, and a minimum of 5 years\' field experience in the Karakoram. We conduct background checks and annual re-certification for all staff. Our lead guides are trained in high-altitude rescue, crevasse extraction, and emergency medical response.',
  },
  {
    icon: Radio,
    title: 'Communication During Trips',
    text: 'All groups carry satellite phones and two-way radios. Your lead guide sends a daily check-in to our Skardu operations center with your location, weather conditions, and group status. We share a real-time GPS tracking link with your emergency contact before departure so your family always knows where you are.',
  },
  {
    icon: HeartPulse,
    title: 'Emergency & Medical Preparedness',
    text: 'Every trek carries a comprehensive first aid kit, portable oxygen, and a Gamow bag for altitude sickness. We maintain helicopter evacuation agreements with local operators and have direct lines to military rescue services. Travel and rescue insurance is mandatory for all participants — we can recommend trusted providers.',
  },
];

export default function SafetyPage() {
  return (
    <>
      <PageHero tracker="Your Safety" title="Travel Safety & Trust" subtitle="How we keep you safe in Gilgit-Baltistan." />

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-14">
          {sections.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">{s.title}</h2>
                  <p className="text-muted-foreground mt-2 text-base leading-relaxed">{s.text}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={0.5}>
            <div className="border-t border-border pt-10 text-center">
              <p className="text-muted-foreground">Have a specific safety question? We're happy to answer.</p>
              <Link to="/contact" className="inline-block mt-4 px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-base font-medium hover:opacity-90 transition-opacity">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
