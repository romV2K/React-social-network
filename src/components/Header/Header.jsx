import styles from "./Header.module.css";
import ".././../App.css"

const Header = () => {
  return (
      <header>
        {/* <div className={`${styles.headerTopBar}`}>
          <img className = {`${styles.logo} logoRotation` } src="https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg" alt="logo"></img>
        </div> */}
        
        <div className={`${styles.imgDiv}`}>
          <p>React Society</p>
        </div>
      </header>
  );
}

export default Header;