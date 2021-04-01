import Messages from './Messages'
import { connect } from 'react-redux';
import React from 'react';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class MessagesContainer extends React.Component {

  render() {
    return <Messages {...this.props} />
  }
}


let mapStateToProps = state => {
  return {
    dialogs: state.messagesPage.dialogs
  }
}

export default compose(connect(mapStateToProps, {}), withAuthRedirect)(MessagesContainer)
