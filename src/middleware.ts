import {NextResponse, type NextRequest} from 'next/server'
import {EnumTokens} from './shared/constants/api.constants'

const protectedRoutes = ['/dashboard']

const authRoutes = [
	'/auth/login',
	'/auth/register',
	'/auth/verify-email',
	'/auth/forgot-password',
	'/auth/reset-password',
]

export default function middleware(request: NextRequest) {
	const {pathname} = request.nextUrl

	const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value

	const isAuthenticated = !!accessToken && !!refreshToken

	if (!isAuthenticated && protectedRoutes.includes(pathname)) {
		const loginUrl = request.nextUrl.clone()

		loginUrl.pathname = '/auth/login'

		return NextResponse.redirect(loginUrl)
	}

	if (isAuthenticated && authRoutes.includes(pathname)) {
		const dashUrl = request.nextUrl.clone()

		dashUrl.pathname = '/dashboard'

		return NextResponse.redirect(dashUrl)
	}

	return NextResponse.next()
}

const config = {
	matcher: ['/dashboard/:path*', '/auth/:path*'],
}
