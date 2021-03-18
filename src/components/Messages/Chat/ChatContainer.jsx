import Chat from './Chat'
import { addMessageAC, updateAddMessageAC } from '../../../redux/messages-reducer';
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
      dispatch(updateAddMessageAC(text)),
    addMessage:()=>
      dispatch(addMessageAC()) 
  }
}

const ChatContainer = connect(mapStoreToProps,mapDispatchToProps)(Chat)

export default ChatContainer;