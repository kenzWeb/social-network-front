'use client'

import {useGetMeQuery} from '@/shared/api/hooks/useGetMeQuery'
import {UserFollowStats} from '../../UserFollowStats'
import styles from './UserProfileCard.module.css'

export const UserProfileCard = () => {
	const {data} = useGetMeQuery()
	return (
		<div className={styles.wrapper}>
			<UserFollowStats
				followers={data?.followers_count ?? 0}
				followind={data?.following_count ?? 0}
			/>
		</div>
	)
}
