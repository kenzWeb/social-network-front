'use client'

import {useGetSkills} from '@/shared/api/hooks'
import {SkillTag} from '../../SkillTag'
import styles from './SkillList.module.css'

export const SkillList = () => {
	const {data} = useGetSkills()
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Skills</h2>

			{(data?.length ?? 0) > 0 ? (
				<SkillTag skills={data ?? []} />
			) : (
				<p className={styles.noSkills}>No skills available.</p>
			)}
		</div>
	)
}
