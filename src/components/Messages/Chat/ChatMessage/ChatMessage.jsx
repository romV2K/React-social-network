import styles from './ChatMessage.module.css';

const ChatMessage = (props) => {
  return (
    <div className={`${styles.chatMessage} $`}>
      <p className={`${styles.text}`}>{props.text}</p>
      <span className={`${styles.time}`}>11:24</span>
    </div>
  );
}

export default ChatMessage;