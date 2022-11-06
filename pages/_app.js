import { useEffect } from 'react';
import { useRouter } from 'next/router';

import '../styles/globals.css';

import { pageView } from '../lib/ga.js';


function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url) => {
			pageView(url);
		};

		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
