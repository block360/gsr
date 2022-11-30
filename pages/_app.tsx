import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "theme-ui";
import { theme } from "../theme";
import { openSansFont } from "../helpers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${openSansFont.className}`}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
