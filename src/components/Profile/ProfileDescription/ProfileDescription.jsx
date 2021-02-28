
import styles from './ProfileDescription.module.css'
import Description from './Description/Description'
import NewPostContainer from './NewPost/NewPostContainer';

const ProfileDescription = props => {
  return (
    <div className={`${styles.profileContainer}`}>
      <Description userName ="Roman Konopelko" avatar="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"/>
      <NewPostContainer/>
    </div>
  );
}

export default ProfileDescription;