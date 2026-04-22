const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
const imagesStorageUrl = new URL(process.env.NEXT_PUBLIC_IMAGES_STORAGE_URL);

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        NEXT_PUBLIC_IMAGES_STORAGE_URL: process.env.NEXT_PUBLIC_IMAGES_STORAGE_URL,
    },
    images: {
        remotePatterns: [
          {
            protocol: imagesStorageUrl.protocol.replace(':', ''),
            hostname: imagesStorageUrl.hostname,
            port: imagesStorageUrl.port, 
            pathname: '/**',
          },
        ],
      }
      // experimental : {
      //    ppr: 'incremental'
      // },
};
module.exports = withNextIntl(nextConfig);