import styles from './NewPost.module.css'

const NewPost  = () => {
     return (
          <div className={`${styles.newPostBlock}`}>
          <div className={`${styles.newPostInputBlock}`}>
            <p className={`${styles.newPost}`}>New post</p>
            <textarea className={`${styles.newPostInput}`}></textarea>
            <button className={`${styles.newPostSend}`}>
              SEND
            </button>
          </div>
        </div>
     )
}

export default NewPost 