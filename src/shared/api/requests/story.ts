import {story} from '@/shared/constants/path.constants'
import {CreateStoryBody, HandlersUserStoriesResponse} from '@/shared/types/api'
import {instance} from '../instance'

export const getStories = async () => {
	return await instance
		.get<HandlersUserStoriesResponse[]>(story.getAllStories())
		.then((res) => res.data)
}

export const addStory = async (storyData: CreateStoryBody) => {
	return await instance
		.post<HandlersUserStoriesResponse[]>(story.create(), storyData)
		.then((res) => res.data)
}
