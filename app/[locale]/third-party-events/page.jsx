import {getTranslations} from 'next-intl/server';
import CardsCollection from '@components/events/CardsCollection';
import { getAllThirdPartyEvents } from '@actions/events/getAllThirdPartyEvents';
import React from 'react'

export default async function SbEvents({ params, searchParams }) {
  const query = (await searchParams).query;
  const locale = (await params).locale; 
  const fetchParams = { search: query || null };
  const events = await getAllThirdPartyEvents(locale);
  const eventsTranslations = await getTranslations("EventsPage");
  return (
    <>
      {/* Hero Section with Wallpaper */}
      <section className="bg-[url('/assets/photos/events_wallpaper.png')] bg-cover bg-center bg-no-repeat relative h-[40vh] min-h-[250px]">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container absolute inset-0" >
          <h2 className='h2 max-md:h3 text-p4 mt-40 text-shadow'>
            {eventsTranslations('heading')}
          </h2>
          <p className='max-lg:body-2 max-sm:body-3 h6 text-p5 mt-8 text-shadow'>{eventsTranslations('third_party_subheading')}</p>
        </div>
      </section>

      <section>
        <div className='container'>
          {/* <SearchForm query={query} placeholder={"What event you want to attend?"}/> */}
          {/* <h4 className='h4 max-md:h5 text-p4 my-10'>
            {query ? `${eventsTranslations('search_results')} "${query}"` : eventsTranslations('subheading')}
          </h4> */}
          
            <CardsCollection events={events} locale={locale} eventsType={'third-party'}/>
        </div>
      </section>
    </>
  );
}