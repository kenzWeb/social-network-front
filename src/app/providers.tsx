'use client'

import {ReactNode, useState} from 'react'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

interface ProvidersProps {
	children: ReactNode
}

export function Providers({children}: ProvidersProps) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {refetchOnWindowFocus: false},
			},
		}),
	)

	return (
		<>
			<QueryClientProvider client={client}>{children}</QueryClientProvider>
			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
				toastStyle={{
					background: '#1a1a1a',
					color: '#fafafa',
					border: '1px solid #fffd02',
					borderRadius: '0.625rem',
					boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
					fontFamily: 'var(--font-avenir)',
				}}
			/>
		</>
	)
}
