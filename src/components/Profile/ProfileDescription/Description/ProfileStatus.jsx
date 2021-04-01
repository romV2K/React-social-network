import React from 'react'

class ProfileStatus extends React.Component {

     state = {
          editMode: false,
          status: ''
     }

     activateEditing = () => {
          this.setState({editMode: true})
     }
     deactivateEditing = () => {
          this.props.updateStatus(this.state.status)
          this.setState({editMode: false})
     }
     onTextChange = (e) =>{
          this.setState({status: e.currentTarget.value})
          // debugger
     }
     // onSaveBtn = () => {
     //      console.log(1)
     //      // let value = this.state.status
     //      // this.props.updateStatus(value)
     //      alert('1')
     //      debugger
     // }

     componentDidUpdate(prevProps, prevState){
          if (prevProps.status !== this.props.status){
               this.setState({
                    status: this.props.status
               })
          }
     }

     render() {
          return (
               <div>
               {!this.state.editMode &&
                    <div>
                         <span onDoubleClick={this.activateEditing}>{!this.state.status ? '----' : this.state.status}</span>
                    </div>
               }
               {this.state.editMode &&
                    <div>
                         <input autoFocus={true} onBlur={this.deactivateEditing} onChange={this.onTextChange} value={this.state.status}/>
                         {/* <button>kek</button> */}
                    </div>
               }
               </div>

          )
     }
}

export default ProfileStatus;