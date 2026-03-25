import { CreatePostForm, PostCard } from '@/entities/Post'
import { PostFeedProps } from '../types'
import styles from './PostFeed.module.css'

export const PostFeed = (props: PostFeedProps) => {
	return (
		<div className={styles.wrapper}>
			<CreatePostForm />
			<PostCard />
		</div>
	)
}
