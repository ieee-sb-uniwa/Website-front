"use client";
import Image from "next/image";
import { Link } from "@i18n/navigation";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BiSolidChevronRight, BiSolidChevronLeft } from "react-icons/bi";
import { useRef } from 'react';

export const CardLogo = React.memo(({ card, index, hovered, setHovered, showTitles, openInNewTab}) => {
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
            alt={card.title}
            width={card.imgWidth}
            height={card.imgHeight}
            className="object-contain max-h-full"
          />
        </div>
        {showTitles && (
          <div
            className={cn(
              "absolute top-full mt-2 text-p4 body-2 bg-clip-text",
              "transition-all duration-300 transform",
              hovered === index ? "opacity-100 translate-y-2" : "opacity-0 translate-y-0"
            )}>
            {card.title}
          </div>
        )}
      </div>
    </Link>
  );
});

CardLogo.displayName = "CardLogo";

export function FocusCards({ cards, showTitles, openInNewTabs }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-28 gap-x-20 max-w-7xl mx-auto md:px-4 w-full">
      {cards.map((card, index) => (
        <CardLogo
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          showTitles={showTitles}
          openInNewTab={openInNewTabs}
        />
      ))}
    </div>
  );
}

export function FocusCardsCarousel({ cards, showTitles, openInNewTabs }) {
  const splideRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <Splide
        options={{
          type: 'slide',
          perPage: 4,
          perMove: 1,
          gap: '1rem',
          pagination: false,
          arrows: false,
          breakpoints: {
            1024: { perPage: 4 },
            768: { perPage: 3 },
            480: { perPage: 2 },
          },
        }}
        ref={splideRef}
        aria-label="Focus Cards Carousel"
        className="focus-cards-carousel"
      >
        {cards.map((card, index) => (
          <SplideSlide key={card.title}>
            <CardLogo
              card={card}
              index={index}
              hovered={hovered}
              setHovered={setHovered}
              showTitles={showTitles}
              openInNewTab={openInNewTabs}
            />
          </SplideSlide>
        ))}
      </Splide>

      {/* Custom Arrows */}
      <div className="flex justify-center items-center gap-12 z-2 mt-12">
        <button
          onClick={() => splideRef.current?.splide?.go('<')}
          className="p-3 rounded-full bg-s1/50 hover:bg-s1/90 transition-colors border-[2px] border-s4/25 duration-300"
          aria-label="Previous"
        >
          <BiSolidChevronLeft size={30} className="text-p1" />
        </button>
        <button
          onClick={() => splideRef.current?.splide?.go('>')}
          className="p-3 rounded-full bg-s1/50 hover:bg-s1/90 transition-colors border-[2px] border-s4/25 duration-300"
          aria-label="Next"
        >
          <BiSolidChevronRight size={30} className="text-p1"/>
        </button>
      </div>
    </div>
  );
}