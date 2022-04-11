import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { globalStyle } from "../src/styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
