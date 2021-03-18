import PreloaderBlack from '../../../../assets/preloader/PreloaderBlack'
import styles from './Description.module.css'
import checked from '../../../../assets/images/checked.svg'
import cancel from '../../../../assets/images/cancel.svg'
import userIcon from '../../../../assets/images/userIcon.svg'


const Description = props => {
  if (!props.profile) {
    return <PreloaderBlack />
  }

  let contacts = Object.entries(props.profile.contacts)
    .map((c, i) => !c[1] ? null : <p key={i}> {c[0]}: <a href={c[1]}> {c[1]}</a></p>)

  return (
    <div className={`${styles.avatarProfileDerscription}`}>
      <div className={`${styles.avatarDescription}`}>
        <div className={`${styles.avatarContainer}`}>
          <img src={!props.profile.photos.large ? userIcon : props.profile.photos.large} className={`${styles.avatar}`} alt="profile avatar"></img>
        </div>
        <div className={`${styles.description}`}>
        <div className={styles.nameAndStatus}>
          <h2 className={`${styles.userName}`}>{props.profile.fullName}</h2>
          <span>{props.profile.aboutMe}</span>
        </div>
          <div className={props.profile.lookingForAJob ? styles.lookingForAJobBlockChecked : styles.lookingForAJobBlockCenceled}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <span>Looking for a job:</span>
              {props.profile.lookingForAJob
                ? <img className={styles.lookingForAJobIndicator} src={checked} alt='yes' />
                : <img className={styles.lookingForAJobIndicator} src={cancel} alt='no' />}
            </div>
            <span className={styles.lookingForAJobDescription}>{props.profile.lookingForAJobDescription}</span>
          </div>
          <div className={styles.contacts}>
            {contacts.every(e=> e === null) ? null : <p>Contacts:</p>}
            {contacts}
          </div>
        </div>
      </div>
    </div>
  )

}

export default Description;