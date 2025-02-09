
import PropTypes from "prop-types";
import Hyperlink from "@components/ui/Hyperlink";
import { formatDate, formatTime, hasDatePassed } from "@lib/utils";
import { PiCalendarDotsFill, PiMapPinAreaFill, PiClockFill} from 'react-icons/pi'; 
import { useTranslations } from 'next-intl';
import Link from "@node_modules/next/link";

const EventCard = ({ event , locale}) => {
  const { id, date, location, title, images, description, links } = event;
  const eventTranslations = useTranslations('EventCard');

  return (
    <li key={id} className="event-card group">
      {images && images.length > 0 && (
        <img
          src={images[0]}
          alt={title}
          className="event-card_img"
        />
      )}
      <div className="mt-5">
        <div className="relative flex flex-wrap gap-2 items-center pb-4">
          {event.keywords.map((keyword, index) => (
              <div
                key={index}
                className="flex gap-1 small-2 rounded-20 relative z-2 border-2 px-4 py-1.5 uppercase border-p3 text-p3"
              >
                {keyword}
              </div>
            ))}
          </div>
        <h5 className="h5 text-p3 line-clamp-1">{title}</h5>
        <div className="relative flex items-center my-3 gap-3">
            <PiMapPinAreaFill className="text-p4" size={26}/>
            <p className="body-2 event_card_location">{location}</p>
        </div>
        <div className="flex items-center my-3 gap-3">
          <PiCalendarDotsFill  className="text-p4" size={26}/>
          <p className="body-2 event_card_date">{formatDate(date,locale)}</p>     
        </div>   
        <div className="flex items-center my-3 gap-3">
          <PiClockFill className="text-p4" size={26}/>
          <p className="body-2  event_card_date">{formatTime(date,locale)}</p>
        </div>
      </div>
      <hr className="mx-0 my-4 border-top border-solid border-p2 opacity-100" />
      <div className="flex justify-center gap-5">
          { !hasDatePassed(date) ? (
            <Link className="uppercase base-bold bg-p3 text-s2 hover:bg-p3/80 focus:ring-4 focus:ring-p3/30 rounded-14 px-5 focus:outline-none" href={links[0].url}>
              Fill the form
            </Link>
          ) : (
            <p className="uppercase body-2 text-red-400 base-bold flex items-center">
              {eventTranslations('isOver')}
            </p>     
          )}
          <Hyperlink className="uppercase text-p4" arrow={true} href={`/events/${id}`}>
            {eventTranslations('read_more')}
          </Hyperlink>
      </div>
    </li>
  );
};

// PropTypes for EventCard
EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export const EventCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index) => (
      <li key={`skeleton-${index}`}>
        <div className="event-card_skeleton" />
      </li>
    ))}
  </>
);

export default EventCard;

