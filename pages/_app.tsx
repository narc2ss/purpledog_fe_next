import "swiper/css";
import "swiper/css/scrollbar";

import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { globalStyle } from "../src/styles/globalStyle";
import GlobalWidth from "../src/styles/globalWidth";
import BottomNavigator from "../src/components/navigator/BottomNavigator";

const queryClient = new QueryClient();
const isDev = process.env.NODE_ENV === "development" ? true : false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=0"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyle} />
        <GlobalWidth>
          <Component {...pageProps} />
          <BottomNavigator />
        </GlobalWidth>
        {isDev && <ReactQueryDevtools />}
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
