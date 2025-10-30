import {Input} from '@/shared/components/ui/Input'
import styles from './SearchHeader.module.css'

export const SearchHeader = () => {
	return <Input className={styles.input} placeholder='#Explore' />
}
