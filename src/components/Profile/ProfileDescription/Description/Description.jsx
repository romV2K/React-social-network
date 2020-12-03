import styles from './Description.module.css'





const Miscellaneous = (props) => {
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
          <Miscellaneous otherDesc="City: Lviv"/>
          <Miscellaneous otherDesc="Education: NuLp"/>
          <Miscellaneous otherDesc="Contacts: konopelkoroman@gmail.com"/>
        </div>
      </div>
    </div>
  )
  
}

export default Description;