import styles from './Messages.module.css';
import Dialog from './Dialogs/Dialog'
import Chat from './Chat/Chat'


const Messages = (props) => {

  let dialogsData = [
    {id:1, name:'Roman'},
    {id:2, name:'Anya'},
    {id:3, name:'Vitalik'},
    {id:4, name:'Boghdan'},
    {id:5, name:'Nazar'},
    {id:6, name:'Nastya'},
    {id:7, name:'Dima'},
    {id:8, name:'Andriy'},
  ]
  let dialogsElements = dialogsData.map(d=><Dialog name={d.name} id={d.id} />)
  return (
    <div className={`${styles.dialogsMessagesContainer}`}>
      <div className={`${styles.dialogsContainer}`}>
        <div className={styles.dialogs}>
          {dialogsElements}
        </div>
      </div>
      <Chat/>
    </div>
  );
}

export default Messages;