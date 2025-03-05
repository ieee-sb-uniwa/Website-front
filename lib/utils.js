import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function isValidISODate(date) {
  if (typeof date !== "string") return false;
  
  // Regular expression to match ISO 8601 format (basic check)
  const isoRegex = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?)?$/;
  
  if (!isoRegex.test(date)) return false;

  // Additional check: Ensure `new Date(date)` is valid
  const parsedDate = new Date(date);
  return !isNaN(parsedDate.getTime());
}

export function formatDate(date,locale) {
  if (!isValidISODate(date)) return "Invalid date"; 
  const options = {
    weekday: 'long',   // Sunday
    month: 'long',     // January
    day: '2-digit',    // 01
    year: 'numeric',   // 2024
  };

  return new Date(date).toLocaleDateString(locale, options);  
}
export function formatDate2Digits(date, locale) {
  if (!isValidISODate(date)) return "Invalid date"; 
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  };

  return new Date(date).toLocaleDateString(locale, options);
}
export function formatTime(date, locale) {
  if (!isValidISODate(date)) return "Invalid date"; 
  const options = {
    hour: '2-digit',   // 06
    minute: '2-digit', // 00
    hour12: true,      // 12-hour format (AM/PM)
  };

  return new Date(date).toLocaleTimeString(locale, options);
}

export function hasDatePassed(isoDate) {
  if (!isValidISODate(isoDate)) return false; 
  // Parse the input date
  const inputDate = new Date(isoDate);

  // Get the current date and time
  const currentDate = new Date();

  // Compare the dates
  return inputDate < currentDate;
}