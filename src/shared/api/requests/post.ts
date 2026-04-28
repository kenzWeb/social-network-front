import { post } from '@/shared/constants/path.constants'

import { Post, PostPostsBody } from '@/shared/types/api'
import { instance } from '../instance'

export const getPosts = async () => await instance.get<Post[]>(post.getAll()).then(res => res.data)

export const createPost = async (data: PostPostsBody) =>
	await instance.post<Post>(post.create(), data).then(res => {
		return res.data
	})

export const updatePost = async (data: PostPostsBody, id: string) => {
	await instance.put<Post>(post.update(id), data).then(res => {
		return res.data
	})
}
