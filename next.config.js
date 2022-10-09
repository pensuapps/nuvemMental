// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig
const withPWA = require('next-pwa')({
		dest: 'public',
		register: true,
		skipWaiting: true,
		// loader: 'imgix',
})

module.exports = withPWA({
	// next.js config
	experimental: {
		images: {
			unoptimized: true,
		},
	},
})
