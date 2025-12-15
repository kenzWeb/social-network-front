import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@/shared/components/ui/Avatar'
import {getUploadUrl} from '@/shared/lib/uploads'

import {UserStoryPreviewItemProps} from '../types'
import styles from './UserStoryPreviewItem.module.css'

export const UserStoryPreviewItem = ({userInfo}: UserStoryPreviewItemProps) => {
	return (
		<Avatar className={styles.avatar}>
			<div className={styles.wrapper}>
				<AvatarImage
					className={styles.avatarImage}
					src={getUploadUrl(userInfo.avatar_url)}
				/>
			</div>
			<AvatarFallback className={styles.avatarFallback}>
				{userInfo.username?.[0]}
			</AvatarFallback>
		</Avatar>
	)
}
