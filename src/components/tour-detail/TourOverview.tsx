import type { Tour } from '@/data';
import { Clock, Mountain, Calendar, TrendingUp, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const difficultyColor: Record<string, string> = {
  Leisure: 'bg-accent text-accent-foreground border-border',
  Easy: 'bg-accent text-accent-foreground border-border',
  Moderate: 'bg-accent text-accent-foreground border-border',
  Challenging: 'bg-accent text-accent-foreground border-border',
  Expert: 'bg-destructive/10 text-destructive border-destructive/20',
};

export default function TourOverview({ tour, highlights }: { tour: Tour; highlights: string[] }) {
  const stats = [
    { icon: Clock, label: 'Duration', value: tour.duration },
    { icon: Mountain, label: 'Max Altitude', value: tour.altitude },
    { icon: Calendar, label: 'Best Season', value: tour.bestSeason },
    { icon: TrendingUp, label: 'Difficulty', value: tour.difficulty },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {stats.map(s => (
          <div key={s.label} className="bg-muted/50 rounded-xl p-4 text-center">
            <s.icon className="w-5 h-5 mx-auto text-primary mb-2" />
            <p className="text-sm text-muted-foreground">{s.label}</p>
            <p className="font-semibold mt-0.5">
              {s.label === 'Difficulty' ? (
                <span className={`inline-block text-sm px-2.5 py-0.5 rounded-full border ${difficultyColor[tour.difficulty]}`}>
                  {tour.difficulty}
                </span>
              ) : s.value}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-4">Trip Highlights</h2>
      <ul className="space-y-3">
        {highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-primary mt-1 shrink-0" />
            <span className="text-muted-foreground">{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
