import {RootHeader} from '@/widgets/RootHeader'
import {StoriesCarousel} from '@/widgets/StoriesCarousel'
import {UserProfileSidebar} from '@/widgets/UserProfileSidebar'
import styles from './page.module.css'

export default function Home() {
	return (
		<>
			<RootHeader />
			<main className={styles.main}>
				<UserProfileSidebar />
				<StoriesCarousel />
				<div className='w-[30vw]'>TEST</div>
			</main>
		</>
	)
}
