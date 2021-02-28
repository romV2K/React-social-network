import ProfileDescription from "../Profile/ProfileDescription/ProfileDescription";
import Posts from "../Profile/Posts/Posts";
import styles from "./Profile.module.css"
import StoreContext from "../../storeContext";

const Profile = props => {
  return (
    <StoreContext.Consumer>
    {
      (store)=>(
          <main className={`${styles.profileMainContainer}`}>
            <ProfileDescription />
            <div className={`${styles.container}`}>
                 <Posts posts={store.getState().profilePage.posts}/>
            </div>
          </main>
        )
      }
    </StoreContext.Consumer>
  );
}

export default Profile;