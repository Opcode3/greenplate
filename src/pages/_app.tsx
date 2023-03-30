import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
      <meta
          name="description"
          content="Prazzle is a platform that celebrates, inspires, and connects creatives around the world by giving them access to opportunities and recognizing their talent."
        />
        <meta
          name="keywords"
          content="creatives, untapped pool of talent, talent, world talent, designers, prazzle, fashion, beauty, luxury, lifestyle, prazzle magazine"
        />
        <meta name="author" content="Joseph Emmanuel emeka" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        {/* <link
          rel="shortcut icon"
          href="/images/prazzle_black_logo.svg"
          type="image/x-icon"
        /> */}
    </Head>
    <Component {...pageProps} />
  </>)
}