import {getUploadUrl} from '@/shared/lib/uploads'
import Image from 'next/image'
import {UserAvatarProps} from '../types'
import styles from './UserAvatar.module.css'

export const UserAvatar = ({img}: UserAvatarProps) => {
	return (
		<div className={styles.avatarWrapper}>
			<Image
				src={getUploadUrl(img) ?? ''}
				alt='User Avatar'
				className={styles.avatar}
				width={115}
				height={115}
			/>
		</div>
	)
}
