'use server'

import {notFound} from 'next/navigation';

export async function getAllSG(locale) {
	const apiUrl = process.env.API_URL;
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

export async function getSGByName(locale, name) {
	const apiUrl = process.env.API_URL;
	const endpoint = locale === 'gr' ? `scientific_groups/${name}?lang=gr` : `scientific_groups/${name}?lang=en`;
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

export async function getProjectsBySG(locale, sgName) {
	const apiUrl = process.env.API_URL;
	const endpoint = locale === 'gr' ? `projects/sg/${sgName}?lang=gr` : `projects/sg/${sgName}?lang=en`;
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
