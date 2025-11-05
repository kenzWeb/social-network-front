import styles from './UserName.module.css'
import { UserNameProps } from '../types'

export const UserName = (props: UserNameProps) => {
	return (
		<div className={styles.wrapper}>
			UserName
		</div>
	)
}
