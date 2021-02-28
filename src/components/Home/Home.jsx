import StoreContext from "../../storeContext";
import Posts from "../Profile/Posts/Posts";
import styles from "./Home.module.css"

const Home = props => {
  return (
    <StoreContext.Consumer>
    {
      (store)=>(
          <main >
            <div className={`${styles.container}`}>
                 <Posts posts={store.getState().profilePage.posts}/>
            </div>
          </main>
        )
      }
    </StoreContext.Consumer>
  );
}

export default Home;