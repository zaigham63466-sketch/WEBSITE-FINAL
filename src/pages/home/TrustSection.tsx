import { Link } from 'react-router-dom';
import { ShieldCheck, Shield, FileText } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';
import { stats } from '@/data';
import ScrollReveal from '@/components/ScrollReveal';

function StatItem({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const { ref, count } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-primary">{count.toLocaleString()}{suffix}</p>
      <p className="text-sm text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

export default function TrustSection() {
  return (
    <section className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 text-center">Trust</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Why Travelers Choose Us</h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {stats.map(s => <StatItem key={s.label} {...s} />)}
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          <ScrollReveal delay={0.15}>
            <div className="bg-card border border-border rounded-xl p-6 h-full">
              <ShieldCheck className="w-6 h-6 text-primary" />
              <p className="font-semibold mt-3">Licensed & Certified</p>
              <p className="text-sm text-muted-foreground mt-1.5">GB Tourism License #XXXXX · ATTA Member · PTDC Registered</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-card border border-border rounded-xl p-6 h-full">
              <Shield className="w-6 h-6 text-primary" />
              <p className="font-semibold mt-3">Safety Protocols</p>
              <p className="text-sm text-muted-foreground mt-1.5">
                Satellite phones, daily check-ins, and evacuation plans on every trip.{' '}
                <Link to="/safety" className="text-primary hover:underline">Learn more →</Link>
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="bg-card border border-border rounded-xl p-6 h-full">
              <FileText className="w-6 h-6 text-primary" />
              <p className="font-semibold mt-3">Visa Assistance</p>
              <p className="text-sm text-muted-foreground mt-1.5">Letter of Invitation provided after deposit. Most nationalities qualify for e-Visa.</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
