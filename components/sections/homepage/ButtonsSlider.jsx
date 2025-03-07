'use client'
import React from 'react';
import HeroSlider, {Nav} from 'hero-slider';
import { heroImages } from '@constants/constants';
import HeroImageSlide from './HeroImageSlide'; 
import 'hero-slider/dist/index.css';

export default function ButtonsSlider() {
  return (
    <HeroSlider
        autoplay
        orientation="horizontal"
        settings={{
          slidingDuration: 1000,
          slidingDelay: 100,
          shouldAutoplay: true,
          autoplayDuration: 4000,
          height: '90vmin',
        }}
        controller={{
          onSliding: (nextSlide) =>
            console.debug("onSliding(nextSlide): ", nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              "onBeforeSliding(previousSlide, nextSlide): ",
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug("onAfterSliding(nextSlide): ", nextSlide)
        }}
      accessibility={{ shouldDisplayButtons: false }}
      className="absolute inset-0 "
    >
        {/* Render each slide using HeroImageSlide */}
        {heroImages.map((imageSrc, index) => (
          <HeroImageSlide
            key={index}
            imageUrl={imageSrc}
            label={`Slide ${index + 1}`}
          />
        ))}
        <Nav
            color="#ffffff"    
            activeColor="#1959AD"              
        />
    </HeroSlider>
  );
}