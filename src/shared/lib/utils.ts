import {clsx, type ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function errorCatch(error: any): string {
	const message = error.response.data.message

	return message
		? typeof error.response.data.message === 'string'
			? error.response.data.message
			: error.response.data.message[0]
		: error.message
}
