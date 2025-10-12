import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/shared/components/ui/Dialog'
import {useState} from 'react'

import {OtpInput} from '@/entities/OtpInput/'
import styles from './OtpDialog.module.css'

export const OtpDialog = () => {
	const [code, setCode] = useState('')
	const [open, setOpen] = useState(false)

	const handleComplete = (val: string) => {
		console.log('OTP complete:', val)
	}

	return (
		<Dialog open={open}>
			<DialogTrigger>Open</DialogTrigger>
			<DialogContent className={styles.dialogContent}>
				<DialogHeader>
					<DialogTitle className={styles.title}>Enter the code</DialogTitle>
					<h2 className={styles.text}>
						Please check your email for the code and enter it below.
					</h2>
					<DialogDescription asChild className={styles.description}>
						<div>
							<OtpInput
								value={code}
								onChange={setCode}
								onComplete={handleComplete}
							/>
						</div>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
