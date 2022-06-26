/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ["upload.wikimedia.org", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
