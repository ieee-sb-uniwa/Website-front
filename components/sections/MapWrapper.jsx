// pages/map-page.js
import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

const Map = dynamic(() => import('./Map'), { ssr: false });

const MapWrapper = () => {
  const t = useTranslations('Map');

  return (
    <section className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="max-w-xl mx-auto mb-12 mt-12 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl text-p4">
          {t('map_heading')}
        </h1>
        <p className="mt-3 body-2 max-lg:body-3 text-p5">
          {t('location_details')}
        </p>
      </div>

      <Map />

      {/* Fallback content when JavaScript is disabled */}
      <noscript>
        <div className="max-w-xl mx-auto mb-12 mt-12 text-center">
          <p className='text-red-500 mt-3 body-2 max-lg:body-3 text-p5'>{t('map_unavailable')}</p>
        </div>
      </noscript>
    </section>
  );
};

export default MapWrapper;
