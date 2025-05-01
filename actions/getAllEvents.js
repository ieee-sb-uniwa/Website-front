'use server';
import { notFound } from 'next/navigation';

export async function getAllEvents(locale) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    // Determine the endpoint based on the locale
    const endpoint = locale === 'gr' ? 'events?lang=gr' : 'events?lang=en';
  try {
    // Fetch data from the API
    const response = await fetch(`${apiUrl}/${endpoint}&sortBy=date`, { cache: 'no-store' });
    if (response.status === 404) {
      notFound(); 
      return;
    }
    if (!response.ok) {
      throw new Error(`Failed to fetch all events data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Fetching all events data failed: ${error.message}`);
  }
}