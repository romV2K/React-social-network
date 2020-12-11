import NewPost from './NewPost/NewPost'
import styles from './ProfileDescription.module.css'
import Description from './Description/Description'

const ProfileDescription = (props) => {
  return (
    <div className={`${styles.profileContainer}`}>
      <Description userName ="Roman Konopelko" avatar="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"/>
      <NewPost dispatch={props.dispatch} newPostText = {props.newPostText} />
    </div>
  );
}

export default ProfileDescription;