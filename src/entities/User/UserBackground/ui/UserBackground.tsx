import Image from 'next/image'
import {UserBackgroundProps} from '../types'
import styles from './UserBackground.module.css'

export const UserBackground = (props: UserBackgroundProps) => {
	return (
		<div className={styles.wrapper}>
			<Image className={styles.image} src='/icons/profile/arch.svg' alt='User Background' width={50} height={50}/>
		</div>
	)
}
