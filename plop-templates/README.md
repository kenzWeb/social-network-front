# Генераторы компонентов Plop

## Использование

### 1. Создание FSD компонента

```bash
npm run plop component
# или
bun run plop component
```

**Что создаст:**

- `src/{layer}/{Name}/ui/{Name}.tsx` - компонент
- `src/{layer}/{Name}/ui/{Name}.module.css` - стили
- `src/{layer}/{Name}/ui/index.ts` - экспорт из ui
- `src/{layer}/{Name}/index.ts` - главный экспорт
- `src/{layer}/{Name}/types/index.ts` - типы (опционально)
- `src/{layer}/{Name}/models/index.ts` - модели (опционально)

**Пример:**

```
Название: PostCard
Слой: entities
Тип компонента: Обычный (Server Component)
Типы: Да
Модели: Нет

Результат:
src/entities/PostCard/
  ├── ui/
  │   ├── PostCard.tsx
  │   ├── PostCard.module.css
  │   └── index.ts
  ├── types/
  │   └── index.ts
  └── index.ts
```

**Типы компонентов:**

- **Обычный (Server Component)** - серверный компонент Next.js (по умолчанию)
- **Client Component** - клиентский компонент с директивой 'use client'
- **С useState хуком** - клиентский компонент с примером использования useState

---

### 2. Создание UI компонента

```bash
npm run plop ui
# или
bun run plop ui
```

**Что создаст:**

- `src/shared/components/ui/{Name}/{Name}.tsx` - компонент
- `src/shared/components/ui/{Name}/{Name}.module.css` - стили
- `src/shared/components/ui/{Name}/index.ts` - экспорт
- `src/shared/components/ui/{Name}/types.ts` - типы (опционально)

**Пример:**

```
Название: Badge
Типы: Да

Результат:
src/shared/components/ui/Badge/
  ├── Badge.tsx
  ├── Badge.module.css
  ├── types.ts
  └── index.ts
```

---

### 3. Создание Entity с подкомпонентами

```bash
npm run plop entity
# или
bun run plop entity
```

**Что создаст:**

- Базовую структуру entity
- Подкомпоненты (если указаны)

**Пример:**

```
Название: User
Подкомпоненты: UserAvatar, UserCard, UserBadge

Результат:
src/entities/User/
  ├── UserAvatar/
  │   ├── ui/
  │   │   ├── UserAvatar.tsx
  │   │   ├── UserAvatar.module.css
  │   │   └── index.ts
  │   ├── types/
  │   │   └── index.ts
  │   └── index.ts
  ├── UserCard/
  │   ├── ui/
  │   │   ├── UserCard.tsx
  │   │   ├── UserCard.module.css
  │   │   └── index.ts
  │   ├── types/
  │   │   └── index.ts
  │   └── index.ts
  ├── UserBadge/
  │   ├── ui/
  │   │   ├── UserBadge.tsx
  │   │   ├── UserBadge.module.css
  │   │   └── index.ts
  │   ├── types/
  │   │   └── index.ts
  │   └── index.ts
  ├── types/
  │   └── index.ts
  └── index.ts
```

---

### 4. Создание Custom Hook

```bash
npm run plop hook
# или
bun run plop hook
```

**Что создаст:**

- `src/shared/hooks/{name}.ts` - custom React hook

**Пример:**

```
Название: useLocalStorage

Результат:
src/shared/hooks/useLocalStorage.ts
```

**Шаблон хука:**

```tsx
'use client'

import {useState} from 'react'

export const useLocalStorage = () => {
	const [state, setState] = useState()

	return {
		state,
		setState,
	}
}
```

---

## Слои FSD

- **entities** - Бизнес-сущности (User, Post, Comment)
- **features** - Функциональность (LoginForm, EditProfile, LikeButton)
- **widgets** - Композиции (Header, Sidebar, Footer)
- **shared/components** - Переиспользуемые компоненты (Button, Input, Modal)

---

## Структура файлов

### Компонент

```tsx
import styles from './ComponentName.module.css'
import {ComponentNameProps} from '../types'

export const ComponentName = (props: ComponentNameProps) => {
	return <div className={styles.wrapper}>ComponentName</div>
}
```

### Типы

```tsx
export interface ComponentNameProps {
	// Добавьте типы здесь
}
```

### Index (Public API)

```tsx
export * from './ui'
export * from './types'
```
