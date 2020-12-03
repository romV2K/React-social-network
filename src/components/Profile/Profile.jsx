import ProfileDescription from "../Profile/ProfileDescription/ProfileDescription";
import Posts from "../Profile/Posts/Posts";
import styles from "./Profile.module.css"

const Profile = (props) => {
  return (
    <main>
      <ProfileDescription/>
      <div className={`${styles.container}`}>
        <Posts postsData={props.postsData} />
      </div>
    </main>
  );
}

export default Profile;