import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import type { AppProps } from "next/app";
import "regenerator-runtime/runtime";
import "../styles/globals.css";

// Include what chains you wanna support.
// 4 = Rinkeby.
const supportedChainIds = [4];

// Include what type of wallet you want to support.
// In this case, we support Metamask which is an "injected wallet".
const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
