import Image from 'next/image'
import {COPYRIGHT} from '../models'
import {AuthWrapperProps} from '../types'
import styles from './AuthWrapper.module.css'

export function AuthWrapper({children, heading}: AuthWrapperProps) {
	return (
		<section className={styles.wrapper}>
			<div>
				<h1 className={styles.heading}>{heading}</h1>
				{children}
				<h2 className={styles.copyright}>{COPYRIGHT}</h2>
			</div>

			<div>
				<Image
					src='/images/auth-image.png'
					alt='People collaborating'
					width={700}
					height={500}
				/>
			</div>
		</section>
	)
}
