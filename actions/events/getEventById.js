'use server';
import { notFound } from 'next/navigation';

export async function getSBEventById(id, locale) {
    // Validate the ID parameter
    if (!id || (typeof id !== 'string' && typeof id !== 'number')) {
        console.error('Invalid event ID provided:', id);
        notFound();
        return;
    }
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      throw new Error('API URL environment variable is not defined');
    }

  try {
    // Make sure the ID is properly encoded for the URL
    const encodedId = encodeURIComponent(String(id).trim());

    if (!encodedId) {
      notFound();
      return;
    }

    // Determine the endpoint based on the locale
    const endpoint = locale === 'gr' ? `events/${encodedId}?lang=gr` : `events/${encodedId}?lang=en`;

    // Fetch data from the API
    const response = await fetch(`${apiUrl}/${endpoint}`, { cache: 'no-store' });
    if (response.status === 404) {
      notFound(); 
      return;
    }
    if (!response.ok) {
      throw new Error(`Failed to fetch event: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Fetching event failed: ${error.message}`);
  }
}

export async function getThirdPartyEventById(id,locale) {
    // Validate the ID parameter
    if (!id || (typeof id !== 'string' && typeof id !== 'number')) {
        console.error('Invalid event ID provided:', id);
        notFound();
        return;
    }
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      throw new Error('API URL environment variable is not defined');
    }

  try {
    // Make sure the ID is properly encoded for the URL
    const encodedId = encodeURIComponent(String(id).trim());

    if (!encodedId) {
      console.error('event ID became empty after encoding/trimming');
      notFound();
      return;
    }

    // Determine the endpoint based on the locale
    const endpoint = locale === 'gr' ? `thirdparty/${encodedId}?lang=gr` : `thirdparty/${encodedId}?lang=en`;

    // Fetch data from the API
    const response = await fetch(`${apiUrl}/${endpoint}`, { cache: 'no-store' });
    if (response.status === 404) {
      notFound(); 
      return;
    }
    if (!response.ok) {
      throw new Error(`Failed to fetch third party event : ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Fetching third party event failed: ${error.message}`);
  }
}