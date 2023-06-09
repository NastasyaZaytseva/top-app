import App, { AppProps } from 'next/app';
import '../styles/globals.css';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element  {
  return <>
    <Head>
      <title>My top — мой лучший топ</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps}/>
    
    </>;
}

export default MyApp;
