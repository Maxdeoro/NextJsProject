import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css';
import { JSX } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <>
      <Head>
        <title>MyNextApp</title>
      </Head>
      <Component {...pageProps} />
    </>
}

export default MyApp;
