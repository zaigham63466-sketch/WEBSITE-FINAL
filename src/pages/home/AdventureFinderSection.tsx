import { useState } from 'react';
import { tours } from '@/data';
import { Compass, Clock, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import { Link } from 'react-router-dom';

const levels = ['Beginner', 'Intermediate', 'Expert'];
const durations = ['5–7 days', '8–14 days', '15+ days'];
const tags = ['Snow Peaks', 'Green Valleys', 'Culture', 'Camping', 'Photography', 'Skiing', 'Homestay', 'Festival'];
const tagMap: Record<string, string> = { 'Snow Peaks': 'snow-peaks', 'Green Valleys': 'green-valleys', Culture: 'culture', Camping: 'camping', Photography: 'photography', Skiing: 'skiing', Homestay: 'homestay', Festival: 'festival' };
const diffMap: Record<string, string[]> = { Beginner: ['Leisure', 'Easy', 'Moderate'], Intermediate: ['Moderate', 'Challenging'], Expert: ['Challenging', 'Expert'] };
const durMap: Record<string, [number, number]> = { '5–7 days': [1, 7], '8–14 days': [8, 14], '15+ days': [15, 999] };

export default function AdventureFinderSection() {
  const [step, setStep] = useState(0);
  const [level, setLevel] = useState('');
  const [dur, setDur] = useState('');
  const [sel, setSel] = useState<string[]>([]);
  const [result, setResult] = useState<typeof tours[0] | null>(null);

  const toggle = (t: string) => setSel(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t]);

  const find = () => {
    const d = diffMap[level] || [];
    const [mn, mx] = durMap[dur] || [1, 999];
    const st = sel.map(t => tagMap[t]).filter(Boolean);
    const sorted = tours.filter(t => d.includes(t.difficulty) && t.durationDays >= mn && t.durationDays <= mx)
      .sort((a, b) => st.filter(s => b.tags.includes(s)).length - st.filter(s => a.tags.includes(s)).length);
    setResult(sorted[0] || tours[0]);
  };

  const reset = () => { setStep(0); setLevel(''); setDur(''); setSel([]); setResult(null); };

  const stepIcons = [Compass, Clock, Sparkles];
  const StepIcon = stepIcons[step] || Compass;

  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <ScrollReveal>
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 text-center">Interactive</p>
          <h2 className="text-3xl md:text-4xl font-bold text-center">Find Your Adventure</h2>
          <p className="text-muted-foreground mt-3 text-center">Answer three questions and we'll match your perfect trek.</p>
        </ScrollReveal>
        <div className="mt-12 bg-card border border-border rounded-2xl p-8">
          <AnimatePresence mode="wait">
            {!result ? (
              <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="flex items-center gap-2 mb-5"><StepIcon className="w-4 h-4 text-primary" /><span className="text-base text-muted-foreground">Step {step + 1} of 3</span></div>
                {step === 0 && <>
                  <h3 className="font-semibold text-lg mb-4">What's your experience level?</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {levels.map(l => <button key={l} onClick={() => { setLevel(l); setStep(1); }} className="p-4 rounded-xl border border-border text-base font-medium hover:border-primary/50 transition-colors">{l}</button>)}
                  </div>
                </>}
                {step === 1 && <>
                  <h3 className="font-semibold text-lg mb-4">How many days do you have?</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {durations.map(d => <button key={d} onClick={() => { setDur(d); setStep(2); }} className="p-4 rounded-xl border border-border text-base font-medium hover:border-primary/50 transition-colors">{d}</button>)}
                  </div>
                </>}
                {step === 2 && <>
                  <h3 className="font-semibold text-lg mb-4">What do you want to experience?</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {tags.map(t => <button key={t} onClick={() => toggle(t)} className={`px-4 py-2 rounded-full border text-base transition-colors ${sel.includes(t) ? 'border-primary bg-accent text-accent-foreground' : 'border-border hover:border-primary/50'}`}>{t}</button>)}
                  </div>
                  <button onClick={find} className="w-full py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2">Find My Adventure <ArrowRight className="w-4 h-4" /></button>
                </>}
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <p className="text-sm text-primary font-medium mb-1">Your Perfect Match</p>
                <h3 className="text-xl font-bold">{result.name}</h3>
                <p className="text-muted-foreground mt-1">{result.description}</p>
                <p className="text-base text-muted-foreground mt-3">{result.duration} · {result.altitude} · {result.difficulty} · From ${result.price.toLocaleString()}</p>
                <div className="flex gap-3 mt-6">
                  <Link to="/contact" className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-base font-medium hover:opacity-90 transition-opacity">Explore This Trek</Link>
                  <button onClick={reset} className="px-6 py-2.5 border border-border rounded-full text-base font-medium hover:bg-accent transition-colors flex items-center gap-2"><RotateCcw className="w-3.5 h-3.5" />Start Over</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
