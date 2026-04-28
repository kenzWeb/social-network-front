import { getUploadUrl } from '@/shared/lib/uploads'
import Image from 'next/image'
import { PostCardContentProps } from '../types'
import styles from './PostCardContent.module.css'

export const PostCardContent = (props: PostCardContentProps) => {
	const post = props.post
	console.log(post)
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.description}>{post.content}</h2>

			{post.image_url && (
				<Image
					src={getUploadUrl(post.image_url)!}
					alt="Post content"
					className={styles.image}
					width={0}
					height={0}
					sizes="100vw"
					style={{ width: '100%', height: 'auto' }}
				/>
			)}
		</div>
	)
}
