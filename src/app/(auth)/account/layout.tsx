import {LayoutProps} from '@/shared/interfaces/interface.root'
import {AuthHeader} from '@/widgets/AuthHeader'
import {RootContainer} from '@/widgets/RootContainer'

export default function AuthLayout({children}: LayoutProps) {
	return (
		<div className='h-screen bg-auth'>
			<RootContainer>
				<AuthHeader />
				{children}
			</RootContainer>
		</div>
	)
}
