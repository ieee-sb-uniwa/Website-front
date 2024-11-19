// pages/map-page.js
import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import { MapPinIcon } from '@heroicons/react/24/solid';

const Map = dynamic(() => import('./Map'), { ssr: false });

const MapWrapper = () => {
  const t = useTranslations('Map');

  return (
    <section className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="max-w-[50rem] mx-auto mb-12 mt-12 text-center">
        <h3 className='h3 max-md:h5 text-p4'>
          {t('map_heading')}
        </h3>
        <p className="mt-5 body-2 max-lg:body-3 text-p5">
          {t('location_details')}
        </p>
        <div className="mt-5 flex items-start justify-center gap-2">
          <MapPinIcon className="h-7 w-7 text-red-600" />
          <p className="body-2 max-lg:body-3 text-p5">
            {t('office_location')}
          </p>
        </div>
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
