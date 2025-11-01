'use client'

import {HeaderNavItem} from '@/entities/HeaderNavItem'
import {usePathname} from 'next/navigation'
import {HeaderItems} from '../data'
import styles from './HeaderNav.module.css'

export const HeaderNav = () => {
	const pathname = usePathname()

	return (
		<div className={styles.wrapper}>
			{HeaderItems.map((item) => {
				const isActive =
					pathname === item.link || pathname.startsWith(`${item.link}/`)

				return <HeaderNavItem key={item.id} item={item} isActive={isActive} />
			})}
		</div>
	)
}
