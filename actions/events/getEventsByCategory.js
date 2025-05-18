'use server';
import { notFound } from 'next/navigation';

export async function getAllEventsByCategory(keywords, locale) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  // Determine the base endpoint based on the locale
  const baseEndpoint = locale === 'gr' ? 'events?lang=gr' : 'events?lang=en';
  
  // Construct the full endpoint with keywords if provided
  let endpoint = baseEndpoint;
  if (keywords && keywords.length > 0) {
    // Check if keywords is already a comma-separated string or an array
    const keywordsParam = Array.isArray(keywords) 
      ? keywords.join(',') 
      : keywords;
    
    endpoint += `&keywords=${encodeURIComponent(keywordsParam)}`;
  }

  try {
    // Fetch data from the API
    const response = await fetch(`${apiUrl}/${endpoint}&sortBy=date`, { cache: 'no-store' });
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

export async function getAllThirdPartyByCategory(keywords, locale) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  // Determine the base endpoint based on the locale
  const baseEndpoint = locale === 'gr' ? 'thirdparty?lang=gr' : 'thirdparty?lang=en';
  
  // Construct the full endpoint with keywords if provided
  let endpoint = baseEndpoint;
  if (keywords && keywords.length > 0) {
    // Check if keywords is already a comma-separated string or an array
    const keywordsParam = Array.isArray(keywords) 
      ? keywords.join(',') 
      : keywords;
    
    endpoint += `&keywords=${encodeURIComponent(keywordsParam)}`;
  }

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