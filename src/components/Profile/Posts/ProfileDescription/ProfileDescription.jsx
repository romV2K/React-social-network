import NewPost from './NewPost/NewPost'
import styles from './ProfileDescription.module.css'

const ProfileDescription = () => {
  return (
    <div className={`${styles.profileContainer}`}>
      <div className={`${styles.avatarProfileDerscription}`}>
        <div className={`${styles.avatarDescription}`}>
          <div className={`${styles.avatarContainer}`}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" className={`${styles.avatar}`} alt="profile avatar"></img>
          </div>
          <div className={`${styles.description}`}>
            <p className={`${styles.userName}`}>Roman Konopelko</p>
            <p className="">City: <span> Lviv</span></p>
            <p className="">Education: <span>NuLp</span></p>
            <p className="">Contacts: <span>konopelkoroman@gmail.com</span></p>
          </div>
        </div>
      </div>
      <NewPost />
    </div>
  );
}

export default ProfileDescription;