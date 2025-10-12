import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from '@/shared/components/ui/InputOtp'
import {OtpInputProps} from '../types'
import styles from './OtpInput.module.css'

export const OtpInput = ({
	value,
	onChange,
	onComplete,
	maxLength = 6,
}: OtpInputProps) => {
	return (
		<InputOTP
			className={styles.otpInput}
			maxLength={maxLength}
			value={value}
			onChange={onChange}
			onComplete={onComplete}
		>
			<InputOTPGroup>
				<InputOTPSlot index={0} />
				<InputOTPSlot index={1} />
				<InputOTPSlot index={2} />
			</InputOTPGroup>
			<InputOTPSeparator />
			<InputOTPGroup>
				<InputOTPSlot index={3} />
				<InputOTPSlot index={4} />
				<InputOTPSlot index={5} />
			</InputOTPGroup>
		</InputOTP>
	)
}
