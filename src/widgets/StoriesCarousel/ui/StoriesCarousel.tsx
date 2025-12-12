import {UserStoryPreview} from '@/features/UserStoryPreview'
import {useGetStories} from '@/shared/api/hooks/'
import styles from './StoriesCarousel.module.css'

export const StoriesCarousel = () => {
	const {data} = useGetStories()
	return (
		<div className={styles.wrapper}>
			<UserStoryPreview items={data ?? []} />
		</div>
	)
}
