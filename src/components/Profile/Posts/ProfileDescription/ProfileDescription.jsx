import NewPost from './NewPost/NewPost'
import styles from './ProfileDescription.module.css'

const OtherDescription = (props) => {
  return(
      <p className="">{props.otherDesc}</p>
  )

} 
const Description = (props) => {
  return (
    <div className={`${styles.avatarProfileDerscription}`}>
      <div className={`${styles.avatarDescription}`}>
        <div className={`${styles.avatarContainer}`}>
          <img src={props.avatar} className={`${styles.avatar}`} alt="profile avatar"></img>
        </div>
        <div className={`${styles.description}`}>
          <p className={`${styles.userName}`}>{props.userName}</p>
          <OtherDescription otherDesc="City: Lviv"/>
          <OtherDescription otherDesc="Education: NuLp"/>
          <OtherDescription otherDesc="Contacts: konopelkoroman@gmail.com"/>
        </div>
      </div>
    </div>
  )
  
}



const ProfileDescription = (props) => {
  return (
    <div className={`${styles.profileContainer}`}>
      <Description userName ="Roman Konopelko" avatar="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"/>
      <NewPost />
    </div>
  );
}

export default ProfileDescription;