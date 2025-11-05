import fs from 'fs'
import path from 'path'

export default function (plop) {
	plop.setActionType('updateEntityIndex', function (answers, config, plop) {
		const indexPath = path.join(process.cwd(), config.path)
		const newExports = config.exports || []

		try {
			let content = ''

			if (fs.existsSync(indexPath)) {
				content = fs.readFileSync(indexPath, 'utf8')
			}

			const existingExports = new Set(
				content.split('\n').filter((line) => line.trim().startsWith('export')),
			)

			newExports.forEach((exp) => {
				if (!existingExports.has(exp)) {
					content +=
						(content && !content.endsWith('\n') ? '\n' : '') + exp + '\n'
				}
			})

			fs.writeFileSync(indexPath, content, 'utf8')

			return `Updated ${config.path}`
		} catch (error) {
			throw new Error(`Failed to update ${config.path}: ${error.message}`)
		}
	})

	plop.setGenerator('component', {
		description: 'Создает FSD компонент с полной структурой',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Название компонента (например, UserAvatar):',
				validate: (value) => {
					if (!value) return 'Название обязательно'
					if (!/^[A-Z]/.test(value))
						return 'Название должно начинаться с заглавной буквы'
					return true
				},
			},
			{
				type: 'list',
				name: 'layer',
				message: 'Выберите слой FSD:',
				choices: [
					{name: 'entities - Бизнес-сущности', value: 'entities'},
					{name: 'features - Функциональность', value: 'features'},
					{name: 'widgets - Композиции', value: 'widgets'},
					{name: 'shared - Переиспользуемое', value: 'shared/components'},
				],
			},
			{
				type: 'list',
				name: 'componentType',
				message: 'Тип компонента:',
				choices: [
					{name: 'Обычный (Server Component)', value: 'default'},
					{name: 'Client Component ("use client")', value: 'client'},
					{name: 'С useState хуком', value: 'withState'},
				],
				default: 'default',
			},
			{
				type: 'confirm',
				name: 'hasTypes',
				message: 'Добавить папку types с интерфейсами?',
				default: true,
			},
			{
				type: 'confirm',
				name: 'hasModels',
				message: 'Добавить папку models?',
				default: false,
			},
		],
		actions: (data) => {
			const name = plop.getHelper('pascalCase')(data.name)

			// Шаблоны компонентов
			let componentTemplate = ''
			if (data.componentType === 'client') {
				componentTemplate = `'use client'\n\nimport styles from './${name}.module.css'\n${
					data.hasTypes ? `import { ${name}Props } from '../types'\n` : ''
				}\nexport const ${name} = (${
					data.hasTypes ? `props: ${name}Props` : ''
				}) => {\n\treturn (\n\t\t<div className={styles.wrapper}>\n\t\t\t${name}\n\t\t</div>\n\t)\n}\n`
			} else if (data.componentType === 'withState') {
				componentTemplate = `'use client'\n\nimport { useState } from 'react'\nimport styles from './${name}.module.css'\n${
					data.hasTypes ? `import { ${name}Props } from '../types'\n` : ''
				}\nexport const ${name} = (${
					data.hasTypes ? `props: ${name}Props` : ''
				}) => {\n\tconst [state, setState] = useState()\n\n\treturn (\n\t\t<div className={styles.wrapper}>\n\t\t\t${name}\n\t\t</div>\n\t)\n}\n`
			} else {
				componentTemplate = `import styles from './${name}.module.css'\n${
					data.hasTypes ? `import { ${name}Props } from '../types'\n` : ''
				}\nexport const ${name} = (${
					data.hasTypes ? `props: ${name}Props` : ''
				}) => {\n\treturn (\n\t\t<div className={styles.wrapper}>\n\t\t\t${name}\n\t\t</div>\n\t)\n}\n`
			}

			const actions = [
				{
					type: 'add',
					path: 'src/{{layer}}/{{pascalCase name}}/ui/{{pascalCase name}}.tsx',
					template: componentTemplate,
				},

				{
					type: 'add',
					path: 'src/{{layer}}/{{pascalCase name}}/ui/{{pascalCase name}}.module.css',
					templateFile: 'plop-templates/component.module.css.hbs',
				},

				{
					type: 'add',
					path: 'src/{{layer}}/{{pascalCase name}}/ui/index.ts',
					templateFile: 'plop-templates/ui-index.ts.hbs',
				},

				{
					type: 'add',
					path: 'src/{{layer}}/{{pascalCase name}}/index.ts',
					templateFile: 'plop-templates/slice-index.ts.hbs',
				},
			]

			if (data.hasTypes) {
				actions.push({
					type: 'add',
					path: 'src/{{layer}}/{{pascalCase name}}/types/index.ts',
					templateFile: 'plop-templates/types-index.ts.hbs',
				})
			}

			if (data.hasModels) {
				actions.push({
					type: 'add',
					path: 'src/{{layer}}/{{pascalCase name}}/models/index.ts',
					templateFile: 'plop-templates/models-index.ts.hbs',
				})
			}

			return actions
		},
	})

	plop.setGenerator('ui', {
		description: 'Создает простой UI компонент в shared/components/ui',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Название UI компонента (например, Button):',
				validate: (value) => {
					if (!value) return 'Название обязательно'
					if (!/^[A-Z]/.test(value))
						return 'Название должно начинаться с заглавной буквы'
					return true
				},
			},
			{
				type: 'confirm',
				name: 'hasTypes',
				message: 'Добавить типы/интерфейсы?',
				default: true,
			},
		],
		actions: (data) => {
			const actions = [
				{
					type: 'add',
					path: 'src/shared/components/ui/{{pascalCase name}}/{{pascalCase name}}.tsx',
					templateFile: 'plop-templates/component.tsx.hbs',
				},
				{
					type: 'add',
					path: 'src/shared/components/ui/{{pascalCase name}}/{{pascalCase name}}.module.css',
					templateFile: 'plop-templates/component.module.css.hbs',
				},
				{
					type: 'add',
					path: 'src/shared/components/ui/{{pascalCase name}}/index.ts',
					templateFile: 'plop-templates/ui-index.ts.hbs',
				},
			]

			if (data.hasTypes) {
				actions.push({
					type: 'add',
					path: 'src/shared/components/ui/{{pascalCase name}}/types.ts',
					template:
						'export interface {{pascalCase name}}Props {\n\t// Добавьте типы здесь\n}\n',
				})
			}

			return actions
		},
	})

	plop.setGenerator('entity', {
		description: 'Создает entity с возможностью добавления подкомпонентов',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Название entity (например, Post):',
				validate: (value) => {
					if (!value) return 'Название обязательно'
					return true
				},
			},
			{
				type: 'input',
				name: 'subComponents',
				message:
					'Подкомпоненты через запятую (например, PostHeader, PostContent) или оставьте пустым:',
				default: '',
			},
		],
		actions: (data) => {
			const actions = []

			if (data.subComponents) {
				const subs = data.subComponents
					.split(',')
					.map((s) => s.trim())
					.filter(Boolean)

				const entityName = plop.getHelper('pascalCase')(data.name)

				subs.forEach((sub) => {
					actions.push(
						{
							type: 'add',
							path: `src/entities/${entityName}/${sub}/ui/${sub}.tsx`,
							template: `import styles from './${sub}.module.css'\nimport { ${sub}Props } from '../types'\n\nexport const ${sub} = (props: ${sub}Props) => {\n\treturn (\n\t\t<div className={styles.wrapper}>\n\t\t\t${sub}\n\t\t</div>\n\t)\n}\n`,
						},
						{
							type: 'add',
							path: `src/entities/${entityName}/${sub}/ui/${sub}.module.css`,
							template: `.wrapper {\n\t/* Стили для ${sub} */\n}\n`,
						},
						{
							type: 'add',
							path: `src/entities/${entityName}/${sub}/ui/index.ts`,
							template: `export { ${sub} } from './${sub}'\n`,
						},
						{
							type: 'add',
							path: `src/entities/${entityName}/${sub}/index.ts`,
							template: "export * from './ui'\n",
						},
						{
							type: 'add',
							path: `src/entities/${entityName}/${sub}/types/index.ts`,
							template: `export interface ${sub}Props {\n\t// Добавьте типы здесь\n}\n`,
						},
					)
				})

				const entityIndexPath = `src/entities/${entityName}/index.ts`
				const exports = subs.map((sub) => `export * from './${sub}'`)

				actions.push({
					type: 'updateEntityIndex',
					path: entityIndexPath,
					exports: exports,
				})
			} else {
				actions.push({
					type: 'add',
					path: 'src/entities/{{pascalCase name}}/index.ts',
					template: "export * from './ui'\n",
					skipIfExists: true,
				})
			}

			return actions
		},
	})

	plop.setGenerator('hook', {
		description: 'Создает custom React hook в shared/hooks',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Название хука (например, useLocalStorage):',
				validate: (value) => {
					if (!value) return 'Название обязательно'
					if (!/^use[A-Z]/.test(value))
						return 'Название должно начинаться с "use"'
					return true
				},
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/shared/hooks/{{camelCase name}}.ts',
				templateFile: 'plop-templates/hook.ts.hbs',
			},
		],
	})
}
