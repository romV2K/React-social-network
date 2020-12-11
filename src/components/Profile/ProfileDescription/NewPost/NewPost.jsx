import styles from './NewPost.module.css'
import React from 'react'

const NewPost = (props) => {

  let newPostElement = React.createRef();



  let  addPost = () => {
    props.dispatch({type : 'ADD-POST'})
  }

  let onPostTextChange = () =>{
    let text = newPostElement.current.value;
    props.dispatch({type : 'ON-POST-TEXT-CHANGE', inputText: text},)
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