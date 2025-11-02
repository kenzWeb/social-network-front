import {user} from '@/shared/constants/path.constants'
import {User} from '@/shared/types/api'
import {instance} from '../instance'

export const getMe = async () => {
	return await instance.get<User>(user.getMe()).then((res) => res.data)
}
