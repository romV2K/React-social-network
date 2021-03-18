import styles from './Chat.module.css';
import ChatMessage from './ChatMessage/ChatMessage';
import React from 'react'

const Chat = props => {

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessage()
  }

  let onMessageTextChange = () => {
    let text = newMessageElement.current.value
    props.onMessageTextChange(text)
  }

  let chatElements = props.messages
      .map((c, i) => <ChatMessage key={i} text={c.chatMessage} time={c.time} />)//chat data maping

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