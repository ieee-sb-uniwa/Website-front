
'use client';
import PropTypes from "prop-types";
import Hyperlink from "@components/ui/Hyperlink";
import { isValidISODate,formatDate, formatTime, hasDatePassed, formatDate2Digits } from "@lib/utils";
import { PiCalendarDotsFill, PiMapPinAreaFill, PiClockFill} from 'react-icons/pi'; 
import { useTranslations } from 'next-intl';
import Link from "@node_modules/next/link";
import { MdEditDocument} from "react-icons/md";
import Image from 'next/image';

const EventCard = ({ event , locale, eventType}) => {
  const {_id, id, date, location, title, thumbnail, images, keywords, registration_form, registration_deadline } = event;
  const eventTranslations = useTranslations('EventCard');
  const eventDetailsLink = eventType === "third-party" ? `/third-party-events/${_id}` : `/sb-events/${_id}`;
  return (
    <li key={id} className="event-card group">
      
      {images && images.length > 0 && images[0].trim() !== "" && (
          <Image
          src={`${thumbnail}`}
          alt={title}
          className="event-card_img"
          width={1200}
          height={800}
          priority
        />
      )}
      <div className="mt-5">
        <div className="relative flex flex-wrap gap-2 items-center pb-4">
          {keywords.map((keyword, index) => (
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
        {/* {isValidISODate(registration_deadline) && !hasDatePassed(registration_deadline) && (
        <div className="flex items-center my-3 gap-3">
          <p className="body-2 text-warning event_card_date">
            {eventTranslations('register_before')} {formatDate2Digits(registration_deadline, locale)}
          </p>
        </div>
        )} */}
      </div>
      <hr className="mx-0 my-4 border-top border-solid border-p2 opacity-100" />
        <div className="flex justify-center gap-x-1 my-4">
          {isValidISODate(registration_deadline) && !hasDatePassed(registration_deadline) && registration_form && registration_form.trim() !== "" && (
            <Link className="flex items-center gap-1 uppercase register-btn" href={registration_form}>
              <MdEditDocument size={24}/>
              {eventTranslations('participation_form')}
            </Link>
          )}

          {isValidISODate(registration_deadline) && hasDatePassed(registration_deadline) && registration_form && registration_form.trim() !== "" && (
            <p className="uppercase body-2 p-3 rounded-lg border-error text-error border-2 base-bold flex items-center">
              {eventTranslations('isOver')}
            </p>
          )}

          {/* Always show Read More */}
          <Hyperlink className="uppercase text-p4 line-clamp-1" arrow={true} href={eventDetailsLink}>
            {eventTranslations('read_more')}
          </Hyperlink>
        </div>

    </li>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    date: PropTypes.string,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    keywords: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    registration_form: PropTypes.string,
    registration_deadline: PropTypes.string,
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

