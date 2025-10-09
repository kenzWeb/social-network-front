import {useState, type ReactNode} from 'react'

import {QueryClient} from '@tanstack/react-query'

interface ProvidersProps {
	children: ReactNode
}

export function Providers({children}: ProvidersProps) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				refetchOnWindowFocus: false,
			},
		}),
	)
}
