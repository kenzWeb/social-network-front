import {Spinner} from '@/shared/components/ui/Spinner'
import {LoaderProps} from '../types'
import styles from './Loader.module.css'

export const Loader = (props: LoaderProps) => {
	return (
		<div className={styles.wrapper}>
			{props.isLoading || props.isPending ? (
				<div className={styles.loaderContainer}>
					<Spinner
						className={props.className}
						color={props.color ?? 'var(--primary)'}
					/>
					<h2 className={styles.text}>{props.text}</h2>
				</div>
			) : null}
		</div>
	)
}
