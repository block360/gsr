import getConfig from "next/config";

const SENTRY_DSN: string =
	// "https://ae9ae93112d58bc6b9949c4fbb6c45aa@o4504870584909824.ingest.sentry.io/4505804967903232";
	// "https://83a7d563e2843e64f979b28fab41fdbd@o4504870584909824.ingest.sentry.io/4505805236994048";
  "https://9c2381c8256bf9cb1172cdab357125bc@o4504870584909824.ingest.sentry.io/4505900376522752";
	// "61d01319e6cf637961da2916ea933cbb8bbbb70a5d13b9390c4f36402ec9503a";

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
