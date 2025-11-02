import {LayoutProps} from '@/shared/interfaces/interface.root'
import {RootContainer} from '@/widgets/RootContainer'
import type {Metadata} from 'next'

export const metadata: Metadata = {
	title: 'Home Page',
	description: 'Welcome to the home page of our modern social network.',
}

export default function MainLayout({children}: LayoutProps) {
	return <RootContainer>{children}</RootContainer>
}
