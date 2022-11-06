export const pageView = (url) => {
	if (typeof window !== "undefined") {
		window.gtag('config', 'G-Q67MYCWE50', {
			page_path: url,
		});
	}
}

export const event = ({ action, params }) => {
	if (typeof window !== "undefined") {
		window.gtag('event', action, params);
	}
}
