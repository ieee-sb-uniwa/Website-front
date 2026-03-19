"use client";
import Image from "next/image";
import { Link } from "@i18n/navigation";
import React, { useState, useEffect} from "react";
import { cn } from "@/lib/utils";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { LuArrowBigLeftDash,LuArrowBigRightDash } from "react-icons/lu";
import { useRef } from 'react';

// Add default props with showTitles=true
export const CardLogo = React.memo(({ 
  card, 
  index, 
  hovered, 
  setHovered, 
  showTitles = false, 
  openInNewTab
}) => {
  return (  
    <Link  
      href={card.url || "#"} 
      target={openInNewTab ? "_blank" : undefined} 
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "relative flex flex-col items-center justify-center px-2 py-4 transition-[opacity,transform] duration-300 ease-out",
          "h-20 md:h-28 lg:h-40 shrink-0 basis-1/2 md:basis-1/4",
          "hover:scale-110 focus:scale-110 active:translate-y-0 hover:-translate-y-2 focus:-translate-y-2",
          hovered !== null && hovered !== index && "opacity-50 scale-95"
        )}
      >
        <div className="w-full h-full flex items-center justify-center">
          {/* Image */}
          <Image
            src={card.img}
            alt={card.title || "Card image"}
            width={card.imgWidth || 100}
            height={card.imgHeight || 100}
            className="object-contain max-h-full"
            style={{ transform: `scale(${card.scale || 1})` }}
          />
        </div>
        
        {showTitles &&
        <div
          className={cn(
            "absolute top-full text-p4 body-2 max-lg:body-3 max-sm:base-bold text-center w-full",
            "transition-all duration-300 transform",
            "opacity-100 z-50" 
          )}>
          {card.title || "[Empty Title]"}
        </div>
        }
      </div>
    </Link>
  );
});

CardLogo.displayName = "CardLogo";

export function FocusCards({ cards, showTitles = true, openInNewTabs }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-28 gap-x-20 max-w-7xl mx-auto md:px-4 w-full">
      {cards.map((card, index) => (
        <CardLogo
          key={card.title || index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          showTitle={showTitles}          
          openInNewTab={openInNewTabs}
        />
      ))}
    </div>
  );
}

export function FocusCardsCarousel({ cards, showTitles = true, openInNewTabs }) {
  const splideRef = useRef(null);
  const [hovered, setHovered] = useState(null);
const [progress, setProgress] = useState(0);

useEffect(() => {
  const splideInstance = splideRef.current?.splide;
  if (!splideInstance) return;

  const updateProgress = () => {
    const totalSlides = splideInstance.length;     // Total number of slides
    const currentSlide = splideInstance.index;     // Current active slide index (starts at 0)
    const visibleSlides = splideInstance.options.perPage || 1;
    
    // Calculate progress: how many slides have we seen in percentage
    const effectiveTotal = totalSlides - visibleSlides + 1;
    const calculatedProgress = effectiveTotal > 0 
      ? (currentSlide / effectiveTotal)
      : 1;
    setProgress(calculatedProgress);
  };

  // Hook into Splide events
  splideInstance.on('mounted move resized', updateProgress);
  updateProgress(); // Run once initially

  return () => {
    splideInstance.off('mounted move resized', updateProgress);
  };
}, []);


  return (
    <div className="relative w-full h-full max-w-7xl mx-auto">
      <Splide
        options={{
          type: 'splide',
          perPage: 4,
          perMove: 1,
          gap: '1rem',
          pagination: false,
          rewind: true,
          arrows: false,
          breakpoints: {
            1024: { perPage: 4 },
            768: { perPage: 3 },
            480: { perPage: 2 },
          },
          height: '200px',  // Ensure there's enough height for titles
        }}
        ref={splideRef}
        aria-label="Focus Cards Carousel"
        className="focus-cards-carousel pb-9" // Add padding at bottom for titles
      >
        {cards && cards.length > 0 ? cards.map((card, index) => (
          <SplideSlide key={card.title || index} >
            <CardLogo
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
              showTitles={true} // Force to true
              openInNewTab={openInNewTabs}
            />
          </SplideSlide>
        )) : (
          <SplideSlide>
            <div className="p-4 bg-red-200 text-red-800">
              No cards available
            </div>
          </SplideSlide>
        )}
      </Splide>


      {/* Custom Arrows */}
      <div className="flex justify-center items-center gap-12 z-2 max-lg:hidden"> 
        {/* Progress Bar */}
        <div className="w-full h-[2px] bg-p4 mt-3">
          <div
            className="h-full bg-s4 transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <button
          onClick={() => splideRef.current?.splide?.go('<')}
          className="p-2 rounded-md bg-s1 transition-colors border-[1px] border-p1/35 hover:border-p1 duration-300"
          aria-label="Previous"
        >
          <LuArrowBigLeftDash size={30} className="text-p1/75" />
        </button>
        <button
          onClick={() => splideRef.current?.splide?.go('>')}
          className="p-2 rounded-md bg-s1 transition-colors border-[1px] border-p1/35 hover:border-p1 duration-300"
          aria-label="Next"
        >
          <LuArrowBigRightDash size={30} className="text-p1/75"/>
        </button>
      </div>
    </div>
  );
}