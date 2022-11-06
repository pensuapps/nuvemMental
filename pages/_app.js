import Script from "next/script";
import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "../lib/ga.js";

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
			<Component {...pageProps} />
		</>
	);
}

export default MyApp
