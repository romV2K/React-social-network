import React from 'react';
import styles from './NewPost.module.css';


const NewPost = props => {

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost()
  }

  let onPostTextChange = () =>{
    let text = newPostElement.current.value;
    props.onPostTextChange(text);
  }

  return (
    <div className={`${styles.newPostBlock}`}>
      <div className={`${styles.newPostInputBlock}`}>
        <p className={`${styles.newPost}`}>New post</p>
        <textarea onChange = {onPostTextChange} ref={newPostElement} value={props.newPostText} className={`${styles.newPostInput}`}></textarea>
        <button onClick={addPost} className={`${styles.newPostSend}`}>
          Add post
        </button> 
      </div>
    </div>
  )
}

export default NewPost 