import {defineConfig} from 'orval'

export default defineConfig({
	client: {
		input: {
			target: '../backend/openapi.json',
			validation: false,
		},
		output: {
			target: './src/shared/api/client.ts',
			schemas: './src/shared/types/api',
			client: 'react-query',
			mode: 'tags-split',
			override: {
				mutator: {
					path: './src/shared/api/mutator.ts',
					name: 'customInstance',
				},
			},
		},
	},
})
