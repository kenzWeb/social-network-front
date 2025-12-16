import {Loader} from '@/entities/Loader'
import {UserStoryPreviewItem} from '@/entities/User'
import {useGetStories} from '@/shared/api/hooks'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/shared/components/ui/Carousel'
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
			<Carousel
				className={styles.carousel}
				opts={{
					align: 'start',
					dragFree: true,
				}}
			>
				<CarouselContent className={styles.carouselContent}>
					{users.map((user) =>
						(user.stories?.length ?? 0) > 0 ? (
							<CarouselItem className={styles.carouselItem} key={user.id}>
								<UserStoryPreviewItem
									userInfo={user}
									stories={user.stories ?? []}
								/>
							</CarouselItem>
						) : null,
					)}
				</CarouselContent>
			</Carousel>
		</div>
	)
}
