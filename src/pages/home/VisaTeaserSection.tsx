import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';
import { ArrowRight, FileText } from 'lucide-react';

export default function VisaTeaserSection() {
  return (
    <section className="py-16 px-6 bg-card/50 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="bg-background rounded-2xl border border-border p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
            
            <div className="w-full md:w-1/3 aspect-square md:aspect-[4/3] rounded-xl overflow-hidden bg-muted shrink-0 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800&q=80&auto=format&fit=crop" 
                alt="Pakistan Travel Passport" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 z-20 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                <FileText className="w-5 h-5" />
              </div>
            </div>

            <div className="flex-1 space-y-4 text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-accent rounded-full text-xs font-semibold text-primary">Travel Planning</div>
              <h2 className="text-2xl md:text-3xl font-bold">Pakistan Visa – Everything You Need to Know</h2>
              <p className="text-muted-foreground leading-relaxed">
                Planning a trek in the Karakoram? Navigating the Pakistan Online Visa System is your first step. Learn which visa you need, what documents to prepare, and how to get your restricted area permits without the headache.
              </p>
              <div className="pt-2">
                <Link to="/pakistan-visa-guide" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity group">
                  Read the Full Guide
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
