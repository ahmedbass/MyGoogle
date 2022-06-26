import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { SearchContextProvider } from "./../store/search-context";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <SearchContextProvider>
        <Layout>
          <Head>
            <title>My Google</title>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </SearchContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
