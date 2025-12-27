import { formatDistanceToNow } from 'date-fns'
import { enAU } from 'date-fns/locale'

export const useTimeAgo = (timestamp: string) => {
	const timeAgo = formatDistanceToNow(new Date(timestamp), {
		addSuffix: true,
		locale: enAU
	})

	return { timeAgo }
}
