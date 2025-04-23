import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css';
import { JSX } from 'react';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return <>
      <Head>
        <title>MyNextApp</title>
        <meta property='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}/>
        <meta property='og:locale' content='en_EN'/>
      </Head>
      <Component {...pageProps} />
    </>
}

export default MyApp;

