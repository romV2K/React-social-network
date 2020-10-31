import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <div className={`${styles.navList}`}>
        <a href="#a" className={`${styles.listItem}`}>Profile</a>
        <a href="#a" className={`${styles.listItem}`}>Massages</a>
        <a href="#a" className={`${styles.listItem}`}>News</a>
        <a href="#a" className={`${styles.listItem}`}>Music</a>
        <a href="#a" className={`${styles.listItem}`}>Setings</a>
      </div>
    </nav>
  );
}

export default Nav;