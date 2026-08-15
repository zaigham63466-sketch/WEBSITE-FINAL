import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

export default function VisaTeaserSection() {
  return (
    <section className="py-20 px-6 bg-card/60">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=1600&q=80&auto=format&fit=crop"
                alt="Pakistan Travel Passport"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <span className="inline-block text-xs bg-primary text-primary-foreground px-3 py-1 rounded-full font-medium">
                Travel Planning
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-4">Pakistan Visa – Everything You Need to Know</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                Planning a trek in the Karakoram? Navigating the Pakistan Online Visa System is your first step. Learn which visa you need, what documents to prepare, and how to get your restricted area permits without the headache.
              </p>
              <Link
                to="/pakistan-visa-guide"
                className="inline-flex items-center gap-1.5 text-primary font-medium mt-6 hover:underline"
              >
                Read the Full Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
