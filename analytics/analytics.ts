import * as mixpanelBrowser from "mixpanel-browser";
import getConfig from "next/config";

export type MixpanelDevelopmentType = {
  track: (eventType: string, payload: any) => void;
  get_distinct_id: () => string;
};

export function enableMixpanelDevelopmentMode<T>(
  mixpanel: T
): T | MixpanelDevelopmentType {
  const env =
    getConfig()?.publicRuntimeConfig.mixpanelEnv || process.env.MIXPANEL_ENV;

  if (env !== "production" && env !== "staging") {
    return {
      track: function (eventType: string, payload: any) {
        console.info("Mixpanel Event: ", eventType, payload);
      },
      get_distinct_id: () => "test_id",
    };
  }

  return mixpanel;
}

type MixpanelType = MixpanelDevelopmentType | typeof mixpanelBrowser;
let mixpanel: MixpanelType = mixpanelBrowser;

mixpanel = enableMixpanelDevelopmentMode<MixpanelType>(mixpanel);

export const INPUT_DEBOUNCE_TIME = 800;

export enum Pages {
  LandingPage = "LandingPage",
}

function mixpanelInternalAPI(
  eventName: string,
  eventBody: { [key: string]: any }
) {
  const distinctId = mixpanel.get_distinct_id();

  // eslint-disable-next-line
  fetch("/api/t", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      eventName,
      eventBody,
      distinctId,
    }),
  });
}

export const trackingEvents = {
  pageView: (location: string) => {
    mixpanel.track("Pageview", {
      id: location,
    });
  },

  accountChange: (account: string, network: string, walletType: string) => {
    const eventName = "account-change";
    const eventBody = {
      id: "AccountChange",
      account,
      network,
      walletType,
    };

    mixpanel.track(eventName, eventBody);
    mixpanelInternalAPI(eventName, eventBody);
  },
};

export type Tracker = typeof trackingEvents;
