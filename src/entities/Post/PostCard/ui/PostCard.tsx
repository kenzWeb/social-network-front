import { PostCardContent } from '../../PostCardContent'
import { PostCardUserInfo } from '../../PostCardUserInfo'
import { PostCardProps } from '../types'
import styles from './PostCard.module.css'

export const PostCard = (props: PostCardProps) => {
	return (
		<div className={styles.wrapper}>
			<PostCardUserInfo />
			<PostCardContent />
		</div>
	)
}
