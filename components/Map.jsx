import React from 'react';
import { useTranslations } from 'next-intl';

export const Map = () => {
  const t = useTranslations('Map');
  return (
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.005468277853!2d23.6731513!3d37.977001699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bc9c910c0ced%3A0xe927c6c38d782d6!2sIEEE%20SB%20UniWA!5e0!3m2!1sel!2sgr!4v1729064521742!5m2!1sel!2sgr"
          className="rounded-2xl mx-auto w-[80%] sm:w-[70%] lg:w-[80%] aspect-video max-w-[70rem]"
          allowFullScreen={true}
          loading="lazy"
          aria-label="Location of IEEE SB UniWA in Google Maps"
          referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
  );
};

export default Map;


