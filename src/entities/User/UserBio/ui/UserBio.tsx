import Image from 'next/image'
import {UserBioProps} from '../types'
import styles from './UserBio.module.css'

export const UserBio = ({bio}: UserBioProps) => {
	return (
		<h2 className={styles.text}>
			<Image width={24} height={24} src='/icons/profile/star-bio.svg' alt='' />{' '}
			{bio}{' '}
			<Image width={24} height={24} src='/icons/profile/star-bio.svg' alt='' />
		</h2>
	)
}
