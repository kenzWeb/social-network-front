import {create} from 'zustand'

export type DialogState = {
	isOpen: boolean
	open: () => void
	close: () => void
	toggle: () => void

	otpCode: string
	otpMaxLength: number

	setOtpCode: (value: string) => void
	setOtpMaxLength: (len: number) => void
	onOtpComplete?: (value: string) => void
	setOnOtpComplete: (fn?: (value: string) => void) => void
}

export const useDialogStore = create<DialogState>((set) => ({
	isOpen: false,
	open: () => set(() => ({isOpen: true})),
	close: () => set(() => ({isOpen: false})),
	toggle: () => set((state) => ({isOpen: !state.isOpen})),

	otpCode: '',
	otpMaxLength: 6,

	setOtpCode: (value) => set(() => ({otpCode: value})),
	setOtpMaxLength: (len) => set(() => ({otpMaxLength: len})),
	onOtpComplete: undefined,
	setOnOtpComplete: (fn) => set(() => ({onOtpComplete: fn})),
}))
