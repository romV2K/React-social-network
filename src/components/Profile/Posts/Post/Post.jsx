import styles from './Post.module.css';

const Post = () => {
  return (
      <div className={`${styles.post} ${styles.postPadding}`}>
        <div className={`${styles.avatarAndLoginName}`}>
          <div className={`${styles.avatarConteiner}`}>
            <img className={`${styles.avatarImg}`} src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt=""/>
          </div>
          <p className={`${styles.loginName}`}>
            @romanKonopelko
          </p>
        </div>
          <div className={`${styles.postImgContainer}`}>
            <img src="https://images.unsplash.com/photo-1539651044670-315229da9d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt=""/>
          </div>
        <div className={`${styles.postsTextConteiner}`}>
          <p className={`${styles.postText}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae consequatur nulla blanditiis illo. Reiciendis aut dolorum molestiae iste impedit, amet veniam atque error veritatis quae sequi dolorem dolor maiores magni incidunt assumenda perferendis delectus accusamus! Maiores a accusamus quo dolore provident temporibus, assumenda nisi dolorem voluptatibus hic consequuntur fugit saepe.
          </p>
        </div>
        <div className={`${styles.likesCommentsReposts}`}>
          <div className={`${styles.likes}`}>
            <img src="#like" alt=""/>
          </div>
          <div className={`${styles.comments}`}>
            <img src="#comment" alt=""/>
            <span className={`${styles.commentsCounter}`}></span>
          </div>
          <div className={`${styles.reposts}`}>
            <img src="#reposts" alt=""/>
          </div>
        </div>
      </div>
  );
}

export default Post;