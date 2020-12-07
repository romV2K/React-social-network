import { NavLink } from 'react-router-dom';
import styles from './Dialog.module.css';

const Dialog = (props) => {
     return (
          <NavLink to={`/Messages/${props.id}`} className={`${styles.dialogItem} ${styles.dialogItemPadding}`} activeClassName={`${styles.active}`} >
               {props.name}
          </NavLink>
     );
}

export default Dialog;