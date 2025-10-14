export interface OtpInputProps {
	value?: string
	onChange?: (value: string) => void
	onComplete?: (value: string) => void
	maxLength?: number
}
