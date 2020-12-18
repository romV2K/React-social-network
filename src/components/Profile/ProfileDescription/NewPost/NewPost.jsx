import styles from './NewPost.module.css'
import React from 'react'

import {addPostActionCreator,updateAddPostActionCreator} from '../../../../redux/./profile-reducer'

const NewPost = (props) => {
  let newPostElement = React.createRef();

  let  addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let onPostTextChange = () =>{
    let text = newPostElement.current.value;
    props.dispatch(updateAddPostActionCreator(text))
  }

  return (
    <div className={`${styles.newPostBlock}`}>
      <div className={`${styles.newPostInputBlock}`}>
        <p className={`${styles.newPost}`}>New post</p>
        <textarea onChange = {onPostTextChange} ref={newPostElement} value={props.newPostText} className={`${styles.newPostInput}`}></textarea>
        <button onClick={addPost} className={`${styles.newPostSend}`}>
          ADD POST
        </button>
      </div>
    </div>
  )
}

export default NewPost 