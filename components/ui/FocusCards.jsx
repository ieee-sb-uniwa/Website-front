"use client";
import Image from "next/image";
import {Link} from "@i18n/navigation";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const CardLogo = React.memo(({ card, index, hovered, setHovered, showTitle }) => (
  <Link href={card.url || "#"} target="_blank" rel="noopener noreferrer">
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative flex flex-col items-center justify-center px-2 py-4 transition-[opacity,transform] duration-300 ease-out",
        "h-24 md:h-28 shrink-0 basis-1/2 md:basis-1/4",
        "hover:scale-110 focus:scale-110 active:translate-y-0 hover:-translate-y-2 focus:-translate-y-2",
        hovered !== null && hovered !== index && "opacity-50 scale-95"
      )}
    >
      {/* Image */}
      <Image
        src={card.img}
        alt={card.title}
        width={card.imgWidth}
        height={card.imgHeight}
        className="object-contain"
      />

      {showTitle && (
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
));

CardLogo.displayName = "CardLogo";

export function FocusCards({ cards, showTitles }) {
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
          showTitle={showTitles}
        />
      ))}
    </div>
  );
}
