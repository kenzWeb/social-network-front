import {API_URL} from '@/shared/constants/root.constants'
import Image from 'next/image'
import {UserStoryPreviewItemProps} from '../types'
import styles from './UserStoryPreviewItem.module.css'

export const UserStoryPreviewItem = (props: UserStoryPreviewItemProps) => {
	console.log(props)
	return (
		<div className={styles.wrapper}>
			{props.userInfo.map((user, index) => (
				<div key={user.id} className={styles.userItem}>
					<h3>{user.username}</h3>
					<div className={styles.stories}>
						<Image
							src={`${API_URL}${user.avatar_url}`}
							width={50}
							height={50}
							alt={`Story ${user.id} by ${user.username}`}
							className={styles.storyImage}
						/>
					</div>
				</div>
			))}
		</div>
	)
}
