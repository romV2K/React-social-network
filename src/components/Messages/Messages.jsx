import styles from './Messages.module.css';
import Dialog from './Dialogs/Dialog'
import ChatContainer from './Chat/ChatContainer';
import StoreContext from '../../storeContext';

const Messages = (props) => {
        // debugger
  return (<StoreContext.Consumer>
    {
      (store)=>{
        let dialogsElements = store.getState().messagesPage.dialogs.map((d, i) => <Dialog key={i} name={d.name} id={d.id} avatar={d.avatar} />)
        return (
          <main className={`${styles.dialogsMessagesContainer}`}>
              <div className={`${styles.dialogsContainer}`}>
                <div className={styles.dialogs}>
                  {dialogsElements}
                </div>
              </div>
              <ChatContainer store={store}/>
          </main>
        );
      }
    }
    </StoreContext.Consumer>)
}

export default Messages;