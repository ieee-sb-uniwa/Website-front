const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
const imagesStorageUrl = new URL(process.env.NEXT_PUBLIC_IMAGES_STORAGE_URL);

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: imagesStorageUrl.protocol.replace(':', ''), // Ensure protocol format
            hostname: imagesStorageUrl.hostname,
            port: imagesStorageUrl.port || '', // Include port if present
            pathname: '/**', // Allow all paths under images storage
          },
        ],
      },
      // experimental : {
      //    ppr: 'incremental'
      // },
      env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_IMAGES_STORAGE_URL: process.env.NEXT_PUBLIC_IMAGES_STORAGE_URL,
      },
};
 
module.exports = withNextIntl(nextConfig);