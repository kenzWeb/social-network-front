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
import {getTempEmail} from '@/shared/lib/cookies'
import styles from './OtpDialog.module.css'

export const OtpDialog = () => {
	const {isOpen, otpCode, otpMaxLength} = useOtpStore()

	const {mutate, isPending} = useOtpMutation()
	const tempEmail = getTempEmail()

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
								disabled={isVerifyDisabled || isPending}
								className={styles.button}
								variant='yellow'
								size='default'
								onClick={() =>
									tempEmail && mutate({email: tempEmail, code: otpCode})
								}
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
