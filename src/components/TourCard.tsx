import { motion } from 'framer-motion';
import { Clock, Mountain, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Tour } from '@/data';

export default function TourCard({ tour, index = 0 }: { tour: Tour; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-xl border border-border/50 overflow-hidden bg-card transition-all duration-500 hover:shadow-xl hover:shadow-black/15 hover:-translate-y-1"
    >
      <div className="relative h-52 overflow-hidden bg-muted">
        <img
          src={tour.image}
          alt={tour.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-base">{tour.name}</h3>
        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{tour.description}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-3">
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{tour.duration}</span>
          <span className="flex items-center gap-1"><Mountain className="w-3.5 h-3.5" />{tour.altitude}</span>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
          <span className="font-semibold">
            {tour.originalPrice && <span className="line-through text-muted-foreground font-normal text-sm mr-1.5">${tour.originalPrice.toLocaleString()}</span>}
            From ${tour.price.toLocaleString()}
          </span>
          <Link
            to={`/tours/${tour.id}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary-foreground bg-primary px-3.5 py-1.5 rounded-full transition-opacity hover:opacity-90"
          >
            Details <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
