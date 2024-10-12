import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale)) {
    notFound(); // If the locale is not valid, trigger a 404 error
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
