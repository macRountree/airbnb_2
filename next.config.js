/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    mapbox_key:
      'pk.eyJ1IjoibWNybnRyZWUiLCJhIjoiY2xwMzA2ZzdlMHZwZDJpcXVqZTNiOTF5ZSJ9.vamiL8REYrP0CnFZTX5OEQ',
  },
};

module.exports = nextConfig;
