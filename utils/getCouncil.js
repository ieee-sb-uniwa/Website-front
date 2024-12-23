export async function getCouncil(locale) {
    const apiUrl = process.env.API_URL;
  
    // Determine the endpoint based on the locale
    const endpoint = locale === 'gr' ? 'council_gr' : 'council_en';
  
    // Fetch data from the API
    const response = await fetch(`${apiUrl}/${endpoint}`);
  
    if (!response.ok) {
      throw new Error(`Failed to fetch council data: ${response.statusText}`);
    }
  
    return await response.json();
  }