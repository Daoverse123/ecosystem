import "@/styles/globals.css";
import type { AppProps } from "next/app";

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
    <WalletProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </WalletProvider>
  );
}
