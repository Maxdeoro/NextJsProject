import { AppProps } from 'next/dist/shared/lib/router/router';
import '../styles/globals.css';
import { JSX, useEffect } from 'react';
import Head from 'next/head';
import React from 'react';
import ReactGA from 'react-ga4';
import Router from 'next/router';

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {

  useEffect(() => {
      ReactGA.initialize('YOUR_TRACKING_ID');
    }, []);

  Router.events.on('routeChangeComplete', (url: string) => {
    if (typeof window !== 'undefined') {
      ReactGA.send({hitType:'pageview', page: url});
    }
  })

  return <>
      <Head>
        <title>MyNextApp</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://www.google-analytics.com/"/>
        <meta property='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}/>
        <meta property='og:locale' content='en_EN'/>
      </Head>
      <Component {...pageProps} />
    </>
}

export default MyApp;

