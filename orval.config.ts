import * as dotenv from 'dotenv'
import {defineConfig} from 'orval'

dotenv.config()

export default defineConfig({
	client: {
		input: {
			target: '../backend/openapi.json',
			validation: false,
			parserOptions: {
				validate: false
			}
		},
		output: {
			schemas: './src/shared/types/api',
		},
	},
})
