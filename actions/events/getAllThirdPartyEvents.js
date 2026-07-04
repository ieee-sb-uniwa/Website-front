'use server';
import { notFound } from 'next/navigation';

export async function getAllThirdPartyEvents(locale) {
    const apiUrl = process.env.API_URL;
    // Determine the endpoint based on the locale
    const endpoint = locale === 'gr' ? 'thirdparty?lang=gr' : 'thirdparty?lang=en';
  try {
    // Fetch data from the API
    const response = await fetch(`${apiUrl}/${endpoint}&sortBy=date`, { cache: 'no-store' });
    if (response.status === 404) {
      notFound(); 
      return;
    }
    if (!response.ok) {
      throw new Error(`Failed to fetch third party events data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Fetching third party events data failed: ${error.message}`);
  }
}
