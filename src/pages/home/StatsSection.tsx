import { useCountUp } from '@/hooks/useCountUp';
import { stats } from '@/data';
import ScrollReveal from '@/components/ScrollReveal';

function StatItem({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const { ref, count } = useCountUp(value);
  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-primary">{count.toLocaleString()}{suffix}</p>
      <p className="text-base text-muted-foreground mt-2">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 px-6 border-y border-border">
      <ScrollReveal>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(s => <StatItem key={s.label} {...s} />)}
        </div>
      </ScrollReveal>
    </section>
  );
}
