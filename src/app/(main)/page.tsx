import {RootHeader} from '@/widgets/RootHeader'
import {UserProfileSidebar} from '@/widgets/UserProfileSidebar'

export default function Home() {
	return (
		<>
			<RootHeader />
			<main className='p-10'>
				<UserProfileSidebar />
			</main>
		</>
	)
}
