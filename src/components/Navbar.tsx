import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mountain, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const UTILITY_BAR_HEIGHT = 34; // matches TopUtilityBar approx height

const links = [
  { label: 'Home', to: '/' },
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
    const handleScroll = () => {
      // Switch to solid background once leaving hero section
      const heroHeightVH = location.pathname === '/' ? 85 : 32;
      const heroHeightPx = (window.innerHeight * heroHeightVH) / 100;
      setScrolled(window.scrollY > heroHeightPx - 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);

  return (
    <nav
      className={`w-full transition-all duration-300 ${
        scrolled ? 'bg-background shadow-sm border-b border-border' : 'bg-background/30 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/images/logo.png?v=2" alt="K2 Adventure Pakistan" className="h-10 w-auto object-contain" />
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
