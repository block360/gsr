const { i18n } = require("./next-i18next.config");
const { withSentryConfig } = require("@sentry/nextjs");
const { publicRuntimeConfig } = require("./runtime.config.js");
/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig,
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withSentryConfig(nextConfig, {
  org: "gsu-protocol",
  project: "gsr",
  url: "https://sentry.io/",
  silent: true,
});
