import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import challenges from '../../challenges.json';

interface Challeges {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallehgesContextData {
  level: number;
  currentExperience: number;
  challengesCopleted: number;
  levelUp: () => void;
  startNewChallenges: () => void;
  activeChallenges: Challeges;
  reseteChallengs: () => void;
  experienceNextLevel: number;
  compltedChallengs: () => void;
}

interface ChallehgesProviderProps {
  children: ReactNode
}

export const ChallengesContext = createContext({} as ChallehgesContextData);

export default function ChallehgesProvider({ children }: ChallehgesProviderProps) {

  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCopleted, setChallengesCopleted] = useState(0);
  const [activeChallenges, setActiveChallenges] = useState(null);

  const experienceNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, [])

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenges() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenges(challenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      new Notification('Novo desafio :)', {
        body: `Valendo xp`
      });
    }
  }

  function reseteChallengs() {
    setActiveChallenges(null);
  }

  function compltedChallengs() {
    if (!activeChallenges) {
      return;
    }
    const { amount } = activeChallenges;
    let finalExperience = currentExperience + amount;
    if (finalExperience >= experienceNextLevel) {
      finalExperience = finalExperience - experienceNextLevel;
      levelUp();
    }
    setCurrentExperience(finalExperience);
    setActiveChallenges(null);
    setChallengesCopleted(challengesCopleted + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCopleted,
        levelUp,
        startNewChallenges,
        activeChallenges,
        reseteChallengs,
        experienceNextLevel,
        compltedChallengs
      }}>
      {children}
    </ChallengesContext.Provider>
  )
}