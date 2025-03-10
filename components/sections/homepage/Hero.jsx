'use client';
import React, { useState } from "react";
import {useTranslations} from 'next-intl';
import Button from '../../ui/Button.jsx';
import {Link} from '@/i18n/navigation';
import { GiRead } from "react-icons/gi";
import { heroImages } from '@constants/constants.js';
import { Splide, SplideSlide,SplideTrack} from '@splidejs/react-splide';
import '@splidejs/splide/css';

export const Hero = () => {
  const t = useTranslations('Hero');
  return (
    <Splide
    tag="section"
    options={{
      type: 'fade',
      autoplay: true,
      interval: 6000,
      speed: 500,
      pagination: true,
      pagination: "splide__pagination splide__pagination--custom",
      arrows: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      rewind: true,
      preloadPages: true,
      drag: false, 
      touch: false, 
    }}
    aria-label="Student branch Events Photos"
  >
    {/* Background Slider (using Splide directly here) */}
    {heroImages.map((image, index) => (
      <SplideSlide key={index}>
      <SplideTrack>
      <section
        className="relative w-full h-screen overflow-hidden pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }} 
      >

      {/* MASK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-2 "></div>
      {/* HERO CONTENT */}
      <div className="container">
        <div className="relative z-2 max-w-512 max-lg:max-w-388">
          <div className="text-shadow text-p4 small-1 uppercase">
            {t('caption')}
          </div>
          <h1 className="milky_way text-border-title mb-6 title uppercase max-lg:mb-7 max-lg:h1 max-md:mb-4 max-md:h2 max-md:leading-12"
            style={{ letterSpacing: '3px' }}>
            IEEE SB UNIWA
          </h1>
          <h6 className='text-shadow max-w-440 h6 max-lg:body-1 text-p6'>{t('subheading')}</h6>
          <p className="text-shadow max-w-440 mb-14 h6 max-lg:body-1 max-md:mb-10 text-p4">
            {t('p')} 💖
          </p>
          <Link href="/about"  className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
            <Button icon={<GiRead size={36} color="white"/>} >{t('learn_button')}</Button>
          </Link>
        </div>
      </div>
    </section>
    </SplideTrack>
    </SplideSlide>
  ))}
  </Splide>
  );
};

export default Hero;
