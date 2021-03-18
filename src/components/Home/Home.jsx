
// import Posts from "../Profile/Posts/Posts";
import PostsContainer from "../Profile/Posts/PostsСontainer";
import styles from "./Home.module.css"

const Home = props => {
  return (
          <main >
            <div className={`${styles.container}`}>
                 <PostsContainer />
            </div>
          </main>
        )
}

export default Home;