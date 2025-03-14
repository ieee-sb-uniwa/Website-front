
import PropTypes from "prop-types";
import Hyperlink from "@components/ui/Hyperlink";
import { isValidISODate,formatDate, formatTime, hasDatePassed, formatDate2Digits } from "@lib/utils";
import { PiCalendarDotsFill, PiMapPinAreaFill, PiClockFill} from 'react-icons/pi'; 
import { useTranslations } from 'next-intl';
import Link from "@node_modules/next/link";
import { MdEditDocument} from "react-icons/md";
import { RiHourglassFill } from "react-icons/ri";

const EventCard = ({ event , locale}) => {
  const { id, date, location, title, images, description, links } = event;
  const eventTranslations = useTranslations('EventCard');
  const imagesUrl = process.env.NEXT_PUBLIC_IMAGES_STORAGE_URL;
  return (
    <li key={id} className="event-card group">
      {images && images.length > 0 && images[0].trim() !== "" && (
        <img
          src={`${imagesUrl}${images[0]}`}
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
        {/*TITLE*/}
        <h5 className="h5 text-p3 line-clamp-1">{title}</h5>
        {/*LOCATION*/}
        {location && (
          <div className="relative flex items-center my-3 gap-3">
            <PiMapPinAreaFill className="text-p4" size={26} />
            <p className="body-2 event_card_location">{location}</p>
          </div>
        )}
        {/*DATE*/}
        {date && (
          <div className="flex items-center my-3 gap-3">
            <PiCalendarDotsFill className="text-p4" size={26} />
            <p className="body-2 event_card_date">{formatDate(date, locale)}</p>
          </div>
        )}
        {/*TIME*/}
        {date && (
          <div className="flex items-center my-3 gap-3">
            <PiClockFill className="text-p4" size={26} />
            <p className="body-2 event_card_date">{formatTime(date, locale)}</p>
          </div>
        )}
        {/*DEADLINE*/}
        {isValidISODate(date) && !hasDatePassed(date) && (
        <div className="flex items-center my-3 gap-3">
          {/*<RiHourglassFill className="text-amber-300" size={26} />*/}
          <p className="body-2 text-warning event_card_date">
            {eventTranslations('register_before')} {formatDate2Digits(date, locale)}
          </p>
        </div>
        )}
      </div>
      <hr className="mx-0 my-4 border-top border-solid border-p2 opacity-100" />
      <div className="flex justify-center gap-4 mt-3 my-4">
          { isValidISODate(date) && !hasDatePassed(date) ? (
            <Link className="flex items-center gap-1 uppercase register-btn" href={links[0].url}>
              <MdEditDocument size={24}/>
              {eventTranslations('participation_form')}
            </Link>
          ) : (
            <p className="uppercase body-2 text-red-500 base-bold flex items-center">
              {eventTranslations('isOver')}
            </p>     
          )}
          <Hyperlink className="uppercase text-p4 line-clamp-1" arrow={true} href={`/sb-events/${id}`}>
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

