import {useShallow} from 'zustand/react/shallow'
import {useDialogStore} from '../stores/dialogStore'

export const useOtpStore = () =>
	useDialogStore(
		useShallow((s) => ({
			setOnOtpComplete: s.setOnOtpComplete,
			isOpen: s.isOpen,
			otpCode: s.otpCode,
			otpMaxLength: s.otpMaxLength,
			onOtpComplete: s.onOtpComplete,
			setOtpCode: s.setOtpCode,
			setOtpMaxLength: s.setOtpMaxLength,
		})),
	)
