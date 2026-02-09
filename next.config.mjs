/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/AlSolved_Demos' : '',
    assetPrefix: isProd ? '/AlSolved_Demos/' : '',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
