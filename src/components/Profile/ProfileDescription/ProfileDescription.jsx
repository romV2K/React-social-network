import styles from './ProfileDescription.module.css'
import Description from './Description/Description'
import NewPostContainer from './NewPost/NewPostContainer';

const ProfileDescription = props => {
  return (
    <div className={`${styles.profileContainer}`}>
      <Description profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
      <NewPostContainer/>
    </div>
  );
}

export default ProfileDescription;