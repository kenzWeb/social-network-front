import { formatDistanceToNow, isValid } from 'date-fns'
import { enAU } from 'date-fns/locale'

export const useTimeAgo = (timestamp?: string | null) => {
	if (!timestamp) {
		return { timeAgo: '' }
	}

	const date = new Date(timestamp)

	if (!isValid(date)) {
		return { timeAgo: '' }
	}

	const timeAgo = formatDistanceToNow(date, {
		addSuffix: true,
		locale: enAU
	})

	return { timeAgo }
}
