import styles from './Messages.module.css';
import Dialog from './Dialogs/Dialog'
import Chat from './Chat/Chat'

const Messages = (props) => {

  let dialogsElements = props.state.dialogs.map((d, i) => <Dialog key={i} name={d.name} id={d.id} avatar={d.avatar} />)

  return (
    <main className={`${styles.dialogsMessagesContainer}`}>
      <div className={`${styles.dialogsContainer}`}>
        <div className={styles.dialogs}>
          {dialogsElements}
        </div>
      </div>
      <Chat dispatch={props.dispatch} newMessageText = {props.state.newMessageText} messages={props.state.messages} />
    </main>
  );
}

export default Messages;