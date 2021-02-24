
import { useState, useEffect, useContext } from 'react';
import style from '../styles/componentes/CountDown.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';

let countDownTimeout: NodeJS.Timeout;

export function CountDown() {
  const tm = 0.1 * 60;
  const { startNewChallenges } = useContext(ChallengesContext);
  const [time, setTime] = useState(tm);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const secods = time % 60;

  const [minutLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secodLeft, secodRight] = String(secods).padStart(2, '0').split('');

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setTime(tm)
  }
  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time == 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenges();
    }
  }, [isActive, time])

  return (
    <div>
      <div className={style.countDownContainer}>
        <div>
          <span>{minutLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secodLeft}</span>
          <span>{secodRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={style.startCountDownButton}
        >
          Ciclo encerrado
        </button>
      ) : (
          <>
            {isActive ? (
              <button
                type="button"
                className={`${style.startCountDownButton} ${style.startCountDownButtonActive}`}
                onClick={resetCountDown}
              >
                Abandonar ciclo
              </button>)
              : (
                <button
                  type="button"
                  className={style.startCountDownButton}
                  onClick={startCountDown}
                >
                  Iniciar um ciclo
                </button>
              )
            }
          </>
        )}


    </div >
  );
}