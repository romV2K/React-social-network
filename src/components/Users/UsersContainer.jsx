import React from 'react'
import * as axios  from 'axios'
import { connect } from "react-redux";
import Users from './Users'
import Preloader from '../../assets/preloader/Preloader'
import {followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, setIsFetchingAC} from '../../redux/users-reducer'

class UsersContainer extends React.Component {
  componentDidMount(){
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
    })
  }
  onPageChanged = (pageNumber)=>{
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
    })
  }
  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users users={this.props.users}
       follow={this.props.follow} 
       unfollow={this.props.unfollow} 
       totalUsersCount={this.props.totalUsersCount} 
       pageSize={this.props.pageSize} 
       currentPage={this.props.currentPage} 
       onPageChanged={this.onPageChanged}/>
    </>
    
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
let mapDispatchToProps = (dispatch)=>{
  return{
    follow: (userId)=>{
      dispatch(followAC(userId))
    },
    unfollow: (userId)=>{
      dispatch(unfollowAC(userId))
    },
    setUsers: (users)=>{
      dispatch(setUsersAC(users))
    },
    setTotalUsersCount: (totalUsersCount)=>{
      dispatch(setTotalUsersCountAC(totalUsersCount))
    },
    setCurrentPage: (pageNumber)=>{
      dispatch(setCurrentPageAC(pageNumber))
    },
    toggleIsFetching: (isFetching)=>{
      dispatch(setIsFetchingAC(isFetching))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);