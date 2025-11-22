import {Badge} from '@/shared/components/ui/Badge'
import {SkillTagProps} from '../types'
import styles from './SkillTag.module.css'

export const SkillTag = ({skills}: SkillTagProps) => {
	return (
		<div className={styles.wrapper}>
			{skills.map((skill, index) => (
				<Badge key={index} className={styles.badge} variant='default'>
					{skill.name}
				</Badge>
			))}
		</div>
	)
}
