import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserData, setIsFetching, setProfilePhoto, getMe, logout } from '../../redux/auth-reducer'
class HeaderContainer extends React.Component {

  componentDidMount() {
    this.props.getMe(this.props.profile)
  }
  render() {
    return <Header {...this.props}/>
  }
}

let mapStateToProps = state => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    userIcon: state.auth.userIcon,
    profile: state.profilePage.profile
  }
}


export default connect(mapStateToProps, { setUserData, setIsFetching, setProfilePhoto, getMe, logout })(HeaderContainer);