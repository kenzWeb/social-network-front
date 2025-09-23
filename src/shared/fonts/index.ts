import localFont from 'next/font/local'

export const avenir = localFont({
	src: [
		{
			path: '/fonts/Avenir/Avenir\u0020Light.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '/fonts/Avenir/Avenir\u0020Book.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '/fonts/Avenir/Avenir\u0020Regular.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '/fonts/Avenir/Avenir\u0020Heavy.ttf',
			weight: '800',
			style: 'normal',
		},
		{
			path: '/fonts/Avenir/Avenir\u0020Black.ttf',
			weight: '900',
			style: 'normal',
		},
	],
	display: 'swap',
	variable: '--font-avenir',
	fallback: [
		'system-ui',
		'-apple-system',
		'Segoe UI',
		'Roboto',
		'Arial',
		'sans-serif',
	],
})
