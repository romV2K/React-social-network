import Messages from './Messages'
import { connect } from 'react-redux';


let mapStateToProps = state=>{
  return{
    dialogs : state.messagesPage.dialogs
  }
}

const MessagesContainer = connect(mapStateToProps)(Messages)

export default MessagesContainer;