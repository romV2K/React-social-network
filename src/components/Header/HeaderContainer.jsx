import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {setUserData,setIsFetching,setProfilePhoto} from '../../redux/auth-reducer'
import * as axios from 'axios'


class HeaderContainer extends React.Component {
  
  componentDidMount(){


    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
      .then(response => {
        let {id,login,email} = response.data.data
        this.props.setUserData(id,login,email)
        if(!this.props.profile){
          axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(response=>{
              let userIcon = response.data.photos.small
              this.props.setProfilePhoto(userIcon)
            })
        }
        
      })
  }
  
  render(){
    return <Header
      login ={this.props.login}
      isAuth ={this.props.login}
      userIcon ={this.props.userIcon}
    />
  }

}

let mapStateToProps = state =>{
  return {
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
    userIcon: state.auth.userIcon
  }
}


export default connect(mapStateToProps,{setUserData,setIsFetching,setProfilePhoto})(HeaderContainer);