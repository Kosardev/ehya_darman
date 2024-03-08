/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  poweredByHeader: true,
  i18n: {
    localeDetection: false,
    locales: ["fa", "en"],
    defaultLocale: "fa"
  },
  compiler:{
    // removeConsole: true
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'cache-control',
            value: 'max-age=0',
          },
        ],
      },
    ]
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    // !dev && config.plugins.push(new Critters({ preload: 'swap' }));
    return config
  },
}

module.exports = nextConfig
