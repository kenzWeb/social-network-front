import { Loader } from '@/entities/Loader'
import { UserAvatar } from '@/shared/components/UserAvatar'
import { useTimeAgo } from '@/shared/hooks/useTimeAgo'
import Image from 'next/image'
import { PostCardUserInfoProps } from '../types'
import styles from './PostCardUserInfo.module.css'

export const PostCardUserInfo = (props: PostCardUserInfoProps) => {
	const { timeAgo } = useTimeAgo(props.updatedAt || '')
	return (
		<>
			<div className={styles.left}>
				<Loader
					isLoading={props.isLoading ?? false}
					isPending={props.isPending ?? false}
					type="children"
				>
					<UserAvatar
						img={props.post?.avatar_url}
						AvatarClass={styles.avatar}
						AvatarImgClass={styles.avatarImg}
					/>
				</Loader>
				<h2 className={styles.name}>{props.post?.first_name}</h2>
			</div>
			<div className={styles.right}>
				<div className={styles.usernameWrapper}>
					<h2 className={styles.username}>@{props.post?.username}</h2>
					<Image src={'/icons/user/official.svg'} alt="off" width={30} height={30} />
				</div>

				<div className="flex items-center">
					<h2 className={styles.fullname}>
						{props.post?.first_name} {props.post?.last_name}
					</h2>
					{timeAgo && <p className={styles.timeAgo}>{` . ${timeAgo}`}</p>}
				</div>
			</div>
		</>
	)
}
