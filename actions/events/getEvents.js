'use server';
import { notFound } from 'next/navigation';

export async function getEvents(locale, numOfEvents) {
    const apiUrl = process.env.API_URL;
    // Validate numOfEvents as a numeric value
    const parsedNumOfEvents = Number(numOfEvents);
    if (isNaN(parsedNumOfEvents) || parsedNumOfEvents <= 0) {
      throw new Error('Invalid numOfEvents parameter. It must be a positive number.');
    }
    // Determine the endpoint based on the locale
    const endpoint = locale === 'gr' ? 'events?lang=gr' : 'events?lang=en';
  try {
    // Fetch data from the API
    const response = await fetch(`${apiUrl}/${endpoint}&limitAmount=${parsedNumOfEvents}&sortBy=date`, { cache: 'no-store' });
    if (response.status === 404) {
      notFound(); 
      return;
    }
    if (!response.ok) {
      throw new Error(`Failed to fetch events data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Fetching events data failed: ${error.message}`);
  }
}
