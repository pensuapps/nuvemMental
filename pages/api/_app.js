import Document, { Html, Head, Main, NextScript } from "next/document";
import '../..styles/globals.css'
import { useEffect } from "react"
function MyApp({ Component, pageProps }) {
  return (
    <Document>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </Document>
  );
}

export default MyApp
