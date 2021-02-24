
import '../styles/global.css';
import ChallehgesProvider from '../contexts/ChallengesContext';

function MyApp({ Component, pageProps }) {

  return (
    <ChallehgesProvider>
      <Component {...pageProps} />
    </ChallehgesProvider>
  )
}

export default MyApp
