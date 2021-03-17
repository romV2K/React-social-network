import React from 'react'
import * as axios  from 'axios'
import { connect } from "react-redux";
import Users from './Users'
import Preloader from '../../assets/preloader/Preloader'
import {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching} from '../../redux/users-reducer'

class UsersContainer extends React.Component {
  componentDidMount(){
    this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
    })
  }
  onPageChanged = (pageObj)=>{
    let selected = pageObj.selected + 1 
    this.props.setCurrentPage(selected)
    this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${selected}&count=${this.props.pageSize}`)
    .then(response => {
        this.props.setIsFetching(false)
        this.props.setUsers(response.data.items)
    })
  }
  render() {
    return (
      // {this.props.isFetching ? <Preloader/> : null}
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


let mapStateToProps = (state)=>{
  return{
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps,
  {follow,unfollow,setUsers,setTotalUsersCount,setCurrentPage,setIsFetching})(UsersContainer);