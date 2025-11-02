const API_BASE = '/api/v1'

export const uploads = {
	file: (filepath: string) => `/uploads/${filepath}`,
}

export const user = {
	getAll: () => `${API_BASE}/user`,
	getById: (id: string | number) => `${API_BASE}/user/${id}`,
	getMe: () => `${API_BASE}/user/me`,
	getByEmail: (email: string) => `${API_BASE}/user/by-email/${email}`,
	create: () => `${API_BASE}/user`,
	update: (id: string | number) => `${API_BASE}/user/${id}`,
	delete: (id: string | number) => `${API_BASE}/user/${id}`,
	getFollowers: (id: string | number) => `${API_BASE}/user/${id}/followers`,
	getFollowing: (id: string | number) => `${API_BASE}/user/${id}/following`,
	getFollowCounts: (id: string | number) =>
		`${API_BASE}/user/${id}/follow-counts`,
}

export const auth = {
	register: () => `${API_BASE}/auth/register`,
	login: () => `${API_BASE}/auth/login`,
	refresh: () => `${API_BASE}/auth/refresh`,
	verifyEmail: () => `${API_BASE}/auth/verify-email`,
	resendVerifyEmail: () => `${API_BASE}/auth/resend-verify-email`,
	verify2FA: () => `${API_BASE}/auth/2fa/verify`,
	request2FA: () => `${API_BASE}/auth/2fa/request`,
	toggle2FA: () => `${API_BASE}/auth/toggle-2fa`,
}

export const post = {
	getByUser: () => `${API_BASE}/post`,
	create: () => `${API_BASE}/post`,
	update: (id: string | number) => `${API_BASE}/post/${id}`,
	delete: (id: string | number) => `${API_BASE}/post/${id}`,
	toggleLike: (id: string | number) => `${API_BASE}/post/${id}/like`,
}

export const comment = {
	getByPost: (id: string | number) => `${API_BASE}/comment/post/${id}`,
	getByUser: () => `${API_BASE}/comment/user/`,
	getById: (id: string | number) => `${API_BASE}/comment/${id}`,
	create: (postId: string | number) => `${API_BASE}/comment/post/${postId}`,
}

export const story = {
	getById: (id: string | number) => `${API_BASE}/story/${id}`,
	getByUserId: (id: string | number) => `${API_BASE}/story/user/${id}`,
	getByUser: () => `${API_BASE}/story`,
	create: () => `${API_BASE}/story`,
	update: (id: string | number) => `${API_BASE}/story/${id}`,
	delete: (id: string | number) => `${API_BASE}/story/${id}`,
	toggleLike: (id: string | number) => `${API_BASE}/story/${id}/like`,
	getAllStories: () => `${API_BASE}/story/following`,
}

export const follow = {
	toggle: (id: string | number) => `${API_BASE}/follow/${id}/toggle`,
	follow: (id: string | number) => `${API_BASE}/follow/${id}`,
	unfollow: (id: string | number) => `${API_BASE}/follow/${id}`,
	getStatus: (id: string | number) => `${API_BASE}/follow/${id}/status`,
}

export const skill = {
	getAll: () => `${API_BASE}/skill`,
	add: () => `${API_BASE}/skill`,
}

export const chat = {
	ws: () => `${API_BASE}/ws`,
	getConversations: () => `${API_BASE}/chat/conversations`,
	getMessages: (id: string | number) =>
		`${API_BASE}/chat/conversations/${id}/messages`,
	sendDirect: (userId: string | number) =>
		`${API_BASE}/chat/direct/${userId}/send`,
	markRead: (id: string | number) =>
		`${API_BASE}/chat/conversations/${id}/read`,
	getPresence: (userId: string | number) =>
		`${API_BASE}/chat/presence/${userId}`,
}
