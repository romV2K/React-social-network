import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile, setIsFetching, getProfile } from '../../redux/profile-reducer'
import { withRouter } from "react-router";
import Preloader from '../../assets/preloader/Preloader'


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId)
      userId = this.props.userId

      this.props.getProfile(userId)

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

export default connect(mapStateToProps, {getProfile })(WithUrlDataContainerComponent);