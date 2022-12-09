import "../styles/globals.css";
import { addDecorator } from "@storybook/react";
import React, { Suspense } from "react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { ThemeProvider } from "theme-ui";
import { theme } from "../theme";
addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));
addDecorator((story, context) => (
  <Suspense fallback="Loading...">{story(context)}</Suspense>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
