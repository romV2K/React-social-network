import styles from './Post.module.css';

const Post = (props) => {
  return (
      <div className={`${styles.post} ${styles.postPadding}`}>
        <div className={`${styles.avatarAndLoginName}`}>
          <div className={`${styles.avatarConteiner}`}>
            <img className={`${styles.avatarImg}`} src={props.userAvatar} alt=""/>
          </div>
          <p className={`${styles.loginName}`}>
            {props.loginName}
          </p>
        </div>
          <div className={`${styles.postImgContainer}`}>
            <img src={props.postImg} alt=""/>
          </div>
        <div className={`${styles.postsTextConteiner}`}>
          <p className={`${styles.postText}`}>
            {props.postText}
          </p>
        </div>
        <div className={`${styles.likesCommentsReposts}`}>
          <div className={`${styles.likes}`}>
            <img src="#like" alt=""/>
            <span className={`${styles.likesCounter}`}>{props.likes}</span>
          </div>
          <div className={`${styles.comments}`}>
            <img src="#comment" alt=""/>
            <span className={`${styles.commentsCounter}`}>{props.coments}</span>
          </div>
          <div className={`${styles.reposts}`}>
            <img src="#reposts" alt=""/>
            <span className={`${styles.repostCounter}`}>{props.reposts}</span>
          </div>
        </div>
      </div>
  );
}

export default Post;