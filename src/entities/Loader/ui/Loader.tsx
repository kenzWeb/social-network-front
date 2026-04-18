import { Spinner } from '@/shared/components/ui/Spinner'
import { LoaderProps } from '../types'
import styles from './Loader.module.css'

export const Loader = (props: LoaderProps) => {
	if (props.isLoading || props.isPending) {
		return (
			<div className={styles.wrapper}>
				<div className={styles.loaderContainer}>
					<Spinner className={props.className} color={props.color ?? 'var(--primary)'} />

					{props.type === 'text' || !props.type ? (
						<div className={styles.text}>{props.text}</div>
					) : null}
				</div>
			</div>
		)
	}

	if (props.type === 'children') {
		return <>{props.children}</>
	}

	return null
}
