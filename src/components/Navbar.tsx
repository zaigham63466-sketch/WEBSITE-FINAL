import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mountain, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const UTILITY_BAR_HEIGHT = 34; // matches TopUtilityBar approx height

const links = [
  { label: 'Treks', to: '/treks' },
  { label: 'Expeditions', to: '/expeditions' },
  { label: 'Valleys', to: '/valleys' },
  { label: 'Ski Tours', to: '/ski-tours' },
  { label: 'Cultural', to: '/cultural-tours' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > UTILITY_BAR_HEIGHT);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'top-0 bg-background/95 backdrop-blur-xl shadow-sm border-b border-border/50' : 'bg-background/60 backdrop-blur-sm'}`}
      style={{ top: scrolled ? 0 : UTILITY_BAR_HEIGHT }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Mountain className="w-5 h-5 text-primary" />
          <span className="text-base font-bold tracking-tight">K2 ADVENTURE</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.to} to={l.to} className={`text-base font-medium transition-colors hover:text-foreground ${location.pathname === l.to ? 'text-foreground' : 'text-foreground/70'}`}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link to="/contact" className="hidden md:block px-5 py-2 bg-primary text-primary-foreground text-base rounded-full font-medium hover:opacity-90 transition-opacity">
          Book Now
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden p-1"><Menu className="w-5 h-5" /></button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border p-8">
            <div className="flex flex-col gap-6 mt-12">
              {links.map(l => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-lg font-medium hover:text-primary transition-colors">
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="px-5 py-3 bg-primary text-primary-foreground text-base rounded-full font-medium text-center mt-4">
                Book Now
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
