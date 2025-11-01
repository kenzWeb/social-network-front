import {cn} from '@/shared/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import {HeaderNavItemProps} from '../types'
import styles from './HeaderNavItem.module.css'

export const HeaderNavItem = ({item, isActive}: HeaderNavItemProps) => {
	return (
		<li
			key={item.id}
			className={cn(styles.link, {
				[styles.active]: isActive,
			})}
		>
			<Link href={item.link} className={styles.item}>
				<span
					className={styles.iconWrapper}
					style={{'--icon-url': `url(${item.icon})`} as React.CSSProperties}
				>
					<Image
						width={20}
						height={20}
						src={item.icon}
						alt={item.title}
						className={styles.icon}
					/>
				</span>
			</Link>
		</li>
	)
}
