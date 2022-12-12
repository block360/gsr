import "../styles/globals.css";
import { CacheProvider, Global } from "@emotion/react";
import createCache from "@emotion/cache";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { theme } from "../theme";
import { globalStyles } from "../helpers";

const key = "gsr-cache";
const cache = createCache({ key });

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={cache}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </CacheProvider>
    </ThemeProvider>
  );
}
export default appWithTranslation(App);
