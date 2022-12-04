import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Script from 'next/script'
export default function App({ Component, pageProps }: AppProps) {
  return <>
   <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script src='bootstrap/dist/js/bootstrap'></Script>
      </Head>
  <Navbar/>
  <Component {...pageProps} />
  </>
  
}
