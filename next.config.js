/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode: true,
    // https://nextjs.org/docs/advanced-features/i18n-routing
    i18n: {
        localeDetection: false,
        locales: ["fa", "en"],
        defaultLocale: "fa"
    }
}

module.exports = nextConfig
