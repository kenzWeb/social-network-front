import { Loader } from '@/entities/Loader'
import { useGetMeQuery } from '@/shared/api/hooks'
import { UserAvatar } from '@/shared/components/UserAvatar'
import { PostCardUserInfoProps } from '../types'
import styles from './PostCardUserInfo.module.css'

export const PostCardUserInfo = (props: PostCardUserInfoProps) => {
	const { data, isLoading, isPending } = useGetMeQuery()
	return (
		<>
			<div className={styles.left}>
				<Loader isLoading={isLoading} isPending={isPending} type="children">
					<UserAvatar img={data?.avatar_url} AvatarClass={styles.}/>
				</Loader>
			</div>
			<div className={styles.right}></div>
		</>
	)
}
