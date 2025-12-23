'use client'

import { Loader } from '@/entities/Loader'
import { UserStoryPreviewItem } from '@/entities/User'
import { useGetStories } from '@/shared/api/hooks'
import { FreeMode, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'

import styles from './UserStoryPreview.module.css'

export const UserStoryPreview = () => {
	const { users, isLoading, isPending } = useGetStories()

	return (
		<div className={styles.wrapper}>
			{isLoading && (
				<Loader
					className="size-10"
					isPending={isPending}
					isLoading={isLoading}
				/>
			)}
			<Swiper
				className={styles.swiper}
				modules={[Navigation, FreeMode]}
				slidesPerView="auto"
				spaceBetween={45}
				freeMode={{
					enabled: true,
					sticky: false,
					momentumBounce: false
				}}
				navigation
			>
				{users.map(user =>
					(user.stories?.length ?? 0) > 0 ? (
						<SwiperSlide
							className={styles.slide}
							key={user.id}
						>
							<UserStoryPreviewItem
								userInfo={user}
								stories={user.stories ?? []}
							/>
						</SwiperSlide>
					) : null
				)}
			</Swiper>
		</div>
	)
}
