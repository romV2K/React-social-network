import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile, getStatus, updateStatus } from '../../redux/profile-reducer'
import { withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId)
      userId = this.props.userId

    this.props.getProfile(userId)
    this.props.getStatus(userId)

  }
  render() {
    return (
      <Profile {...this.props}  />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isFetching: state.profilePage.isFetching,
  userId: state.auth.id,
})

export default compose(connect(mapStateToProps, { getProfile, getStatus, updateStatus }),withRouter
,withAuthRedirect
)(ProfileContainer)