const publicRuntimeConfig = {
  // Will be available on both server and client
  mixpanelEnv: process.env.MIXPANEL_ENV,
  mixpanelAPIKey: process.env.MIXPANEL_KEY,
  buildHash: process.env.COMMIT_SHA,
  buildDate: Date.now(),
  sentryRelease: process.env.SENTRY_RELEASE,
};

module.exports = {
  publicRuntimeConfig: publicRuntimeConfig,
};
