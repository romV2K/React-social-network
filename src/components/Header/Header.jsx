import styles from "./Header.module.css";
import ".././../App.css"
import { NavLink } from 'react-router-dom'
import loginIcon from '../../assets/images/login.svg'
import userIcon from '../../assets/images/userIcon.svg'


const Header = (props) => {
  return (
    <header>
      <div className={`${styles.imgDiv}`}>
        <p>React Society</p>
      </div>
      <NavLink to={!props.isAuth ? '/login' : '/exit'}>
        <div className={styles.loginBlock}>
          <div className={styles.avatarContainer}>
            <img src={!props.userIcon || props.userIcon === '' ? userIcon : props.userIcon} alt={`${props.login}'s avatar`} />
          </div>
          {props.isAuth ? <span className={styles.login}> {props.login} </span> : null}
          <img src={loginIcon} alt='login' />
        </div>
      </NavLink>
    </header>
  );
}

export default Header;