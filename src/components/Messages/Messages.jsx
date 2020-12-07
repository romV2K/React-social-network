import styles from './Messages.module.css';
import Dialog from './Dialogs/Dialog'
import Chat from './Chat/Chat'

const Messages = (props) => {

  let dialogsElements = props.state.dialogs.map((d, i) => <Dialog key={i} name={d.name} id={d.id} />)
  
  return (
    <main className={`${styles.dialogsMessagesContainer}`}>
      <div className={`${styles.dialogsContainer}`}>
        <div className={styles.dialogs}>
          {dialogsElements}
        </div>
      </div>
      <Chat messages = {props.state.messages}/>
    </main>
  );
}

export default Messages;