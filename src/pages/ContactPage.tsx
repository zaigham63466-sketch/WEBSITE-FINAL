import { useState } from 'react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Mail, Phone, MessageCircle, FileText } from 'lucide-react';
import { toast } from 'sonner';

const contacts = [
  { icon: Mail, title: 'Email Us', detail: 'info@k2adventure.com', href: 'mailto:info@k2adventure.com' },
  { icon: MessageCircle, title: 'WhatsApp', detail: '+92 355 542 7999', href: 'https://wa.me/923555427999' },
  { icon: Phone, title: 'Emergency', detail: '+92 355 542 7999', href: 'tel:+923555427999' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', trek: '', dates: '', group: '', message: '' });
  const [sending, setSending] = useState(false);
  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { toast.error('Please fill required fields.'); return; }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Inquiry sent! We'll reply within 24 hours.");
      setForm({ name: '', email: '', phone: '', trek: '', dates: '', group: '', message: '' });
    }, 1000);
  };

  const inputCls = 'w-full px-4 py-3 rounded-xl bg-background border border-border text-sm focus:outline-none focus:ring-1 focus:ring-ring placeholder:text-muted-foreground';

  return (
    <>
      <PageHero tracker="Get in Touch" title="Reach Our Basecamp" subtitle="We respond within 24 hours — faster in peak season." />

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 0.1}>
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors text-center">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-3"><c.icon className="w-5 h-5 text-primary" /></div>
                <p className="font-semibold">{c.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{c.detail}</p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-card/50">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal><h2 className="text-2xl font-bold text-center mb-8">Send an Inquiry</h2></ScrollReveal>
          <form onSubmit={submit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Your Name *" value={form.name} onChange={e => set('name', e.target.value)} className={inputCls} />
              <input placeholder="Email *" type="email" value={form.email} onChange={e => set('email', e.target.value)} className={inputCls} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Phone / WhatsApp" value={form.phone} onChange={e => set('phone', e.target.value)} className={inputCls} />
              <input placeholder="Interested Trek" value={form.trek} onChange={e => set('trek', e.target.value)} className={inputCls} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Travel Dates" value={form.dates} onChange={e => set('dates', e.target.value)} className={inputCls} />
              <input placeholder="Group Size" value={form.group} onChange={e => set('group', e.target.value)} className={inputCls} />
            </div>
            <textarea placeholder="Your Message *" rows={4} value={form.message} onChange={e => set('message', e.target.value)} className={`${inputCls} resize-none`} />
            <button type="submit" disabled={sending} className="w-full py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity disabled:opacity-50">
              {sending ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="border border-border rounded-xl p-6 bg-card">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Visa Assistance</h3>
                  <p className="text-muted-foreground mt-2 text-base leading-relaxed">
                    Once your tour deposit is confirmed, we issue a formal Letter of Invitation (LOI) to support your visa application. Most nationalities can obtain a Pakistan e-Visa or visa on arrival — we provide step-by-step guidance for your country after booking.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <h3 className="font-semibold mb-4">Our Office</h3>
            <p className="text-sm text-muted-foreground">K2Adventure Treks & Expeditions<br />College Road, Skardu<br />Gilgit-Baltistan, Pakistan</p>
            <div className="mt-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-2">Office Hours</p>
              <p>Mon – Sat: 9:00 AM – 6:00 PM (PKT)</p>
              <p>Sun: By appointment only</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="aspect-[4/3] rounded-xl bg-muted border border-border overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52136.95!2d75.60!3d35.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e463f0e4f1d9b1%3A0x6c21d3a17c5b8d96!2sSkardu!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
                width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Location" />
            </div>
          </ScrollReveal>
        </div>
      </section>


    </>
  );
}
