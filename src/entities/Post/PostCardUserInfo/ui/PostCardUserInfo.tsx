import { Loader } from '@/entities/Loader'
import { useGetMeQuery } from '@/shared/api/hooks'
import { UserAvatar } from '@/shared/components/UserAvatar'
import { useTimeAgo } from '@/shared/hooks/useTimeAgo'
import Image from 'next/image'
import styles from './PostCardUserInfo.module.css'

export const PostCardUserInfo = () => {
	const { data, isLoading, isPending } = useGetMeQuery()
	const { timeAgo } = useTimeAgo(data?.updated_at || '')
	return (
		<>
			<div className={styles.left}>
				<Loader isLoading={isLoading} isPending={isPending} type="children">
					<UserAvatar
						img={data?.avatar_url}
						AvatarClass={styles.avatar}
						AvatarImgClass={styles.avatarImg}
					/>
				</Loader>
				<h2 className={styles.name}>{data?.first_name}</h2>
			</div>
			<div className={styles.right}>
				<div className={styles.usernameWrapper}>
					<h2 className={styles.username}>@{data?.username}</h2>
					<Image src={'/icons/user/official.svg'} alt="off" width={30} height={30} />
				</div>

				<div className="flex items-center">
					<h2 className={styles.fullname}>
						{data?.first_name} {data?.last_name}
					</h2>
					{timeAgo && <p className={styles.timeAgo}>{` . ${timeAgo}`}</p>}
				</div>
			</div>
		</>
	)
}
