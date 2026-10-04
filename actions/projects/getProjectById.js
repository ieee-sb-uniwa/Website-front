'use server';
import { notFound } from 'next/navigation';

export async function getProjectById(id, locale) {
    // Validate the ID parameter
    if (!id || (typeof id !== 'string' && typeof id !== 'number')) {
        console.error('Invalid event ID provided:', id);
        notFound();
        return;
    }
    const apiUrl = process.env.API_URL;
    if (!apiUrl) {
        throw new Error('API URL environment variable is not defined');
    }
    // Determine the endpoint based on the locale
    const endpoint = locale === 'gr' ? `projects/${id}?lang=gr` : `projects/${id}?lang=en`;
    try {
        // Make sure the ID is properly encoded for the URL
        const encodedId = encodeURIComponent(String(id).trim());

        if (!encodedId) {
            notFound();
            return;
        }
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