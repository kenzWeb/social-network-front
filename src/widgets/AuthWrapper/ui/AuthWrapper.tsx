import {COPYRIGHT} from '../models'
import {AuthWrapperProps} from '../types'
import styles from './AuthWrapper.module.css'

export function AuthWrapper({children, heading}: AuthWrapperProps) {
	return (
		<section className={styles.wrapper}>
			<div>
				<h1 className={styles.heading}>{heading}</h1>
				{children}
				<h2>{COPYRIGHT}</h2>
			</div>
		</section>
	)
}
