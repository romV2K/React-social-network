import styles from './Posts.module.css';
import Post from './Post/Post'


const Posts = (props) => {
      let postsData = [
            {
                  loginName : '@romankonopelko',
                  likes : '30',
                  coments : '2',
                  reposts : "0",
                  userAvatar : "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
                  postImg : "https://images.unsplash.com/photo-1539651044670-315229da9d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                  postText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, pariatur maiores quas doloribus omnis accusantium aliquam similique iusto optio beatae. Temporibus, quis tenetur. Nam dolores est incidunt, reprehenderit expedita a."
            },
            {
                  loginName : '@romankonopelko',
                  likes : '26',
                  coments : '1',
                  reposts : "1",
                  userAvatar : "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
                  postImg : "https://3dnews.ru/assets/external/illustrations/2020/01/20/1001842/01_result.jpg",
                  postText : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, pariatur maiores quas doloribus omnis accusantium aliquam similique iusto optio beatae. Temporibus, quis tenetur."
            }
      ]
      return (
            <div className={`${styles.posts}`}>
                  <Post loginName={postsData[0].loginName} likes={postsData[0].likes} coments={postsData[0].coments} reposts={postsData[0].reposts} userAvatar={postsData[0].userAvatar} postImg={postsData[0].postImg} postText={postsData[0].postText} />
                  <Post loginName={postsData[1].loginName} likes={postsData[1].likes} coments={postsData[1].coments} reposts={postsData[1].reposts} userAvatar={postsData[1].userAvatar} postImg={postsData[1].postImg} postText={postsData[1].postText} />
            </div>
      );
}

export default Posts;