// pages/map-page.js
import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { PiMapPinAreaFill } from "react-icons/pi";
import Hyperlink from '@components/ui/Hyperlink';

const Map = dynamic(() => import('./Map'), { ssr: false });

const MapWrapper = () => {
  const t = useTranslations('Map');

  return (
    <section className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="max-w-[50rem] mx-auto mb-12 mt-12 text-center">
        <h3 className='h3 max-md:h5 text-p4'>
          {t('map_heading')}
        </h3>
        <p className="mt-7 my-10 h6 max-lg:body-2 text-p5">
          {t('location_details')}
        </p>
        <div className="mt-5 flex justify-center gap-2">
          <span className='relative flex items-center min-h-[60px] px-4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden'>  
            <span className="mr-5 object-contain z-10 flex items-center">
              <PiMapPinAreaFill size={38} className='text-red-600'/>                
            </span>  
            <span className='body-2 max-lg:body-3 relative z-2 text-p4'>{t('office_location')}</span>
          </span>
          <span className='relative flex items-center min-h-[60px] px-4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden'>  
            <span className="mr-5 object-contain z-10 flex items-center">
              <PiMapPinAreaFill size={38} className='text-red-600'/>               
            </span>  
            <span className='body-2 max-lg:body-3 relative z-2 text-p4'>{t('workplace_location')}</span>
          </span>
        </div>
          <p className="body-2 max-lg:body-3 text-p5 mt-10 uppercase">
            In case you get lost, We've got you covered:&nbsp;&nbsp;
            <Hyperlink
              href="https://campusplan.uniwa.gr/2"
              label="Campus 2 Interactive Map"
              className="inline-flex items-center font-roboto text-p4 uppercase hover:underline hover:text-p1"
              arrow= {false}
            />
          </p>
      </div>
      <Map />

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
