import ProfileDescription from "../Profile/ProfileDescription/ProfileDescription";
import Posts from "../Profile/Posts/Posts";
import styles from "./Profile.module.css"

const Profile = (props) => {
  return (
    <main className={`${styles.profileMainContainer}`}>
      <ProfileDescription addPost={props.addPost}/>
      <div className={`${styles.container}`}>
        <Posts posts={props.state.posts} />
      </div>
    </main>
  );
}

export default Profile;