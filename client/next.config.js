/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  /* ZegoCloud Voice & Video Calls start*/
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 1677121088,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "6c5c7f76e06fefe514044ab3fb35a7a2",
  },
  /* ZegoCloud Voice & Video Calls end */
  images: {
    domains: ["localhost"],
  }
};

module.exports = nextConfig;
