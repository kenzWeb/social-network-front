export const onSubmit =
	<T>(mutate: (values: T) => void) =>
	(values: T) => {
		mutate(values)
	}
