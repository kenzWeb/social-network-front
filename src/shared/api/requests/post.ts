import { post } from '@/shared/constants/path.constants'

import { CreatePostRequest, Post, UpdatePostRequest } from '@/shared/types/api'
import { instance } from '../instance'

export const getPosts = async () => await instance.get<Post>(post.getByUser()).then(res => res.data)

export const createPost = async (data: CreatePostRequest) =>
	await instance.post<Post>(data.content, data.imageUrl).then(res => {
		return res.data
	})

export const updatePost = async (data: UpdatePostRequest) => {
	await instance.put<Post>(data.content, data.imageUrl).then(res => {
		return res.data
	})
}
