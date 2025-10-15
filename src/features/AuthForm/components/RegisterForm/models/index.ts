import z from 'zod'

export const registerSchema = z.object({
	username: z
		.string()
		.min(3, {message: 'Username must be at least 3 characters'})
		.max(20, {message: 'Username must be at most 20 characters'}),
	email: z.email({message: 'Invalid email address'}),
	password: z
		.string()
		.min(6, {message: 'Password must be at least 6 characters'}),
	first_name: z
		.string()
		.min(2, {message: 'First name must be at least 2 characters'})
		.optional(),
	last_name: z
		.string()
		.min(2, {message: 'Last name must be at least 2 characters'})
		.optional(),
})

export type RegisterFormValues = z.infer<typeof registerSchema>
