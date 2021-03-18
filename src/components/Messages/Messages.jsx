import styles from './Messages.module.css';
import Dialog from './Dialogs/Dialog'
import ChatContainer from './Chat/ChatContainer';


const Messages = (props) => {
        let dialogsElements = props.dialogs.map((d, i) => <Dialog key={i} name={d.name} id={d.id} avatar={d.avatar} />)
        return (
          <main className={`${styles.dialogsMessagesContainer}`}>
              <div className={`${styles.dialogsContainer}`}>
                <div className={styles.dialogs}>
                  {dialogsElements}
                </div>
              </div>
              <ChatContainer/>
          </main>
        );
}

export default Messages;