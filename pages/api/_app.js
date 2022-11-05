import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="analytics" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-NH96L9TSD8">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NH96L9TSD8');
            page_path: window.location.pathname,
          });
          `}
        </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp
