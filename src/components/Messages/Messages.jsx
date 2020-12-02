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

  return (
    <div className={`${styles.dialogsMessagesContainer}`}>
      <div className={`${styles.dialogsContainer}`}>
        <div className={styles.dialogs}>
          <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
          <Dialog name={dialogsData[1].name} id={dialogsData[2].id} />
          {/* <Dialog name='Anya' id='2' />
          <Dialog name='Vitalik' id='3' />
          <Dialog name='Boghdan' id='4' />
          <Dialog name='Nazar' id='5' />
          <Dialog name='Nastya' id='6' />
          <Dialog name='Dima' id='7' />
          <Dialog name='Andriy' id='8' /> */}
        </div>
      </div>
      <Chat/>
    </div>
  );
}

export default Messages;