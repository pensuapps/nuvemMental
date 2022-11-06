import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="manifest" href="/manifest.json"/>
					<link rel="apple-touch-icon" href="/brainfog-logo.png"></link>
					<meta name="description" content="Brain Fog - Seu app sobre Nuvem Mental" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta name="theme-color" content="#000000" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;