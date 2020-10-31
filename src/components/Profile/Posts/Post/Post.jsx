import styles from './Post.module.css';

const Post = () => {
  return (
    <div className={`${styles.posts}`}>
      <div className={`${styles.post} ${styles.postPadding}`}>
        <p className={`${styles.postName}`}>
          Lorem, ipsum.
              </p>
        <p className={`${styles.postText}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vitae ad odit alias rem soluta voluptatum quam tempore et aspernatur?
              </p>
      </div>
    </div>
  );
}

export default Post;