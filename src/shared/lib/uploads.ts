export function getUploadUrl(path?: string | null): string | undefined {
	if (!path) return undefined

	if (typeof path === 'string' && path.startsWith('/uploads')) {
		const apiHost = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '')
		if (
			apiHost.startsWith('http://localhost') ||
			apiHost.startsWith('http://127.0.0.1')
		) {
			return path
		}

		return `${apiHost}${path}`
	}

	return path
}
