import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile, setIsFetching } from '../../redux/profile-reducer'
import { withRouter } from "react-router";
import Preloader from '../../assets/preloader/Preloader'
import { profileAPI } from "../../api/api";


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId || userId === '')
      userId = this.props.userId

    this.props.setIsFetching(true)
    profileAPI.getProfile(userId)
      .then(data => {
        this.props.setIsFetching(false)
        this.props.setUserProfile(data)
      })
  }
  render() {
    return <div style={this.props.isFetching ? { display: 'flex', justifyContent: 'center' } : null}>
      {this.props.isFetching ? <Preloader /> : <Profile {...this.props} profile={this.props.profile} />}
    </div>
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isFetching: state.profilePage.isFetching,
  userId: state.auth.id
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, setIsFetching })(WithUrlDataContainerComponent);