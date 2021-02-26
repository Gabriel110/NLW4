import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ChallengesContext } from './ChallengesContext';


interface CountDownContextData {
  minutes: number;
  secods: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountDown: () => void;
  resetCountDown: () => void;
}

interface CountDownProviderProp {
  children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownContextData);

let countDownTimeout: NodeJS.Timeout;

export default function CountDownProvider({ children }: CountDownProviderProp) {
  const tm = 0.1 * 60;
  const { startNewChallenges } = useContext(ChallengesContext);
  const [time, setTime] = useState(tm);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const secods = time % 60;

  function startCountDown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countDownTimeout);
    setIsActive(false);
    setHasFinished(false);
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
    <CountDownContext.Provider
      value={{
        minutes,
        secods,
        hasFinished,
        isActive,
        startCountDown,
        resetCountDown
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
}

