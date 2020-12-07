import styles from "./Header.module.css";
import ".././../App.css"

const Header = () => {
  return (
      <header>
        <div className={`${styles.imgDiv}`}>
          <p>React Society</p>
        </div>
      </header>
  );
}

export default Header;