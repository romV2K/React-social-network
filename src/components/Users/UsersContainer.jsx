import React from 'react'
import { connect } from "react-redux";
import Users from './Users'
import { followSucces, unfollowSucces, setUsers, setCurrentPage, setIsFollowing, getUsers, follow, unfollow } from '../../redux/users-reducer'
import { compose } from 'redux';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageObj) => {
    let selected = pageObj.selected + 1
    this.props.getUsers(selected, this.props.pageSize)
  }

  render() {
    return (
      <Users {...this.props} onPageChanged={this.onPageChanged}/>
    )
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default compose(connect(mapStateToProps,
  { followSucces, unfollowSucces, setUsers,
    setCurrentPage,setIsFollowing, getUsers, follow, unfollow}))(UsersContainer);