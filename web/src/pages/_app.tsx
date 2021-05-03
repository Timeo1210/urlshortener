import React from "react";
import "@/styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Footer from "@/components/Footer";
import { ReactQueryDevtools } from "react-query/devtools";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
    </QueryClientProvider>
    <Footer />
  </>
);

export default MyApp;
