'use client'

import { UserStoryPreview } from '@/features/UserStoryPreview'
import { PostFeed } from '@/widgets/PostFeed'
import styles from './StoriesCarousel.module.css'

export const StoriesCarousel = () => {
	return (
		<div className={styles.wrapper}>
			<UserStoryPreview />
			<PostFeed />
		</div>
	)
}
