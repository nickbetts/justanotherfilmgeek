/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.tiktokcdn.com"
      },
      {
        protocol: "https",
        hostname: "**.tiktok.com"
      }
    ]
  }
};

export default nextConfig;
