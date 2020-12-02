import styles from './Chat.module.css';
import ChatMessage from './ChatMessage/ChatMessage';

const Chat = (props) => {
  return (
      <div className={`${styles.messagesContainer}`}>
        <div className={`${styles.messages}`}>
            <ChatMessage text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. '/> 
        </div>
        <div className={`${styles.writeMessage}`}>
            <textarea className={`${styles.chatTextarea}`} placeholder="Write message..." name="" id="" cols="" rows="3"></textarea>
            <button className={`${styles.sendMessage}`}></button>
        </div>
      </div>
  );
}

export default Chat;