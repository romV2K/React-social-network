import styles from './Chat.module.css';
import ChatMessage from './ChatMessage/ChatMessage';

const Chat = (props) => {



  let chatElements = props.chatData.map((c,i) => <ChatMessage key={i} text={c.chatMessage} time={c.time}/> )//chat data maping

  return (
      <div className={`${styles.messagesContainer}`}>
        <div className={`${styles.messages}`}>
            {chatElements}
        </div>
        <div className={`${styles.writeMessage}`}>
            <textarea className={`${styles.chatTextarea}`} placeholder="Write message..." name="" id="" cols="" rows="3"></textarea>
            <button className={`${styles.sendMessage}`}></button>
        </div>
      </div>
  );
}

export default Chat;