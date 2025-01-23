
import PropTypes from "prop-types";
import Image from "next/image";
import Hyperlink from "@components/ui/Hyperlink";
import { formatDate, formatTime } from "@lib/utils";
import { PiCalendarDotsFill, PiMapPinAreaFill  } from 'react-icons/pi'; 

const EventCard = ({ event , locale}) => {
  const { id, date, location, title, images, description, links } = event;

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
        <h5 className="h5 text-p4 line-clamp-1">{title}</h5>
        <div className="flex items-center my-3 gap-2">
            <PiMapPinAreaFill color="white" size={26}/>
            <p className="body-3 text-p5 event_card_location">{location}</p>
        </div>
        <div className="flex items-center gap-2">
          <PiCalendarDotsFill color="white" size={26}/>
          <p className="body-3 text-p5 event_card_date">{formatDate(date,locale)}</p>
          <div className="dot" />
          <p className="body-3 text-p5 event_card_date">{formatTime(date,locale)}</p>
        </div>
      </div>
      <hr className="mx-0 my-4 border-top border-solid border-s3 opacity-100" />
      <div className="flex gap-2"> {/* Flex container for the hyperlinks */}
        <Hyperlink className="uppercase h6 text-p7 border border-p7 focus:ring-4  focus:ring-p7/30 rounded-14 px-5 focus:outline-none" arrow={false} href={links[0].url}>
          Fill the form
        </Hyperlink>
        <Hyperlink className="uppercase h6 text-p4" arrow={true} href={`/events/${id}`}>
          View details
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

