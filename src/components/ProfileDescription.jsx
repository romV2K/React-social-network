import styles from './ProfileDescription.module.css'


const ProfileDescription = () => {
  return (
    <div className={`${styles.avatarDerscriptionPosts}`}>
      <div className={`${styles.avatarProfileDerscription}`}>
        <div className={`${styles.avatarDescription}`}>
        <div className={`${styles.avatarContainer}`}>
          <img className={`${styles.avatar}`} alt="profile avatar"></img>
        </div>
        <div className={`${styles.description}`}>
          <p className={`${styles.userName}`}>Roman Konopelko</p>
          <p className="">City: <span> Lviv</span></p>
          <p className="">Education: <span>NuLp</span></p>
          <p className="">Contacts: <span>konopelkoroman@gmail.com</span></p>
        </div>
        </div>
      </div>
        <div className={`${styles.newPostBlock}`}>
          <div className={`${styles.newPostInputBlock}`}>
            <p className={`${styles.newPost}`}>New post</p>
            <textarea className={`${styles.newPostInput}`}></textarea>
          </div>
            <button className={`${styles.newPostSend}`}>
              SEND
            </button>
        </div>
      </div>
  );
}

export default ProfileDescription;