import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { persistor, store } from "@/redux/store";

import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<>Loading...</>} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
      <ToastContainer position="top-right" pauseOnHover={false} />
    </>
  );
}

export default App;
