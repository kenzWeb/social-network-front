import { CreatePostForm, PostCard } from '@/entities/Post'
import styles from './PostFeed.module.css'

export const PostFeed = () => {
	return (
		<div className={styles.wrapper}>
			<CreatePostForm />
			<PostCard />
		</div>
	)
}
