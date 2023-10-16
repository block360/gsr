const { i18n } = require("./next-i18next.config");
const { withSentryConfig } = require("@sentry/nextjs");
const { publicRuntimeConfig } = require("./runtime.config.js");
/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig,
  i18n,
  reactStrictMode: true,
  swcMinify: false,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withSentryConfig(nextConfig, {
  org: "block360-ea",
  project: "javascript-nextjs-gsr",
  url: "https://sentry.io/",
  silent: true,
});
