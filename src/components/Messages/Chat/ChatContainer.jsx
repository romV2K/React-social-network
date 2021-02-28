import Chat from './Chat'
import React from 'react'
import { addMessageActionCreator, updateAddMessageActionCreator } from '../../../redux/messages-reducer';

const ChatContainer = props => {

  let addMessage = () =>
  props.store.dispatch(addMessageActionCreator())

  let onMessageTextChange = text =>
  props.store.dispatch(updateAddMessageActionCreator(text))

  return(
      <Chat
        onMessageTextChange={onMessageTextChange}
        addMessage={addMessage} messages={props.store.getState().messagesPage.messages}
        newMessageText={props.store.getState().messagesPage.newMessageText}
      />
    )
}

export default ChatContainer;