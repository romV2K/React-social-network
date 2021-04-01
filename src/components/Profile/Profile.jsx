import ProfileDescription from "../Profile/ProfileDescription/ProfileDescription";
import styles from "./Profile.module.css"
import PostsContainer from './Posts/PostsСontainer'
import Preloader from "../../assets/preloader/Preloader";

const Profile = props => {

  if (props.isFetching) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Preloader />
      </div>
    )
  }

  return (
    <main className={`${styles.profileMainContainer}`}>
      <ProfileDescription profile={props.profile} status ={props.status} updateStatus = {props.updateStatus}  />
      <div className={`${styles.container}`}>
        <PostsContainer />
      </div>
    </main>
  )
}

export default Profile;