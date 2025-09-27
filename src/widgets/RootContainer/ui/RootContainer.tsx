import {LayoutProps} from '@/shared/interfaces/interface.root'
import styles from './RootContainer.module.css'

export function RootContainer({children}: LayoutProps) {
	return <div className={styles.container}>{children}</div>
}
