'use client'

import {Loader} from '@/entities/Loader'
import {
	UserAvatar,
	UserBio,
	UserFollowStats,
	UserHandle,
	UserName,
	UserProfileButton,
} from '@/entities/User'

import {useGetMeQuery} from '@/shared/api/hooks'
import styles from './UserProfileCard.module.css'

export const UserProfileCard = () => {
	const {data, isLoading, isPending} = useGetMeQuery()
	const loading = isLoading || isPending

	return (
		<div className={styles.wrapper}>
			{loading ? (
				<Loader
					className='size-10'
					text='Loading profile data...'
					isLoading={isLoading}
					isPending={isPending}
				/>
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
					<UserBio
						bio={data?.bio ?? 'My name is Sultan, i am a software developer.'}
					/>
					<UserProfileButton />
				</>
			)}
		</div>
	)
}
