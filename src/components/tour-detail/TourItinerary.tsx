import type { ItineraryDay } from '@/data/itineraries';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function TourItinerary({ itinerary }: { itinerary: ItineraryDay[] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Day-by-Day Itinerary</h2>
      <Accordion type="single" collapsible defaultValue="day-1" className="space-y-3">
        {itinerary.map(day => (
          <AccordionItem
            key={day.day}
            value={`day-${day.day}`}
            className="bg-card border border-border rounded-lg px-5 data-[state=open]:border-primary/30 transition-colors"
          >
            <AccordionTrigger className="hover:no-underline py-4">
              <div className="flex items-center gap-3 text-left">
                <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary text-base font-bold flex items-center justify-center">
                  {day.day}
                </span>
                <span className="font-medium">{day.title}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 pl-13">
              {day.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
