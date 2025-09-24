import {AuthWrapperProps} from '../types'
import styles from './AuthWrapper.module.css'

export default function AuthWrapper({children, heading}: AuthWrapperProps) {
	return (
		<section className={styles.wrapper}>
			<h1 className={styles.heading}>{heading}</h1>
			{children}
		</section>
	)
}
