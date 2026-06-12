/** @type {import('next').NextConfig} */
const isExport = process.env.NEXT_EXPORT === 'true';

const nextConfig = {
  ...(isExport && { output: 'export' }),
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',
};

module.exports = nextConfig;
