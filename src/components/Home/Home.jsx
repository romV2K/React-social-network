import Posts from "../Profile/Posts/Posts";
import styles from "./Home.module.css"

const Home = (props) => {
  return (
    <main>
      <div className={`${styles.container}`}>
      <Posts postsData={props.postsData} />
      </div>
    </main>
  );
}

export default Home;