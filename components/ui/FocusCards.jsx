"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const CardLogo = React.memo(({ card, index, hovered, setHovered }) => (
  <Link href={card.url || "#"} target="_blank" rel="noopener noreferrer">
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative overflow-hidden flex items-center justify-center px-2 py-4 transition-[opacity,transform] duration-300 ease-out",
        "h-24 md:h-28 shrink-0 basis-1/2 md:basis-1/4", // Adjust the container size
        "hover:scale-110 focus:scale-110 active:translate-y-0 hover:-translate-y-2 focus:-translate-y-2", // Hover effects
        hovered !== null && hovered !== index && "opacity-50 scale-95" // Hover behavior for other elements
      )}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Use width and height for Image */}
        <Image
          src={card.img}
          alt={card.title}
          width={card.imgWidth}  // Dynamically set the width if available
          height={card.imgHeight}  // Dynamically set the height if available
          className="object-contain"
        />
      </div>
    </div>
  </Link>
));

CardLogo.displayName = "CardLogo";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-20 mx-auto px-4">
      {cards.map((card, index) => (
        <CardLogo
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
