import { UserAvatar } from '@/shared/components/UserAvatar'
import { CommunityItemProps } from '../types'
import styles from './CommunityItem.module.css'

export const CommunityItem = (props: CommunityItemProps) => {
	return (
		<div className={styles.wrapper}>
			<UserAvatar img={props.avatar} />
			<div className={styles.info}>
				<h3 className={styles.name}>{props.name}</h3>
				<p className={styles.friendsCount}>{props.myFriendsCount} your friends are in</p>
			</div>
		</div>
	)
}
