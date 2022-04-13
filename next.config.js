/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "purpledog-public.s3.ap-northeast-2.amazonaws.com",
      "cdn.imweb.me",
    ],
  },
};

module.exports = nextConfig;
