import { getUploadUrl } from '@/shared/lib/uploads'
import { cn } from '@/shared/lib/utils'
import { Avatar, AvatarImage } from '../../ui/Avatar'
import { UserAvatarProps } from '../types'
import styles from './UserAvatar.module.css'

export const UserAvatar = (props: UserAvatarProps) => {
	return (
		<div className={styles.wrapper}>
			<Avatar className={cn(props.AvatarClass)}>
				<AvatarImage
					width={props.width}
					height={props.height}
					className={cn(props.AvatarImgClass)}
					src={getUploadUrl(props.img)}
				/>
			</Avatar>
		</div>
	)
}
