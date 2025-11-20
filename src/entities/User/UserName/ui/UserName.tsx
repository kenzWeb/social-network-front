import {UserNameProps} from '../types'
import styles from './UserName.module.css'

export const UserName = ({firstName, lastName}: UserNameProps) => {
	return (
		<h2 className={styles.text}>
			{firstName} {lastName}
		</h2>
	)
}
