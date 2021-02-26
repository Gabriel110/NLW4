
import { useState, useEffect, useContext } from 'react';
import style from '../styles/componentes/CountDown.module.css';
import { CountDownContext } from '../contexts/CountDownContext';

let countDownTimeout: NodeJS.Timeout;

export function CountDown() {
  const {
    minutes,
    secods,
    hasFinished,
    isActive,
    resetCountDown,
    startCountDown
  } = useContext(CountDownContext);

  const [minutLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secodLeft, secodRight] = String(secods).padStart(2, '0').split('');

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