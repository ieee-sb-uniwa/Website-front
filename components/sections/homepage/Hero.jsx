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
      interval: 9000,
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
      <section
        className="relative w-full h-screen pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 bg-cover bg-center"
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
          <h1 className="milky_way text-border-title font-poppins mb-6 title uppercase max-lg:mb-7 max-lg:h1 max-sm:h2 max-lg:leading-12"
            style={{ letterSpacing: '3px' }}>
            IEEE SB UNIWA
          </h1>
          <h6 className="text-shadow max-w-440 h6 max-lg:body-1 max-sm:body-2 text-p6">{t('subheading')}</h6>
          <p className="text-shadow max-w-440 my-10 h6 max-lg:body-1 max-md:body-2 max-md:my-5 text-p4">
            {t('p')} 💖
          </p>
          <Link href="/about"  className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
            <Button icon={<GiRead size={36} color="white"/>} >{t('learn_button')}</Button>
          </Link>
        </div>
      </div>
    </section>
    </SplideSlide>
  ))}
  </Splide>
  );
};

export default Hero;
