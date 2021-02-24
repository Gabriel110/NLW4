import style from '../styles/componentes/ChallengesBox.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';
export function ChallengesBox() {

  const { activeChallenges, reseteChallengs } = useContext(ChallengesContext);

  return (
    <div className={style.challengesBoxContainer}>
      {activeChallenges ? (
        <div className={style.challengestActive}>
          <header>{activeChallenges.amount}</header>
          <main>
            <img src={`icons/${activeChallenges.type}.svg`} alt="body" />
            <strong>Novo desafio</strong>
            <p>{activeChallenges.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={style.challengFailedButton}
              onClick={reseteChallengs}
            >
              Falhei
            </button>
            <button
              type="button"
              className={style.challengesSuceededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
          <div className={style.challengesNotActive}>
            <strong>
              Finalize um ciclo para receber um desafio!
            </strong>
            <p>
              <img src="icons/level-up.svg" alt="level-up" />
            Avance um level completando desafios.
            </p>
          </div>
        )}
    </div>
  );
}