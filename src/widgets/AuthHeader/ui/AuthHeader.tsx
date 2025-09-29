import Image from 'next/image'
import Link from 'next/link'
import styles from './AuthHeader.module.css'

export function AuthHeader() {
	return (
		<header className={styles.header}>
			<Link className={styles.link} href='/'>
				<Image width={50} height={50} alt='icon' src='/icons/header-icon.svg' />
				<h2 className={styles.icon}>Bchat</h2>
			</Link>
		</header>
	)
}
