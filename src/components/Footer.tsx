import { Link } from 'react-router-dom';
import { Mountain, Instagram, Globe, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start justify-between gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src="/images/logo.png" alt="K2 Adventure Pakistan" className="h-12 w-auto object-contain" />
          </Link>
          <p className="text-base text-muted-foreground">Treks & Expeditions since 2010.<br />Skardu, Gilgit-Baltistan, Pakistan.</p>
        </div>
        <div className="flex gap-12 md:gap-16 text-base text-muted-foreground">
          <div className="space-y-2.5">
            <p className="font-medium text-foreground mb-3">Explore</p>
            <Link to="/treks" className="block hover:text-foreground transition-colors">Treks</Link>
            <Link to="/expeditions" className="block hover:text-foreground transition-colors">Expeditions</Link>
            <Link to="/valleys" className="block hover:text-foreground transition-colors">Valleys</Link>
            <Link to="/ski-tours" className="block hover:text-foreground transition-colors">Ski Tours</Link>
            <Link to="/cultural-tours" className="block hover:text-foreground transition-colors">Cultural Tours</Link>
            <Link to="/gallery" className="block hover:text-foreground transition-colors">Gallery</Link>
          </div>
          <div className="space-y-2.5">
            <p className="font-medium text-foreground mb-3">Company</p>
            <Link to="/about" className="block hover:text-foreground transition-colors">About Us</Link>
            <Link to="/safety" className="block hover:text-foreground transition-colors">Safety</Link>
            <Link to="/pakistan-visa-guide" className="block hover:text-foreground transition-colors">Visa Guide</Link>
            <Link to="/contact" className="block hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
        <div className="flex gap-3">
          {[
            { Icon: Instagram, href: 'https://instagram.com/k2adventure' },
            { Icon: Globe, href: 'https://facebook.com/k2adventure' },
            { Icon: Youtube, href: 'https://youtube.com/@k2adventure' },
          ].map(({ Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors">
              <Icon className="w-4 h-4 text-muted-foreground" />
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">© 2026 K2Adventure Treks & Expeditions. All rights reserved.</p>
          <p className="text-xs text-muted-foreground mt-1">GB Tourism License #XXXXX · Member, Adventure Travel Trade Association (ATTA) · Pakistan Tourism Development Corp. Registered</p>
        </div>
      </div>
    </footer>
  );
}
