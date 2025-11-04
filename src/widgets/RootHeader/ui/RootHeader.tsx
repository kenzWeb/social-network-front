import {HeaderAvatar} from '@/features/HeaderAvatar'
import {HeaderNav} from '@/features/HeaderNav'
import {SearchHeader} from '@/features/SearchHeader'
import Image from 'next/image'
import styles from './RootHeader.module.css'

export const RootHeader = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>
				<Image src='/icons/header-icon.svg' alt='Logo' width={55} height={55} />
				<SearchHeader />
			</div>
			<div className={styles.center}>
				<HeaderNav />
			</div>
			<div className={styles.right}>
				<HeaderAvatar />
			</div>
		</div>
	)
}
