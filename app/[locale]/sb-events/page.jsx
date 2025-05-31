import { getTranslations } from 'next-intl/server';
import CardsCollection from '@components/events/CardsCollection';
import SearchForm from "@/components/ui/SearchForm";
import {getAllEvents} from "@actions/events/getAllEvents";

export default async function SbEvents({ params, searchParams }) {
  const query = (await searchParams).query;
  const locale = (await params).locale; 
  const fetchParams = { search: query || null};
  const events = await getAllEvents(locale);
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
          <p className='max-lg:body-2 max-sm:body-3 h6 text-p5 mt-9 text-shadow'>{eventsTranslations('subheading')}</p>
        </div>
      </section>
      <section className='container'>
        <div className='flex w-full flex-col gap-5 md:flex-row'>
            <SearchForm query={query} placeholder={"What event do you want to attend?"} />
            {/* <CategoryFilter/> */}
        </div>
 
        <CardsCollection events={events} locale={locale} eventsType={'sb-events'} />
      </section>

    </>
  );
}
