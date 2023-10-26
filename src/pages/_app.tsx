import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import Auth from "./../components/auth";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

import WalletProvider from "@/providers/AuthProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy={"beforeInteractive"}
      ></Script>
      <WalletProvider>
        <QueryClientProvider client={queryClient}>
          {/* <Auth /> */}
          <Component {...pageProps} />
        </QueryClientProvider>
      </WalletProvider>
    </>
  );
}
