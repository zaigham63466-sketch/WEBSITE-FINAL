import { Check, X, CircleCheck, Info, CircleX } from 'lucide-react';

export default function TourInclusions({ included, excluded }: { included: string[]; excluded: string[] }) {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold mb-6">What's Included</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-primary mb-4 flex items-center gap-2">
              <Check className="w-5 h-5" /> Included
            </h3>
            <ul className="space-y-2.5">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-base text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-xl p-6">
            <h3 className="font-semibold text-destructive mb-4 flex items-center gap-2">
              <X className="w-5 h-5" /> Not Included
            </h3>
            <ul className="space-y-2.5">
              {excluded.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-base text-muted-foreground">
                  <X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="font-semibold text-lg mb-4">Cancellation & Refund Policy</h3>
        <ul className="space-y-3 text-base text-muted-foreground">
          <li className="flex items-start gap-2">
            <CircleCheck className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span><strong className="text-foreground">60+ days</strong> before departure — full refund</span>
          </li>
          <li className="flex items-start gap-2">
            <Info className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
            <span><strong className="text-foreground">30–60 days</strong> before departure — 50% refund</span>
          </li>
          <li className="flex items-start gap-2">
            <CircleX className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
            <span><strong className="text-foreground">Under 30 days</strong> — no refund</span>
          </li>
        </ul>
        <p className="text-sm text-muted-foreground mt-4">We strongly recommend purchasing travel and rescue insurance before departure.</p>
      </div>
    </div>
  );
}
