import { post } from '@/shared/constants/path.constants'

import { CreatePostRequest, Post, UpdatePostRequest } from '@/shared/types/api'
import { instance } from '../instance'

export const getPosts = async () => await instance.get<Post[]>(post.getAll()).then(res => res.data)

export const createPost = async (data: CreatePostRequest) =>
	await instance.post<Post>(post.create(), data).then(res => {
		return res.data
	})

export const updatePost = async (data: UpdatePostRequest, id: string) => {
	await instance.put<Post>(post.update(id), data).then(res => {
		return res.data
	})
}
