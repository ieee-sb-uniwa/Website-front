import React from 'react';
import {useTranslations} from 'next-intl';
export const Hero = () => {
  const t = useTranslations('Hero');
  return (
    <section
      className="relative pt-80 pb-60 max-lg:pt-64 max-lg:pb-52 max-md:pt-52 max-md:pb-48"
      style={{
        backgroundImage: "url('/assets/photos/IEEEXTREME_2023.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)',
        WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)',
      }}
    >
      {/* Mask Overlay  */}
      <div className="absolute inset-0 bg-black/25 z-0"></div>
      <div className="container">
        <div className="relative z-2 max-w-512 max-lg:max-w-388">
          <div className="text-p4 small-1 uppercase">
            {t('caption')}
          </div>
          <h1 className="milky_way text-border mb-6 title uppercase max-lg:mb-7 max-lg:h1 max-md:mb-4 max-md:h2 max-md:leading-12 ">
            IEEE UNIWA
          </h1>
          <h6 className='text-shadow max-w-440 h6 max-lg:body-1 text-p6'>{t('subheading')}</h6>
          <p className="text-shadow max-w-440 mb-14 h6 max-lg:body-1 max-md:mb-10 text-p4">
            {t('p')} 💖
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
