import styles from './Chat.module.css';
import ChatMessage from './ChatMessage/ChatMessage';
import React from 'react'

const Chat = (props) => {

  let newPostElement = React.createRef();

  let sendMessage = () => {
    let text = newPostElement.current.value;
    alert(text)
  }
  
  let chatElements = props.messages.map((c,i) => <ChatMessage key={i} text={c.chatMessage} time={c.time}/> )//chat data maping

  return (
      <div className={`${styles.messagesContainer}`}>
        <div className={`${styles.messages}`}>
            {chatElements}
        </div>
        <div className={`${styles.writeMessage}`}>
            <textarea ref={newPostElement} className={`${styles.chatTextarea}`} placeholder="Write message..." name="" id="" cols="" rows="3"></textarea>
            <button onClick={sendMessage} className={`${styles.sendMessage}`}></button>
        </div>
      </div>
  );
}

export default Chat;