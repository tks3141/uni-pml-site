import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleAnalytics, usePageView } from '../lib/gtag';

function MyApp({ Component, pageProps }: AppProps) {
  usePageView();

  return (
    <>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
