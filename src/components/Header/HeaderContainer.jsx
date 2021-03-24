import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserData, setIsFetching, setProfilePhoto } from '../../redux/auth-reducer'
import { authAPI, profileAPI } from "../../api/api";


class HeaderContainer extends React.Component {

  componentDidMount() {
    authAPI.getMe('me')
    .then(data => {
        let { id, login, email } = data.data
        this.props.setUserData(id, login, email)
        if (!this.props.profile) {
          profileAPI.getProfile(id)
            .then(data => {
              let userIcon = data.photos.small
              this.props.setProfilePhoto(userIcon)
            })
        }
      })
  }

  render() {
    return <Header
      login={this.props.login}
      isAuth={this.props.login}
      userIcon={this.props.userIcon}
    />
  }

}

let mapStateToProps = state => {
  return {
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
    userIcon: state.auth.userIcon
  }
}


export default connect(mapStateToProps, { setUserData, setIsFetching, setProfilePhoto })(HeaderContainer);