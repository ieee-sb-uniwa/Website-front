const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

let remotePatterns = [];
const imagesStorageValue = process.env.NEXT_PUBLIC_IMAGES_STORAGE_URL || '';
const isRemoteImagesStorage = imagesStorageValue.startsWith('http://') || imagesStorageValue.startsWith('https://');

if (isRemoteImagesStorage) {
  const imagesStorageUrl = new URL(imagesStorageValue);
  remotePatterns = [
    {
      protocol: imagesStorageUrl.protocol.replace(':', ''),
      hostname: imagesStorageUrl.hostname,
      port: imagesStorageUrl.port,
      pathname: '/**',
    },
  ];
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: process.env.NODE_ENV === "development",
    remotePatterns,
  },
  // experimental : {
  //    ppr: 'incremental'
  // },
};
module.exports = withNextIntl(nextConfig);
