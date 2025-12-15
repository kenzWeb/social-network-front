import {Avatar, AvatarImage} from '@/shared/components/ui/Avatar'
import {getUploadUrl} from '@/shared/lib/uploads'
import {CommunityItemProps} from '../types'
import styles from './CommunityItem.module.css'

export const CommunityItem = (props: CommunityItemProps) => {
	return (
		<div className={styles.wrapper}>
			<Avatar className={styles.avatar}>
				ё
				<AvatarImage src={getUploadUrl(props.avatar)} />
			</Avatar>
			<div className={styles.info}>
				<h3 className={styles.name}>{props.name}</h3>
				<p className={styles.friendsCount}>
					{props.myFriendsCount} your friends are in
				</p>
			</div>
		</div>
	)
}
