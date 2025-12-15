import {
	HandlersStoryResponse,
	HandlersUserStoriesResponse,
} from '@/shared/types/api'

export interface UserStoryPreviewItemProps {
	userInfo: HandlersUserStoriesResponse
	stories: HandlersStoryResponse[] | undefined
}
