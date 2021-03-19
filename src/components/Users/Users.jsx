import React from 'react'
import styles from "./Users.module.css"
import '../../App.css'
import userIcon from '../../assets/images/userIcon.svg'
import { NavLink } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Preloader from '../../assets/preloader/Preloader'
import * as axios from 'axios'


let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  

  return (
    <main className={styles.usersMainContainer}>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        previousClassName={styles.prevButton}
        nextClassName={styles.nextButton}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pagesCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={props.onPageChanged}
        containerClassName={styles.pagination}
        subContainerClassName={'pages pagination'}
        activeClassName={styles.selected}
      />
      {props.isFetching ? <Preloader /> : null}
      <div className={props.isFetching ? 'hideAndNone' : `${styles.users} show`}>
        {
          props.users.map(u =>
            <div className={styles.user} key={u.id}>
              <span className={styles.avatarAndFollowButton}>
                <NavLink to={'/profile/' + u.id}>
                  <div className={styles.avatarContainer}>
                    <img className={styles.avatar} src={u.photos.small != null ? u.photos.small : userIcon} alt={u.name + '`s avatar'}></img>
                  </div>
                </NavLink>
                <div>
                  {u.followed
                    ? <button onClick={() => {
                      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                        headers: {
                          'API-KEY': 'ceb868d5-e092-40d3-a57e-f46c94cb7815'
                        },
                        withCredentials: true
                      })
                        .then(response => {
                          if (response.data.resultCode === 0)
                            props.unfollow(u.id)
                        })
                    }} className={styles.followButton}>unfollow</button>
                    : <button onClick={() => {
                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                        headers: {
                          'API-KEY': 'ceb868d5-e092-40d3-a57e-f46c94cb7815'
                        },
                        withCredentials: true
                      })
                        .then(response => {
                          if (response.data.resultCode === 0)
                            props.follow(u.id)
                        })
                    }} className={styles.followButton}>follow</button>
                  }
                </div>
              </span>
              <span className={styles.nameStatusLocation}>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{'u.location.country'}</div>
                  <div>{'u.location.city'}</div>
                </span>
              </span>
            </div>)
        }
      </div>

    </main>
  )
}

export default Users;