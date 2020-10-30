import Nav from "./Nav";
import ProfileDescription from "./ProfileDescription";
import Posts from "./Posts";
import styles from "./Main.module.css"


const Main = () => {
  return (
    <main>
      <Nav/>
      <ProfileDescription/>
      <div className={`${styles.container}`}>
          <Posts/>
      </div>
    </main>
  );
}

export default Main;