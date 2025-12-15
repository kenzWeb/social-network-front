import {Loader} from '@/entities/Loader'
import {UserStoryPreviewItem} from '@/entities/User'
import {useGetStories} from '@/shared/api/hooks'
import styles from './UserStoryPreview.module.css'

export const UserStoryPreview = () => {
	const {users, isLoading, isPending} = useGetStories()

	return (
		<div className={styles.wrapper}>
			{isLoading && (
				<Loader
					className='size-10'
					isPending={isPending}
					isLoading={isLoading}
				/>
			)}

			{users.map((user) =>
				(user.stories?.length ?? 0) > 0 ? (
					<UserStoryPreviewItem
						key={user.id}
						userInfo={user}
						stories={user.stories ?? []}
					/>
				) : null,
			)}
		</div>
	)
}
