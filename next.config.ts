import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress responses
  compress: true,

  // Power output optimisations
  poweredByHeader: false,

  images: {
    // Serve modern formats automatically
    formats: ['image/avif', 'image/webp'],

    // Remote image hosts
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],

    // Clamp the longest dimension so we never fetch a 2 MB hero
    deviceSizes: [640, 750, 828, 1080, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],

    // Aggressive cache: 7 days browser, 30 days CDN
    minimumCacheTTL: 604800,
  },

  // Strict mode helps surface bugs early without affecting prod perf
  reactStrictMode: true,

  // Bundle-level optimisations
  experimental: {
    // Inline small CSS chunks to avoid an extra round-trip
    optimizeCss: false, // requires `critters` — skip unless installed
    // Tree-shake server-only code
    serverMinification: true,
  },

  // Cache headers for static assets
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(.*)\\.(png|jpg|jpeg|svg|ico|webp|avif|woff2|woff)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
    ];
  },
};

export default nextConfig;
