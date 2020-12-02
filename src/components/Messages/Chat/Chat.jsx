import styles from './Chat.module.css';
import ChatMessage from './ChatMessage/ChatMessage';

const Chat = (props) => {
  let chatData = [
    {id:1, chatMessage:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio recusandae culpa iure ducimus perferendis unde sed quae. Adipisci voluptates blanditiis maiores ab recusandae provident dolor porro ea, mollitia vero?'},
  ]
  return (
      <div className={`${styles.messagesContainer}`}>
        <div className={`${styles.messages}`}>
            <ChatMessage text={chatData[0].chatMessage}/> 
        </div>
        <div className={`${styles.writeMessage}`}>
            <textarea className={`${styles.chatTextarea}`} placeholder="Write message..." name="" id="" cols="" rows="3"></textarea>
            <button className={`${styles.sendMessage}`}></button>
        </div>
      </div>
  );
}

export default Chat;