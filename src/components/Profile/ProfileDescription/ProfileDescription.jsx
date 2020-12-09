import NewPost from './NewPost/NewPost'
import styles from './ProfileDescription.module.css'
import Description from './Description/Description'

const ProfileDescription = (props) => {
  return (
    <div className={`${styles.profileContainer}`}>
      <Description userName ="Roman Konopelko" avatar="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"/>
      <NewPost addPost={props.addPost} newPostText = {props.newPostText}  onTextChange={props.onTextChange}/>
    </div>
  );
}

export default ProfileDescription;