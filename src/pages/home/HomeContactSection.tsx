import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const WHATSAPP_URL = 'https://wa.me/923555427999';

export default function HomeContactSection() {
  return (
    <section className="py-24 px-6">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Plan Your Adventure</h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Whether you're eyeing K2's summit or a gentle valley stroll, we'll craft the perfect trip for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Link to="/contact" className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity">
              Send an Inquiry
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-border rounded-full font-medium hover:bg-accent transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
          <p className="text-sm text-muted-foreground mt-5">We respond within 24 hours.</p>
        </div>
      </ScrollReveal>
    </section>
  );
}
