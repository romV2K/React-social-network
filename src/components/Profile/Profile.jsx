import ProfileDescription from "../Profile/ProfileDescription/ProfileDescription";
import styles from "./Profile.module.css"
import PostsContainer from './Posts/PostsСontainer'

const Profile = props => {
  return (
          <main className={`${styles.profileMainContainer}`}>
            <ProfileDescription />
            <div className={`${styles.container}`}>
                 <PostsContainer />
            </div>
          </main>
        )
}

export default Profile;