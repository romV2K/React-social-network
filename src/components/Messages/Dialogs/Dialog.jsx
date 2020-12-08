import { NavLink } from 'react-router-dom';
import styles from './Dialog.module.css';

const Dialog = (props) => {
     return (
          <NavLink avatar={props.avatar} to={`/Messages/${props.id}`} className={`${styles.dialogItem} ${styles.dialogItemPadding}`} activeClassName={`${styles.active}`} >
               <div className={`${styles.avatarContainer}`}>
                    <img className={`${styles.avatarImg}`} src={props.avatar} alt="" />
               </div>
               <div className={`${styles.name} ${styles.lastMessage}`}>
                    {props.name}
               </div>
          </NavLink>
     );
}

export default Dialog;