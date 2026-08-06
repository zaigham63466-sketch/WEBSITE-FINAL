import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import type { Tour } from '@/data';
import { Send } from 'lucide-react';

export default function TourInquiryForm({ tour }: { tour: Tour }) {
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', groupSize: '', date: '', message: '' });

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error('Please fill in your name and email.');
      return;
    }
    setSending(true);
    // Simulate submission
    setTimeout(() => {
      setSending(false);
      toast.success('Inquiry sent! We\'ll get back to you within 24 hours.');
      setForm({ name: '', email: '', phone: '', groupSize: '', date: '', message: '' });
    }, 1200);
  };

  return (
    <div className="sticky top-24">
      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
        <div className="mb-6">
          <p className="text-base text-muted-foreground">Starting from</p>
          {tour.originalPrice && <p className="text-lg text-muted-foreground line-through">${tour.originalPrice.toLocaleString()}</p>}
          <p className="text-3xl font-bold">${tour.price.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground mt-1">per person</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" value={form.name} onChange={e => update('name', e.target.value)} placeholder="Your name" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="you@example.com" className="mt-1" />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="+1 234 567 890" className="mt-1" />
          </div>
          <div>
            <Label>Group Size</Label>
            <Select value={form.groupSize} onValueChange={v => update('groupSize', v)}>
              <SelectTrigger className="mt-1"><SelectValue placeholder="Select size" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Solo</SelectItem>
                <SelectItem value="2">2 People</SelectItem>
                <SelectItem value="3-5">3–5 People</SelectItem>
                <SelectItem value="6-10">6–10 People</SelectItem>
                <SelectItem value="10+">10+ People</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="date">Preferred Date</Label>
            <Input id="date" type="date" value={form.date} onChange={e => update('date', e.target.value)} className="mt-1" />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" value={form.message} onChange={e => update('message', e.target.value)} placeholder="Any special requests or questions..." rows={3} className="mt-1" />
          </div>
          <Button type="submit" className="w-full" disabled={sending}>
            {sending ? 'Sending...' : <><Send className="w-4 h-4 mr-2" /> Send Inquiry</>}
          </Button>
        </form>

        <p className="text-sm text-muted-foreground text-center mt-4">
          No payment required. We'll respond within 24 hours.
        </p>

        <div className="border-t border-border mt-5 pt-4">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            We accept international bank transfer, PayPal/Wise, and credit card. No payment is taken at inquiry stage.
          </p>
        </div>
      </div>
    </div>
  );
}
