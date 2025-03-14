import {getTranslations} from 'next-intl/server';
import CardsCollection from '@components/events/CardsCollection';
import SearchForm from "@/components/ui/SearchForm";
import { getAllThirdPartyEvents } from '@actions/getAllThirdPartyEvents';

export default async function SbEvents({ params, searchParams }) {
  const query = (await searchParams).query;
  const locale = (await params).locale; 
  const fetchParams = { search: query || null };
  const events = await getAllThirdPartyEvents(locale);
  const eventsTranslations = await getTranslations("EventsPage");
  return (
    <>
      <section>
        <div className='container'>
          <h2 className='h2 max-md:h3 text-p4 mt-32 mb-10'>
              {eventsTranslations('heading')}
          </h2>
          <SearchForm query={query} placeholder={"What event you want to attend?"}/>
        </div>
      </section>
      <section>
        <div className='container'>
          <h4 className='h4 max-md:h5 text-p4 my-10'>
            {query ? `${eventsTranslations('search_results')} "${query}"` : eventsTranslations('subheading')}
          </h4>
          
            <CardsCollection events={events} locale={locale} eventsType={'third-party'}/>
        </div>
      </section>
    </>
  );
}
