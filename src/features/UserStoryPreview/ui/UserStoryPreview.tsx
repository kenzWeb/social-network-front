import {UserStoryPreviewProps} from '../types'
import styles from './UserStoryPreview.module.css'

export const UserStoryPreview = (props: UserStoryPreviewProps) => {
	return (
		<div className={styles.wrapper}>
			{props.items.map((item) => (
				<h2>{item.user?.avatar_url}</h2>
			))}
		</div>
	)
}
