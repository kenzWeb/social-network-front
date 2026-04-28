import styles from './PostCardContent.module.css'
import { PostCardContentProps } from '../types'

export const PostCardContent = (props: PostCardContentProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.bio}></div>
		</div>
	)
}
