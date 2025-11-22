'use client'

import {useGetSkills} from '@/shared/api/hooks/useGetSkills'
import {SkillTag} from '../../SkillTag'
import styles from './SkillList.module.css'

export const SkillList = () => {
	const {data} = useGetSkills()
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Skills</h2>
			<SkillTag skills={data ?? []} />
		</div>
	)
}
