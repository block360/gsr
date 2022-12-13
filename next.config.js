const { i18n } = require("./next-i18next.config");
const { withSentryConfig } = require("@sentry/nextjs");
/** @type {import('next').NextConfig} */
const nextConfig = { i18n, reactStrictMode: true, swcMinify: true };

module.exports = withSentryConfig(nextConfig, {
  org: "gsu-protocol",
  project: "gsr",
  url: "https://sentry.io/",
  silent: true,
});
