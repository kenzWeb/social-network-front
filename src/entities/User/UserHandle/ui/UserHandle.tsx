import { UserHandleProps } from '../types'
import styles from './UserHandle.module.css'

export const UserHandle = ({username}: UserHandleProps) => {
	return (
		<div className={styles.text}>
			@{username}
		</div>
	)
}
