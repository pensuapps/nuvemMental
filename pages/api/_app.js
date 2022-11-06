import Script from "next/script";
import "../../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "../../lib/google-analytics";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			ga.pageView(url);
		};

		router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Script strategy="lazyOnload" src={`"https://www.googletagmanager.com/gtag/js?id=G-Q67MYCWE50`}/>

			<Script id="google-analytics-script" strategy="lazyOnload">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-Q67MYCWE50');
					page_path: window.location.pathname,
				});
			`}
			</Script>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp
