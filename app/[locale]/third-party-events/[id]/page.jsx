import React from 'react'
import Image from 'next/image';
import markdownit from "markdown-it";
import {getThirdPartyEventById} from "@actions/events/getEventById";
import {getAllThirdPartyByCategory} from "@actions/events/getEventsByCategory";
import { isValidISODate, formatDate, formatTime, hasDatePassed, formatDate2Digits } from "@lib/utils";
import { MdEditDocument} from "react-icons/md";
import { PiCalendarDotsFill, PiMapPinAreaFill, PiClockFill} from 'react-icons/pi'; 
import { notFound } from 'next/navigation';
import Button from '@components/ui/Button';
import Hyperlink from '@components/ui/Hyperlink';
import {getTranslations} from 'next-intl/server';
import { RiHourglassFill } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
import CardsCollection from '@components/events/CardsCollection';

const md = markdownit();

// export const experimental_ppr = true;

const Page = async ({params}) => {
  const { id, locale } = await params;

  const event = await getThirdPartyEventById(id, locale);
  if (!event) return notFound();
  const relatedEventsData =  await getAllThirdPartyByCategory(event?.keywords, locale);
  //Initiate both requests in parallel
  //const [event, relatedEvents] = await Promise.all([eventData, relatedEventsData])
  const relatedEvents = relatedEventsData.filter(relEvent => relEvent._id !== event._id )
  const parsedContent = md.render(event?.description || "");

  const eventCardTranslations =  await getTranslations('EventCard');
  const eventTranslations =  await getTranslations('EventIdPage');
  // Determine the event status
  const isValidRegistrationDeadline = isValidISODate(event?.registration_deadline);
  const isValidRegistrationForm = event?.registration_form && event?.registration_form.trim() !== '';
  const registrationDeadlinePassed = isValidRegistrationDeadline && hasDatePassed(event?.registration_deadline);
  const eventEnded = hasDatePassed(event?.end_date);
  const isSameDay = event?.date && event?.end_date && 
                   new Date(event.date).toDateString() === new Date(event.end_date).toDateString();

  // Get the registration status
  const getRegistrationStatus = () => {
    // Registration is open: valid deadline + deadline not passed + valid form
    if (isValidRegistrationDeadline && !registrationDeadlinePassed && isValidRegistrationForm) {
      return {
        isOpen: true,
        showDeadline: true,
        component: (
            <Button
              href={event?.registration_form}
              icon={<MdEditDocument size={30} className='text-p4'/> }
              className="flex gap-3 items-center cursor-pointer "
              textClassName="body-2 text-p4 hover:text-p7 transition-colors duration-300"
            >
              {eventTranslations('register')}
            </Button>
        )
      };
    }
    // Registration deadline has passed but event hasn't ended
    else if (!eventEnded) {
      return {
        isOpen: false,
        showDeadline: false,
        component: (
          <div className="border-l-4 p-4 text-warning rounded-r-md">
            <p className="uppercase body-2 lg:body-1 text-warning font-semibold flex items-center">
              {eventTranslations('register_closed')}
            </p>
          </div>
        )
      };
    }
    // Event is over
    else {
      return {
        isOpen: false,
        showDeadline: false,
        component: (
          <div className="border-l-4 border-error p-4 rounded-r-md">
            <p className="uppercase body-2 lg:body-1 text-error font-semibold flex items-center">
               {eventTranslations('is_over')}
            </p>
          </div>
        )
      };
    }
  };

  const registrationStatus = getRegistrationStatus();

  return ( 
  <>
    <section className="flex justify-center pt-36 max-md:pt-24 bg-contain flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl w-full">
          <Image 
            src={`${event.thumbnail}`}
            alt="event thumbnail"
            width={1000}
            height={1000}
            className="w-full h-full max-sm:max-h-[300px] min-h-[300px] object-cover object-center lg:rounded-lg"
          />
          {/* event title and keywords */}
          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
              <div className="flex flex-col gap-6">
                <h2 className='h2 max-md:h3 text-p3'>{event.title}</h2>
                <div className="relative flex flex-wrap gap-2 items-center pb-4">
                  {event.keywords?.map((keyword, index) => (
                      <div
                        key={index}
                        className="flex gap-1 small-2 rounded-20 relative z-2 border-2 px-4 py-1.5 uppercase border-p3 text-p3"
                      >
                        {keyword}
                      </div>
                    ))}
                </div>
              </div>

            {/* Registration status component */}
            {registrationStatus.showDeadline && isValidRegistrationDeadline && (
              <div className="flex gap-2 items-center body-2 lg:body-1 orange_gradient mb-2">
                <RiHourglassFill className="text-warning animate-bounce" size={32} />
                <span className="font-semibold">{eventCardTranslations('register_before')}</span> {formatDate(event?.registration_deadline, locale)}
              </div>
            )}
            {registrationStatus.component}

            {/* event date, time, location */}
            <div className="bg-s3/30 max-sm:p-3 p-6 rounded-2xl flex flex-col gap-5">
              <div className='flex gap-2 md:gap-3'>
                <PiCalendarDotsFill className="text-p4" size={36} />
                <p className="body-2 lg:body-1 text-p5">
                  {isSameDay ? (
                    formatDate(event?.date, locale)
                  ) : (
                    <>
                      {formatDate(event?.date, locale)} -  {' '}
                      {formatDate(event?.end_date, locale)}
                    </>
                  )}
                </p>
              </div>
              <div className='flex gap-2 md:gap-3'>
                <PiClockFill className="text-p4" size={32} />
                <p className="body-2 lg:body-1 text-p5">
                  {formatTime(event?.date, locale)} -  {' '}
                  {formatTime(event?.end_date, locale)}
                </p>
              </div>
              <div className="flex gap-3">
                <PiMapPinAreaFill className="text-p4" size={32} />
                <p className="body-2 lg:body-1 text-p5">{event?.location}</p>
              </div>
            </div>
          </div>
      </div>

      {/* Divider */}
      <hr className="my-20 max-sm:my-10 w-4/5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-p3 to-transparent opacity-75"/>

      <div className="w-full max-w-7xl px-5 md:px-10 grid grid-cols-1 md:grid-cols-[70%_30%] gap-20 max-sm:gap-10 items-start">
        {/* Event Details */}
        <div className="flex flex-col gap-4">
          <h3 className="h4 max-md:h5 text-p4">{eventTranslations('event_details')}</h3>
          {parsedContent ? (
            <article
              className="prose body-1 max-md:body-2 w-full break-words"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>

        {/* Useful Links */}
        {event.links && event.links.length > 0 && (
          <div className="flex flex-col gap-6">
            <h3 className="h4 max-md:h5 text-p4">{eventTranslations('event_links')}</h3>
            <ul className="list-disc pl-6 space-y-6">
              {event.links.map((link, idx) => (
                <li key={idx} className='flex items-center gap-4'>
                  <FaExternalLinkAlt className="text-p4" size={24} />
                  <Hyperlink
                    href={link.url}
                    className="body-1 max-md:body-2 text-p4"
                    arrow={false}
                  >
                    {link.title}
                  </Hyperlink>
                </li>
              ))}
            </ul>
            
          </div>
        )}
      </div>
      {/* related events */}
      <div className='section_container'>           
        <div className="flex py-10 items-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-p3"></div>
            <span className="max-sm:h6 h5 flex-shrink mx-4 text-p5">Related Events</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-p3 "></div>
        </div>
        <CardsCollection  events={relatedEvents} maxCards={3} locale={locale} eventsType={'third-party'}/>
       </div>
    </section>
  </>
  );
};

export default Page;