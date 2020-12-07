import styles from './Posts.module.css';
import Post from './Post/Post'

const Posts = (props) => {

      let postsElements = props.posts.map((p, i) => <Post key={i} loginName={p.loginName} likes={p.likes} coments={p.coments} reposts={p.reposts} userAvatar={p.userAvatar} postImg={p.postImg} postText={p.postText} />)

      return (
            <div className={`${styles.posts}`}>
                  {postsElements}
            </div>
      );
}

export default Posts;