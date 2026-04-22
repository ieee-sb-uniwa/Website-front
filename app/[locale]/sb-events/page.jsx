import { getTranslations } from 'next-intl/server';
import CardsCollection from '@components/events/CardsCollection';
import SearchForm from "@/components/ui/SearchForm";
import {getAllEvents} from "@actions/events/getAllEvents";
import PageIntro from '@components/ui/PageIntro';

export default async function SbEvents({ params, searchParams }) {
  const query = (await searchParams).query;
  const locale = (await params).locale; 
  const fetchParams = { search: query || null};
  const events = await getAllEvents(locale);
  const eventsTranslations = await getTranslations("EventsPage");

  return (
    <>
      {/* Hero Section with Wallpaper */}
      <PageIntro
        url="/assets/photos/events_wallpaper.png"
        heading={eventsTranslations("heading")}
        subheading={eventsTranslations("subheading")}
      />
      
      <section className='container'>
        <div className='flex w-full flex-col gap-5 md:flex-row'>
           {/* <SearchForm query={query} placeholder={"What event do you want to attend?"} /> 
             <CategoryFilter/> */}
        </div>
 
        <CardsCollection events={events} locale={locale} eventsType={'sb-events'} />
      </section>

    </>
  );
}
