import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/componentes/CompletedChallenges.module.css';
export function CompletedChallenges() {
  const { challengesCopleted } = useContext(ChallengesContext);
  return (
    <div className={style.completedChallengesContainer}>
      <span>Desfios completos</span>
      <span>{challengesCopleted}</span>
    </div>
  );
}