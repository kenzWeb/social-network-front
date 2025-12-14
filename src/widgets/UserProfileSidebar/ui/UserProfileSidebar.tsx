import {CommunityList} from '@/entities/Community'
import {SkillList} from '@/entities/Skill'
import {UserBackground, UserProfileCard} from '@/entities/User'
import styles from './UserProfileSidebar.module.css'

export const UserProfileSidebar = () => {
	return (
		<aside className={styles.wrapper}>
			<UserBackground />
			<UserProfileCard />
			<SkillList />
			<CommunityList />
		</aside>
	)
}
