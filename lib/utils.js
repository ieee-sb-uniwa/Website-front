import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(date,locale) {
  const options = {
    weekday: 'long',   // Sunday
    month: 'long',     // January
    day: '2-digit',    // 01
    year: 'numeric',   // 2024
  };

  return new Date(date).toLocaleDateString(locale, options);  
}

export function formatTime(date, locale) {
  const options = {
    hour: '2-digit',   // 06
    minute: '2-digit', // 00
    hour12: true,      // 12-hour format (AM/PM)
  };

  return new Date(date).toLocaleTimeString(locale, options);
}