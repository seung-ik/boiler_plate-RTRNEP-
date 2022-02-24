import React from 'react';
import type { AppProps } from 'next/app'
import GlobalStyle from '@styles/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
