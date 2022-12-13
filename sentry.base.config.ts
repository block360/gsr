import getConfig from "next/config";

const SENTRY_DSN: string =
  "https://aa25534a18bb453fb2d0fcf15087502c@o1364656.ingest.sentry.io/4504316023078912";

export const sentryBaseConfig = {
  dsn: SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NEXT_PUBLIC_SENTRY_ENV,
  // release is also used for source map uploads at build time,
  // so ensure that SENTRY_RELEASE is the same at build time.
  release:
    process.env.SENTRY_RELEASE ||
    getConfig()?.publicRuntimeConfig?.sentryRelease,
  enabled: process.env.NEXT_PUBLIC_SENTRY_ENV !== "development",
};
