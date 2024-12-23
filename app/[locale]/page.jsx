import Hero from "@components/sections/Hero";
import MapWrapper from "@components/sections/MapWrapper";
import Team from "@components/sections/Team";
//import {council} from "@constants/constants.js"
import { getCouncil } from "@actions/getCouncil";
export const dynamic = 'force-dynamic'
import {getTranslations} from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function Home({ params }) {
  const {locale} = params.locale || 'gr';
  const council = await getCouncil(locale);
  if (!council) notFound();
  const councilTranslations =  await getTranslations('Council');
  return (
  <section className='w-full flex-center flex-col'>
    <Hero/>
    <Team team={council} translationsComponent={councilTranslations}/>
    <MapWrapper/>
  </section>
);
}