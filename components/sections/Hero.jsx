import React from 'react';
import {useTranslations} from 'next-intl';
import Button from '../ui/Button.jsx';
import {Link} from '@/i18n/routing';
import ButtonsSlider from '@components/ui/ButtonsSlider.jsx';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section
      className="relative w-full h-screen overflow-hidden pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      {/* HeroSlider Background */}
      <ButtonsSlider/>
      {/* Mask Overlay */}
      <div className="absolute inset-0 bg-black/25 z-0"></div>
      <div className="container">
        <div className="relative z-2 max-w-512 max-lg:max-w-388">
          <div className="text-shadow text-p4 small-1 uppercase">
            {t('caption')}
          </div>
          <h1 className="milky_way text-border mb-6 title uppercase max-lg:mb-7 max-lg:h1 max-md:mb-4 max-md:h2 max-md:leading-12 ">
            IEEE UNIWA
          </h1>
          <h6 className='text-shadow max-w-440 h6 max-lg:body-1 text-p6'>{t('subheading')}</h6>
          <p className="text-shadow max-w-440 mb-14 h6 max-lg:body-1 max-md:mb-10 text-p4">
            {t('p')} 💖
          </p>
          <Link href="/about" className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
            <Button icon="/assets/images/book.png" iconWidth={26} iconHeight={26}>{t('learn_button')}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
