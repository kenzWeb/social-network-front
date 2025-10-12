import {createStore} from 'zustand/vanilla'

export type DialogState = {
	isOpen: boolean
}

export type DialogAction = {
	open: () => void
	close: () => void
	toggle: () => void
}

export type DialogStore = DialogState & DialogAction

export const initState: DialogState = {
	isOpen: false,
}

export const createDialogStore = (initialState: DialogState = initState) => {
	return createStore<DialogStore>((set) => ({
		...initialState,
		open: () => set(() => ({isOpen: true})),
		close: () => set(() => ({isOpen: false})),
		toggle: () => set((state) => ({isOpen: !state.isOpen})),
	}))
}
