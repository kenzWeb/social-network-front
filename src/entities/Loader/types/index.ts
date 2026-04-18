import { ReactNode } from 'react'

type BaseLoaderProps = {
  isLoading: boolean
  isPending: boolean
  color?: string
  size?: number | string
  className?: string
}

type TextLoaderProps = BaseLoaderProps & {
  type?: 'text'
  text: string | ReactNode
  children?: never
}

type ChildrenLoaderProps = BaseLoaderProps & {
  type: 'children'
  children: ReactNode
  text?: never
}

export type LoaderProps = TextLoaderProps | ChildrenLoaderProps