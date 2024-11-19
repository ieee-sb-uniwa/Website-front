"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <Link href={card.url || "#"} target="_blank" rel="noopener noreferrer">
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative overflow-hidden h-14 md:h-22 w-full transition-all duration-300 ease-out",
        // Apply scaling and opacity changes on hover/focus
        hovered !== null && hovered !== index && "opacity-50 scale-95", // Reduce opacity and scale down other cards
        "rounded-lg transform", // Enable transform for hover effects
        "hover:translate-y-[-2px] focus:translate-y-[-2px]", // Move up effect on hover/focus
        "hover:scale-110 focus:scale-110 active:scale-100" // Scale the card on hover
      )}
    >
      <Image
        src={card.img}
        alt={card.title}
        fill
        className="object-contain absolute inset-0" 
      />
      <div
        className={cn(
          "absolute inset-0 flex items-end py-2 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
      </div>
    </div>
  </Link>
));

Card.displayName = "Card";

export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-12 mx-auto px-4">
      {cards.map((card, index) => (
        <Card
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
