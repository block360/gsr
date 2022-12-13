const publicRuntimeConfig = {
  // Will be available on both server and client
  buildHash: process.env.COMMIT_SHA,
  buildDate: Date.now(),
  sentryRelease: process.env.SENTRY_RELEASE,
};

module.exports = {
  publicRuntimeConfig: publicRuntimeConfig,
};
