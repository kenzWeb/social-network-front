import {CreateStoryBody, Story} from '@/shared/types/api'
import {instance} from '../instance'

export const getStories = async () => {
	return await instance.get<Story[]>('/story').then((res) => res.data)
}

export const addStory = async (storyData: CreateStoryBody) => {
	return await instance
		.post<Story[]>('/story', storyData)
		.then((res) => res.data)
}
