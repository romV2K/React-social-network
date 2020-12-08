import styles from './NewPost.module.css'
import React from 'react'

const NewPost = (props) => {

  let newPostElement = React.createRef();

  let addPost = () => {
    // debugger;
    let text = newPostElement.current.value;
    props.addPost(text)
    newPostElement.current.value = '';
  }
  return (
    <div className={`${styles.newPostBlock}`}>
      <div className={`${styles.newPostInputBlock}`}>
        <p className={`${styles.newPost}`}>New post</p>
        <textarea ref={newPostElement} className={`${styles.newPostInput}`}></textarea>
        <button onClick={addPost} className={`${styles.newPostSend}`}>
          ADD POST
        </button>
      </div>
    </div>
  )
}

export default NewPost 