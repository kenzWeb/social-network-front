import {CommunityItem} from '../../CommunityItem'
import styles from './CommunityList.module.css'

export const CommunityList = () => {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Communities</h2>
			<div className={styles.list}>
				<CommunityItem
					avatar='/icons/test-icon.jpg'
					name='Frontend Developers'
					myFriendsCount='12'
				/>
				<CommunityItem
					avatar='/icons/test-icon.jpg'
					name='UX Designer communitiy'
					myFriendsCount='32'
				/>
				<CommunityItem
					avatar='/icons/test-icon.jpg'
					name='Back end developers'
					myFriendsCount='16'
				/>
			</div>
		</div>
	)
}
