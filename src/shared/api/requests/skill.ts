import {skill} from '@/shared/constants/path.constants'
import {Skill} from '@/shared/types/api'
import {instance} from '../instance'

export const getSkills = async () => {
	return await instance.get<Skill[]>(skill.getAll()).then((res) => res.data)
}

export const addSkill = async (name: string) => {
	return await instance.post<Skill[]>(skill.add(), {name}).then((res) => res.data)
}
