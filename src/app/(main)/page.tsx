import {RootHeader} from '@/widgets/RootHeader'
import {StoriesCarousel} from '@/widgets/StoriesCarousel'
import {UserProfileSidebar} from '@/widgets/UserProfileSidebar'

export default function Home() {
	return (
		<>
			<RootHeader />
			<main className='p-10'>
				<UserProfileSidebar />
				<StoriesCarousel />
			</main>
		</>
	)
}
