import style from '../styles/componentes/Profile.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={style.profielContainer}>
      <img src="https://github.com/Gabriel110.png" alt=" Gabriel Correia" />
      <div>
        <strong>Gabriel Correia</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}