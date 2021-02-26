
import { CompletedChallenges } from '../componentes/CompletedChallenges';
import { CountDown } from '../componentes/CountDown';
import { ExperienceBar } from '../componentes/ExperienceBar';
import { Profile } from '../componentes/Profile';

import style from '../styles/pages/Home.module.css';

import Head from 'next/head';
import { ChallengesBox } from '../componentes/ChallengesBox';
import CountDownProvider from '../contexts/CountDownContext';

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Inicio | Moveit</title>
      </Head>

      <ExperienceBar />

      <CountDownProvider>
        <section >
          <div >
            <Profile />
            <CompletedChallenges />
            <CountDown />
          </div>
          <div>
            <ChallengesBox />
          </div>
        </section>
      </CountDownProvider>
    </div>
  )
}
