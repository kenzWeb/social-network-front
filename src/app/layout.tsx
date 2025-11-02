import {avenir} from '@/shared/fonts'
import {LayoutProps} from '@/shared/interfaces/interface.root'
import type {Metadata} from 'next'
import './globals.css'
import {Providers} from './providers'

export const metadata: Metadata = {
	title: 'Modern Social Network',
	description: 'Welcome to our modern social network.',
}

export default function RootLayout({children}: LayoutProps) {
	return (
		<html lang='en'>
			<body className={`${avenir.variable} ${avenir.className} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
