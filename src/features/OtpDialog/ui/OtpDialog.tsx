import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/shared/components/ui/Dialog'

import {OtpInput} from '@/entities/OtpInput/'
import {useOtpMutation} from '@/shared/api/hooks/useOtpMutation'
import {Button} from '@/shared/components/ui/Button'
import {useOtpStore} from '@/shared/hooks/'
import styles from './OtpDialog.module.css'

export const OtpDialog = () => {
	const {setOnOtpComplete, isOpen, otpCode, otpMaxLength, onOtpComplete} =
		useOtpStore()

	const {mutate, isPending} = useOtpMutation()

	const isVerifyDisabled = (otpCode?.length || 0) < (otpMaxLength || 0)

	return (
		<Dialog open={isOpen}>
			<DialogContent className={styles.dialogContent}>
				<DialogHeader>
					<DialogTitle className={styles.title}>Enter the code</DialogTitle>
					<h2 className={styles.text}>
						Please check your email for the code and enter it below.
					</h2>
					<DialogDescription asChild className={styles.description}>
						<div>
							<OtpInput />
							<Button
								disabled={isVerifyDisabled}
								className={styles.button}
								variant='yellow'
								size='default'
								// onClick={mutate(otpCode)}
							>
								Verify
							</Button>
						</div>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}
