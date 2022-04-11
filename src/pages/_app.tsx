import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../components/Header/Header";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
