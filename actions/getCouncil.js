'use server';
import { notFound } from 'next/navigation';
export async function getCouncil(locale) {
    const apiUrl = process.env.API_URL;
    // Determine the endpoint based on the locale
    const endpoint = locale === 'gr' ? 'council_gr' : 'council_en';
  try {
    // Fetch data from the API
    const response = await fetch(`${apiUrl}/${endpoint}`);
    if (response.status === 500) {
      notFound(); // Handle 404 explicitly
      return;
    }
    if (!response.ok) {
      throw new Error(`Failed to fetch council data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Fetching council data failed: ${error.message}`);
  }
}