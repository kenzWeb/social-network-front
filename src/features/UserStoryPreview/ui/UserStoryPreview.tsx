'use client'

import { Loader } from '@/entities/Loader'
import { UserStoryPreviewItem } from '@/entities/User'
import { useGetStories } from '@/shared/api/hooks'
import { FreeMode, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.css'

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
			<button className={styles.prevButton} />
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
				navigation={{
					prevEl: `.${styles.prevButton}`,
					nextEl: `.${styles.nextButton}`,
					disabledClass: styles.buttonDisabled
				}}
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
			<button className={styles.nextButton} />
		</div>
	)
}
