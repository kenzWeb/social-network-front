import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
	turbopack: {
		root: process.cwd(),
	},
	images: {
		domains: ['localhost'],
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '8080',
				pathname: '/uploads/**',
			},
			{
				protocol: 'https',
				hostname: 'api.example.com',
				pathname: '/uploads/**',
			},
		],
	},
	rewrites: async () => [
		{
			source: '/uploads/:path*',
			destination: 'http://localhost:8080/uploads/:path*',
		},
	],
}

export default nextConfig
