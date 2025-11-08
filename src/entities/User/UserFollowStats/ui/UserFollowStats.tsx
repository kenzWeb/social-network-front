import {UserFollowStatsProps} from '../types'
import styles from './UserFollowStats.module.css'

export const UserFollowStats = ({
	followers,
	following,
}: UserFollowStatsProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.item}>
				<h2 className={styles.text}>{followers}</h2>
				<h3 className={styles.title}>Followers</h3>
			</div>
			<div className={styles.item}>
				<h2 className={styles.text}>{following}</h2>
				<h3 className={styles.title}>Following</h3>
			</div>
		</div>
	)
}
