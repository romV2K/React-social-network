import ProfileDescription from "../Profile/ProfileDescription/ProfileDescription";
import Posts from "../Profile/Posts/Posts";
import styles from "./Main.module.css"


const Main = () => {
  return (
    <main>
      <ProfileDescription/>
      <div className={`${styles.container}`}>
      <Posts/>
      </div>
    </main>
  );
}

export default Main;