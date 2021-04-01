import React from 'react';
import Chat from './Chat'
import { addMessage, updateAddMessage } from '../../../redux/messages-reducer';
import { connect } from 'react-redux';

class ChatContainer extends React.Component{

  render(){
    return <Chat {...this.props}/>
  }
}

let mapStoreToProps = state =>{
  return{
    messages: state.messagesPage.messages,
    newMessageText: state.messagesPage.newMessageText,
  }
}

export default connect(mapStoreToProps,{updateAddMessage, addMessage})(ChatContainer)

