import { getUploadUrl } from '@/shared/lib/uploads'
import { cn } from '@/shared/lib/utils'
import Image from 'next/image'
import { UserAvatarProps } from '../types'
import styles from './UserAvatar.module.css'

export const UserAvatar = ({ img }: UserAvatarProps) => {
	const imageUrl = getUploadUrl(img)

	return (
		<div className={styles.avatarWrapper}>
			{imageUrl ? (
				<Image
					src={imageUrl}
					alt="User Avatar"
					className={styles.avatar}
					width={115}
					height={115}
				/>
			) : (
				<div className={cn(styles.avatar, 'w-28.75 h-28.75 bg-slate-200 dark:bg-slate-800')} />
			)}
		</div>
	)
}
