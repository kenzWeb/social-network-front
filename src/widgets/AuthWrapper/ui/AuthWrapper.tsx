import {LayoutProps} from '@/shared/interfaces/interface.root'
import styles from './AuthWrapper.module.css'

export default function AuthWrapper({children}: LayoutProps) {
	return <section className={styles.wrapper}>{children}</section>
}
