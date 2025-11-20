'use client'

import {
	UserAvatar,
	UserFollowStats,
	UserHandle,
	UserName,
} from '@/entities/User'
import {useGetMeQuery} from '@/shared/api/hooks/useGetMeQuery'
import {Spinner} from '@/shared/components/ui/Spinner'
import {UserBio} from '../../UserBio'
import styles from './UserProfileCard.module.css'

export const UserProfileCard = () => {
	const {data, isLoading, isPending} = useGetMeQuery()
	return (
		<div className={styles.wrapper}>
			{isLoading || isPending ? (
				<Spinner className='size-10 absolute' color='var(--primary)' />
			) : (
				<>
					<div className={styles.avatarContainer}>
						<UserFollowStats
							followers={data?.followers_count ?? 0}
							following={data?.following_count ?? 0}
						/>
						<UserAvatar img={data?.avatar_url ?? ''} />
					</div>
					<UserName
						firstName={data?.first_name ?? 'NuN'}
						lastName={data?.last_name ?? 'NuN'}
					/>
					<UserHandle username={data?.username ?? 'NuN'} />
					<UserBio bio={data?.bio ?? 'Not Bio'} />
				</>
			)}
		</div>
	)
}
