import "@/styles/globals.css";

import { persistor, store } from "@/redux/store";

import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={<>Loading...</>} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default App;
