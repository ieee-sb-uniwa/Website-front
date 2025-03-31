// pages/map-page.js
import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { PiMapPinAreaFill } from "react-icons/pi";
import Hyperlink from '@components/ui/Hyperlink';

const Map = dynamic(() =>  import('./Map.jsx'), { ssr: true, loading: () => <p className='orange_gradient body-1 max-lg:body-2'>Loading map...</p> });

const MapWrapper = () => {
  const t = useTranslations('Map');

  return (
    <section className="relative pt-24 max-lg:pb-24 max-lg:py-16">
      <div className="container">
        <div className='flex items-center'>
          <div className='relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-100'>
            <div className='mb-10'> 
              <h3 className='h3 max-lg:h4 max-md:h5 text-p4'>
                {t('map_heading')}
              </h3>
            </div>

            <p className="mb-10 body-1 mx-w-lg">
              {t('location_details')}
            </p>

            <div className="flex flex-wrap items-center gap-6">
                    <span className='relative flex items-center min-h-[60px] px-4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden'>  
                      <span className="mr-5 object-contain z-10 flex items-center">
                        <PiMapPinAreaFill size={30} className='text-red-500'/>                
                      </span>  
                      <span className='body-2 relative z-2 text-p4'>{t('office_location')}</span>
                    </span>
                    <span className='relative flex items-center min-h-[60px] px-4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden'>  
                      <span className="mr-5 object-contain z-10 flex items-center">
                        <PiMapPinAreaFill size={30} className='text-red-500'/>               
                      </span>  
                      <span className='body-2 relative z-2 text-p4'>{t('workplace_location')}</span>
                    </span>
              </div>
                  
                <p className="body-2 my-10 max-w-md flex items-center gap-1">
                  {t('CampusMapText')}&nbsp;
                  <Hyperlink href="https://campusplan.uniwa.gr/2" className="body-2 text-p4" arrow={false}>
                    {t('CampusMap')}
                  </Hyperlink>
                </p>
            </div>
            {/*Desktop*/}
            <div className="mb-10 max-lg:hidden">
              <div className="rounded-40 relative w-[855px]">
                <div className="relative rounded-3xl bg-s1 px-2 pb-2 pt-2">
                  <Map/>
                </div>
              </div>
            </div>
        </div>
        {/*Mobile*/}
        <div className="lg:hidden rounded-40 relative md:w-[755px] lg:w-[755px] ">
            <div className="relative rounded-3xl bg-s1 px-2 pb-2 pt-2">
                <Map/>
            </div>
        </div>
      </div>
     

      {/* Fallback content when JavaScript is disabled */}
      <noscript>
        <div className="max-w-xl mx-auto mb-12 mt-12 text-center">
          <p className='text-red-500 mt-3 body-2 max-lg:body-3'>{t('map_unavailable')}</p>
        </div>
      </noscript>
    </section>
  );
};

export default MapWrapper;
