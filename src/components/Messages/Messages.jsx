import styles from './Messages.module.css';
import Dialog from './Dialogs/Dialog'
import Chat from './Chat/Chat'


const Messages = (props) => {

  let dialogsData = [ //dialogs data
    { id: 1, name: 'Roman' },
    { id: 2, name: 'Anya' },
    { id: 3, name: 'Vitalik' },
    { id: 4, name: 'Boghdan' },
    { id: 5, name: 'Nazar' },
    { id: 6, name: 'Nastya' },
    { id: 7, name: 'Dima' },
    { id: 8, name: 'Andriy' },
  ]

  let chatData = [//chat data
    { id: 1, chatMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio recusandae culpa iure ducimus perferendis unde sed quae. Adipisci voluptates blanditiis maiores ab recusandae provident dolor porro ea, mollitia vero?', time: '11:44' },
  ]




  let dialogsElements = dialogsData.map((d, i) => <Dialog key={i} name={d.name} id={d.id} />)
  return (
    <div className={`${styles.dialogsMessagesContainer}`}>
      <div className={`${styles.dialogsContainer}`}>
        <div className={styles.dialogs}>
          {dialogsElements}
        </div>
      </div>
      <Chat chatData = {chatData}/>
    </div>
  );
}

export default Messages;