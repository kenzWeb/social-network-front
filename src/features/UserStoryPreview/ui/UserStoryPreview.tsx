import {UserStoryPreviewItem} from '@/entities/User'
import {useGetStories} from '@/shared/api/hooks'
import styles from './UserStoryPreview.module.css'

export const UserStoryPreview = () => {
	const {stories, userInfo} = useGetStories()

	return (
		<div className={styles.wrapper}>
			<UserStoryPreviewItem userInfo={userInfo} stories={stories} />
		</div>
	)
}
