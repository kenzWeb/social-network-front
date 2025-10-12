import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/shared/components/ui/Dialog'

import {OtpInput} from '@/entities/OtpInput/'
import styles from './OtpDialog.module.css'

export const OtpDialog = () => {
	return (
		<Dialog>
			<DialogTrigger>Open</DialogTrigger>
			<DialogContent className={styles.dialogContent}>
				<DialogHeader>
					<DialogTitle className={styles.title}>Enter the code</DialogTitle>
					<h2 className={styles.text}>
						Please check your email for the code and enter it below.
					</h2>
					<DialogDescription className={styles.description}>
						<OtpInput />
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
