import localFont from 'next/font/local'

export const avenir = localFont({
	src: [
		{
			path: '../../../public/fonts/Avenir/Avenir_Light.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Avenir/Avenir_Book.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Avenir/Avenir_Regular.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Avenir/Avenir_Heavy.ttf',
			weight: '800',
			style: 'normal',
		},
		{
			path: '../../../public/fonts/Avenir/Avenir_Black.ttf',
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
