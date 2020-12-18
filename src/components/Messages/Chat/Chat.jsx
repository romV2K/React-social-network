import styles from './Chat.module.css';
import ChatMessage from './ChatMessage/ChatMessage';
import React from 'react'
import { addMessageActionCreator, updateAddMessageActionCreator } from '../../../redux/./messages-reducer';

const Chat = (props) => {

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }

  let onMessageTextChange = () => {
    let text = newMessageElement.current.value
    props.dispatch(updateAddMessageActionCreator(text))
  }


  let chatElements = props.messages.map((c, i) => <ChatMessage key={i} text={c.chatMessage} time={c.time} />)//chat data maping

  return (
    <div className={`${styles.messagesContainer}`}>
      <div className={`${styles.messages}`}>
        {chatElements}
      </div>
      <div className={`${styles.writeMessage}`}>
        <textarea ref={newMessageElement} onChange={onMessageTextChange} value={props.newMessageText} className={`${styles.chatTextarea}`} placeholder="Write message..." name="" id="" cols="" rows="3"></textarea>
        <button onClick={addMessage} className={`${styles.sendMessage}`}></button>
      </div>
    </div>
  );
}

export default Chat;