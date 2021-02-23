
import { useState, useEffect } from 'react';
import style from '../styles/componentes/CountDown.module.css';
export function CountDown() {

  const [time, setTime] = useState(27 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const secods = time % 60;

  const [minutLeft, minuteRight] = String(minutes).padEnd(2, '0').split('')
  const [secodLeft, secodRight] = String(secods).padEnd(2, '0').split('');

  function startCountDown() {
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [active, time])

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

      <button
        type="button"
        className={style.startCountDownButton}
        onClick={startCountDown}
      >
        Iniciar um ciclo
      </button>
    </div>
  );
}