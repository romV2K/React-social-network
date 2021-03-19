import React from 'react'
import { connect } from "react-redux";
import Users from './Users'
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching } from '../../redux/users-reducer'
import { getUsers, userAPI } from '../../api/api'

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true)
    userAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.setIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
      })
  }

  onPageChanged = (pageObj) => {
    let selected = pageObj.selected + 1
    this.props.setCurrentPage(selected)
    this.props.setIsFetching(true)

    userAPI.getUsers(selected, this.props.pageSize)
      .then(data => {
        this.props.setIsFetching(false)
        this.props.setUsers(data.items)
      })
  }

  render() {
    return (
      <Users users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        isFetching={this.props.isFetching}
      />
    )
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps,
  { follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, setIsFetching })(UsersContainer);