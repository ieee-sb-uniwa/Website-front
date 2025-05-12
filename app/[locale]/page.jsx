import Hero from "@components/sections/homepage/Hero";
import MapWrapper from "@components/sections/map/MapWrapper";
import { Sponsors } from "@components/sections/homepage/Sponsors";
import ScienceGroupsOverview from "@components/sections/homepage/ScienceGroupsOverview";
import Team from "@components/sections/team/Team";
//import {council} from "@constants/constants.js"
//import {events} from "@constants/constants.js"
import {getCouncil} from "@actions/getCouncil";
import {getEvents} from "@actions/events/getEvents";
export const dynamic = 'force-dynamic'
import {getTranslations} from 'next-intl/server';
import RecentActivities from "@components/sections/homepage/RecentActivities";

export default async function Home(props) {
  const params = await props.params;
  const locale = params.locale;
  const council = await getCouncil(locale);
  const events = await getEvents(locale,3);
  if (!council || !events) notFound();
  const councilTranslations =  await getTranslations('Council');
  return (
  <section className='w-full flex-center flex-col'>
    <Hero/>
    <RecentActivities activities={events} locale={locale} />
    <ScienceGroupsOverview/>
    <Team team={council} translationsComponent={councilTranslations}/>
    <Sponsors/>
    <MapWrapper/>

  </section>
);
}