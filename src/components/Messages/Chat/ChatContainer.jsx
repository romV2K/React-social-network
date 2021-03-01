import Chat from './Chat'
import { addMessageActionCreator, updateAddMessageActionCreator } from '../../../redux/messages-reducer';
import { connect } from 'react-redux';


let mapStoreToProps = state =>{
  return{
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText,
  }
}
let mapDispatchToProps = dispatch =>{
  return{
    onMessageTextChange:(text)=>
      dispatch(updateAddMessageActionCreator(text)),
    addMessage:()=>
      dispatch(addMessageActionCreator()) 
  }
}

const ChatContainer = connect(mapStoreToProps,mapDispatchToProps)(Chat)

export default ChatContainer;