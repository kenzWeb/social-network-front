import { useGetMeQuery } from '@/shared/api/hooks'
import { Avatar } from '@/shared/components/ui/Avatar'
import { Input } from '@/shared/components/ui/Input'
import { getUploadUrl } from '@/shared/lib/uploads'
import { AvatarImage } from '@radix-ui/react-avatar'
import { CreatePostFormProps } from '../types'
import styles from './CreatePostForm.module.css'

export const CreatePostForm = (props: CreatePostFormProps) => {
	const { data } = useGetMeQuery()
	return (
		<div className={styles.wrapper}>
			<Avatar className={styles.avatar}>
				<AvatarImage src={getUploadUrl(data?.avatar_url)} />
			</Avatar>
			<Input />
		</div>
	)
}
