import {cookies} from 'next/headers'
import {NextResponse, type NextRequest} from 'next/server'
import {EnumTokens} from './shared/constants/api.constants'

const protectedRoutes = new Set(['/'])
const authRoutes = new Set([
	'/account/create',
	'/account/login',
	'/account/verify-email',
	'/account/forgot-password',
	'/account/reset-password',
])

export default async function proxy(request: NextRequest) {
	const {pathname} = request.nextUrl

	const cookieStore = await cookies()
	const accessToken = cookieStore.get(EnumTokens.ACCESS_TOKEN)?.value
	const refreshToken = cookieStore.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuthenticated = !!accessToken && !!refreshToken

	const isAuthRoute = [...authRoutes].some((route) =>
		pathname.startsWith(route),
	)

	const isProtectedRoute = [...protectedRoutes].some((route) => {
		if (route === '/') {
			return pathname === '/'
		}
		return pathname.startsWith(route)
	})

	if (!isAuthenticated && isProtectedRoute && !isAuthRoute) {
		const loginUrl = request.nextUrl.clone()
		loginUrl.pathname = '/account/login'
		return NextResponse.redirect(loginUrl)
	}

	// Redirect to home if authenticated and trying to access auth routes
	if (isAuthenticated && isAuthRoute) {
		const dashUrl = request.nextUrl.clone()
		dashUrl.pathname = '/'
		return NextResponse.redirect(dashUrl)
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/:path*', '/account/:path*'],
}
