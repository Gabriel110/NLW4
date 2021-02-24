import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/componentes/ExperienceBar.module.css';
export function ExperienceBar() {

	const { currentExperience, experienceNextLevel } = useContext(ChallengesContext);

	const porsentToNextLevel = Math.round(currentExperience * 100) / experienceNextLevel;
	return (

		<header className={styles.experienceBar}>
			<span>0 xp</span>
			<div>
				<div style={{ width: `${porsentToNextLevel}%` }} />
				<span className={styles.currentExpericence} style={{ left: `${porsentToNextLevel}%` }}>
					{currentExperience}
				</span>
			</div>
			<span>{experienceNextLevel} xp</span>
		</header>
	);
}