import styles from './NewPost.module.css'
import React from 'react'

const NewPost = (props) => {

  let newPostElement = React.createRef();



  let addPost = () => {
    props.addPost(props.newPostText)
  }

  let onTextareaChange = () =>{
    let text = newPostElement.current.value;
    props.onTextChange(text)
  }

  return (
    <div className={`${styles.newPostBlock}`}>
      <div className={`${styles.newPostInputBlock}`}>
        <p className={`${styles.newPost}`}>New post</p>
        <textarea onChange = {onTextareaChange} ref={newPostElement} value={props.newPostText} className={`${styles.newPostInput}`}></textarea>
        <button onClick={addPost} className={`${styles.newPostSend}`}>
          ADD POST
        </button>
      </div>
    </div>
  )
}

export default NewPost 