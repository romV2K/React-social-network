import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <div className={`${styles.navList}`}>
        <NavLink to="/home" className={`${styles.listItem}`} activeClassName={styles.active}>Home</NavLink>
        <NavLink to="/profile" className={`${styles.listItem}`} activeClassName={styles.active}>Profile</NavLink>
        <NavLink to="/messages" className={`${styles.listItem}`} activeClassName={styles.active}>Messages</NavLink>
        <NavLink to="/users" className={`${styles.listItem}`} activeClassName={styles.active}>Users</NavLink>
        <NavLink to="/news" className={`${styles.listItem}`} activeClassName={styles.active}>News</NavLink>
        <NavLink to="/music" className={`${styles.listItem}`} activeClassName={styles.active}>Music</NavLink>
        <NavLink to="/settings" className={`${styles.listItem}`} activeClassName={styles.active}>Settings</NavLink>
      </div>
    </nav>
  );
}

export default Nav;