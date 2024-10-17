// pages/map-page.js
import React from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

const Map = dynamic(() => import('../../components/sections/Map.jsx'), { ssr: false });

const MapWrapper = () => {
  const t = useTranslations('Map');

  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-40">
      <div className="max-w-xl mx-auto mb-12 mt-12 text-center">
        <h3 className='h3 max-md:h5 text-p4'>
          {t('map_heading')}
        </h3>
        <p className="mt-3 body-2 max-lg:body-3 text-p4">
          {t('location_details')}
        </p>
      </div>

      <Map />

      {/* Fallback content when JavaScript is disabled */}
      <noscript>
        <div className="text-center body-2 max-lg:body-3 text-red-500">
          <p>{t('map_unavailable')}</p>
        </div>
      </noscript>
    </section>
  );
};

export default MapWrapper;
