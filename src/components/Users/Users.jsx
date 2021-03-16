import React from 'react'
import styles from "./Users.module.css"
import userIcon from '../../assets/images/userIcon.png'

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

  let pages = []

  for(let i = 1; i <= pagesCount; i++){
    pages.push(i);
  }
  return (
    <main className={styles.usersMainContainer}>
      <div className={styles.pagination}>
        {pages.map(p => 
          <span key={p} onClick={() => props.onPageChanged(p)} className={props.currentPage === p ? styles.selected : null}>{p}</span>
        )}
      </div>
      <div className={styles.users}>
        {
          props.users.map(u =>
            <div className={styles.user} key={u.id}>
              <span className={styles.avatarAndFollowButton}>
                <div className={styles.avatarContainer}>
                  <img className={styles.avatar} src={u.photos.small != null ? u.photos.small : userIcon} alt={u.name + '`s avatar'}></img>
                </div>
                <div>
                  {u.followed
                    ? <button onClick={() => props.unfollow(u.id)} className={styles.followButton}>unfollow</button>
                    : <button onClick={() => props.follow(u.id)} className={styles.followButton}>follow</button>
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