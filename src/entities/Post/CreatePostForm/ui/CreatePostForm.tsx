import { useGetMeQuery } from '@/shared/api/hooks'
import { Input } from '@/shared/components/ui/Input'
import { UserAvatar } from '@/shared/components/UserAvatar'
import styles from './CreatePostForm.module.css'

export const CreatePostForm = () => {
	const { data } = useGetMeQuery()
	return (
		<div className={styles.wrapper}>
			<UserAvatar
				img={data?.avatar_url}
				AvatarImgClass={styles.avatarImg}
				AvatarClass={styles.avatar}
			/>
			<Input className={styles.input} placeholder="Tell your friends about your thoughts.." />
		</div>
	)
}
