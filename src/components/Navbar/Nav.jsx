import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <div className={`${styles.navList}`}>
        <NavLink to="/Home" className={`${styles.listItem}`} activeClassName={styles.active}>Home</NavLink>
        <NavLink to="/Profile" className={`${styles.listItem}`} activeClassName={styles.active}>Profile</NavLink>
        <NavLink to="/Messages" className={`${styles.listItem}`} activeClassName={styles.active}>Messages</NavLink>
        <NavLink to="/News" className={`${styles.listItem}`} activeClassName={styles.active}>News</NavLink>
        <NavLink to="/Music" className={`${styles.listItem}`} activeClassName={styles.active}>Music</NavLink>
        <NavLink to="/Settings" className={`${styles.listItem}`} activeClassName={styles.active}>Settings</NavLink>
      </div>
    </nav>
  );
}

export default Nav;