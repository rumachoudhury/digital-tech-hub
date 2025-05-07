// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

//////
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true, // Helps catch problems in React
//   swcMinify: true, // Makes code smaller/faster
//   images: {
//     domains: ["images.unsplash.com"],
//   },
// };

// export default nextConfig;

///////////////////
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pisces.bbystatic.com",
        pathname: "/**",
      },
    ],
  },
};
