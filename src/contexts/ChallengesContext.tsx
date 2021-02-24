import { createContext, useState, ReactNode, useContext } from 'react';
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

  const experienceNextLevel = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallenges() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenges(challenge);
  }

  function reseteChallengs() {
    setActiveChallenges(null);
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
        experienceNextLevel
      }}>
      {children}
    </ChallengesContext.Provider>
  )
}