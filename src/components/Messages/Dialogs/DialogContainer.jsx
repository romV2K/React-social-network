import React from 'react';
import { connect } from 'react-redux';
import Dialog from './Dialog';



class DialogsContainer extends React.Component {

     render(){
          return <Dialog />
     }
}

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {})(DialogsContainer);