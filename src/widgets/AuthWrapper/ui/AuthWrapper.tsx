import Image from 'next/image'
import {COPYRIGHT} from '../models'
import {AuthWrapperProps} from '../types'
import styles from './AuthWrapper.module.css'

export function AuthWrapper({children, heading}: AuthWrapperProps) {
	return (
		<section className={styles.wrapper}>
			<div className={styles.content}>
				<h1 className={styles.heading}>{heading}</h1>
				{children}
				<h2 className={styles.copyright}>{COPYRIGHT}</h2>
			</div>

			<div className={styles.image}>
				<Image
					className={styles.img}
					src='/images/register-page.jpg'
					alt='People collaborating'
					width={700}
					height={500}
				/>
			</div>
		</section>
	)
}
