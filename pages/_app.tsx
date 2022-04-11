import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { globalStyle } from "../src/styles/globalStyle";
import GlobalWidth from "../src/styles/globalWidth";

const queryClient = new QueryClient();
const isDev = process.env.NODE_ENV === "development" ? true : false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyle} />
        <GlobalWidth>
          <Component {...pageProps} />
        </GlobalWidth>
        {isDev && <ReactQueryDevtools />}
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
