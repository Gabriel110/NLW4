import style from '../styles/componentes/Profile.module.css';

export function Profile() {
  return (
    <div className={style.profielContainer}>
      <img src="https://github.com/Gabriel110.png" alt=" Gabriel Correia" />
      <div>
        <strong>Gabriel Correia</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}