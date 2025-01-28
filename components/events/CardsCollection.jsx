import React from 'react';
import EventCard from "@components/events/EventCard";

const CardsCollection = ({ events = [], maxCards = 4, locale }) => {
  const displayedEvents = events.slice(0, maxCards);

  return (
    <ul className="mt-7 card_grid">
      {displayedEvents && displayedEvents.length > 0 ? (
        displayedEvents.map((event, index) => (
          <EventCard key={event.id || index} event={event} locale={locale} />
        ))
      ) : (
        <h4 className="h4 max-md:h6 text-red-400">No Events ☹</h4>
      )}
    </ul>
  );
};

export default CardsCollection;