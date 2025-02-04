import Hero from "@components/sections/Hero";
import MapWrapper from "@components/sections/MapWrapper";
import { Sponsors } from "@components/sections/Sponsors";
import Team from "@components/sections/Team";
//import {council} from "@constants/constants.js"
//import {events} from "@constants/constants.js"
import { getCouncil } from "@actions/getCouncil";
import {getEvents} from "@actions/getEvents";
export const dynamic = 'force-dynamic'
import {getTranslations} from 'next-intl/server';
import RecentActivities from "@components/sections/RecentActivities";

export default async function Home({ params }) {
  const locale = params.locale; 
  const council = await getCouncil(locale);
  const events = await getEvents(locale);
  if (!council || !events) notFound();
  const councilTranslations =  await getTranslations('Council');
  return (
  <section className='w-full flex-center flex-col'>
    <Hero/>
    <RecentActivities activities={events} locale={locale}/>
    <Team team={council} translationsComponent={councilTranslations}/>
    <Sponsors/>
    <MapWrapper/>

  </section>
);
}