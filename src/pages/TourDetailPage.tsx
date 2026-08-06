import { useParams, Link, useNavigate } from 'react-router-dom';
import { tours } from '@/data';
import { getTourDetails } from '@/data/itineraries';
import TourHero from '@/components/tour-detail/TourHero';
import TourOverview from '@/components/tour-detail/TourOverview';
import TourItinerary from '@/components/tour-detail/TourItinerary';
import TourInclusions from '@/components/tour-detail/TourInclusions';
import TourInquiryForm from '@/components/tour-detail/TourInquiryForm';
import RelatedTours from '@/components/tour-detail/RelatedTours';
import { useEffect } from 'react';

export default function TourDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const tour = tours.find(t => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Tour Not Found</h1>
        <p className="text-muted-foreground">The tour you're looking for doesn't exist.</p>
        <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
      </div>
    );
  }

  const details = getTourDetails(tour.id);
  const related = tours.filter(t => t.category === tour.category && t.id !== tour.id).slice(0, 3);

  return (
    <>
      <TourHero tour={tour} />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <TourOverview tour={tour} highlights={details.highlights} />
            <TourItinerary itinerary={details.itinerary} />
            <TourInclusions included={details.included} excluded={details.excluded} />
          </div>
          <div>
            <TourInquiryForm tour={tour} />
          </div>
        </div>
      </div>
      {related.length > 0 && <RelatedTours tours={related} />}
    </>
  );
}
