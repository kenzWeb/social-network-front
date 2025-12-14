import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
	turbopack: {
		root: process.cwd(),
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '8080',
				pathname: '**',
			},
		],
	},
}

export default nextConfig
