import styles from './Messages.module.css';
import Dialog from './Dialogs/Dialog'
import Chat from './Chat/Chat'


const Messages = (props) => {
  return (
    <div className={`${styles.dialogsMessagesContainer}`}>
      <div className={`${styles.dialogsContainer}`}>
        <div className={styles.dialogs}>
          <Dialog name='Roman' id='1' />
          <Dialog name='Anya' id='2' />
          <Dialog name='Vitalik' id='3' />
          <Dialog name='Boghdan' id='4' />
          <Dialog name='Nazar' id='5' />
          <Dialog name='Nastya' id='6' />
          <Dialog name='Dima' id='7' />
          <Dialog name='Andriy' id='8' />
        </div>
      </div>
      <Chat/>
    </div>
  );
}

export default Messages;