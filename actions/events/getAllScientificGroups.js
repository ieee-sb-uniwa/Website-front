'use server'

import {notFound} from 'next/navigation';

export async function getAllSG(locale) {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL;
	const endpoint = locale === 'gr' ? 'scientific_groups?lang=gr' : 'scientific_groups?lang=en';
    try {
        // Fetch data from the API
        const response = await fetch(`${apiUrl}/${endpoint}`, { cache: 'no-store' });
        if (response.status === 404) {
          notFound(); 
          return;
        }
        if (!response.ok) {
          throw new Error(`Failed to fetch all SG data: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Fetching all SG data failed: ${error.message}`);
    }
}