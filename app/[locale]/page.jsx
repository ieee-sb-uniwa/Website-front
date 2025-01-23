import Hero from "@components/sections/Hero";
import MapWrapper from "@components/sections/MapWrapper";
import { Sponsors } from "@components/sections/Sponsors";
import Team from "@components/sections/Team";
import {council} from "@constants/constants.js"
import {events} from "@constants/constants.js"
import { getCouncil } from "@actions/getCouncil";
export const dynamic = 'force-dynamic'
import {getTranslations} from 'next-intl/server';
import EventCard from "@components/news/EventCard";

export default async function Home({ params }) {
  const locale = params.locale; 
  //const council = await getCouncil(locale);
  if (!council) notFound();
  const councilTranslations =  await getTranslations('Council');
  
  return (
  <section className='w-full flex-center flex-col'>
    <Hero/>

    <section className="section_container">
      <h3 className='h3 max-md:h5 text-p4'>Recent Activities</h3>
      <ul className="mt-7 card_grid">
      {events && events.length > 0 ? (
        events.map((event, index) => (
          <EventCard key={event.id || index} event={event} locale={locale} />
        ))
        ) : (
          <p className="no-events">No Events</p>
        )}
      </ul>
    </section>
    <Team team={council} translationsComponent={councilTranslations}/>
    <Sponsors/>
    
    <MapWrapper/>

  </section>
);
}