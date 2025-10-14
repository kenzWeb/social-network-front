import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from '@/shared/components/ui/InputOtp'
import {useOtpStore} from '@/shared/hooks/'
import {OtpInputProps} from '../types'
import styles from './OtpInput.module.css'

export const OtpInput = ({
	value,
	onChange,
	onComplete,
	maxLength = 6,
}: OtpInputProps) => {
	const {otpCode, otpMaxLength, setOtpCode, onOtpComplete} = useOtpStore()

	const resolvedValue = value ?? otpCode
	const resolvedMaxLength = maxLength ?? otpMaxLength
	const handleChange = onChange ?? setOtpCode
	const handleComplete = onComplete ?? onOtpComplete

	return (
		<InputOTP
			className={styles.otpInput}
			maxLength={resolvedMaxLength}
			value={resolvedValue}
			onChange={handleChange}
			onComplete={handleComplete}
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
