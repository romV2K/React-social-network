import Nav from "../Navbar/Nav";
import ProfileDescription from "../Profile/Posts/ProfileDescription/ProfileDescription";
import Posts from "../Profile/Posts/Posts";
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