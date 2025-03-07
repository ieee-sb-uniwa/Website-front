import React from 'react';
import { Slide } from 'hero-slider';

const HeroImageSlide = ({ imageUrl, label, shouldRenderMask = false }) => {
  return (
    <Slide
      shouldRenderMask={shouldRenderMask}
      label={label}
      background={{
        backgroundImageSrc: imageUrl,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAnimation: "fade",  
        maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)',
        WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)',
        shouldLazyLoad: true, 
      }}
    />
  );
};

export default HeroImageSlide;
