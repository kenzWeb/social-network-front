import type {
	HandlersStoryResponse,
	HandlersUserStoriesResponse,
} from '@/shared/types/api'

export type UserInfo = Omit<HandlersUserStoriesResponse, 'stories'>

export type StoryItem = HandlersStoryResponse

export interface UserStoryPreviewItemProps {
	userInfo: UserInfo[]
	stories: StoryItem[] | undefined
}
