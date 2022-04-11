/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["purpledog-public.s3.ap-northeast-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
