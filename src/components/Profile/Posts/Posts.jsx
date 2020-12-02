import styles from './Posts.module.css';
import Post from './Post/Post'


const Posts = (props) => {
      let postsData = [
            {
                  loginName: '@romankonopelko',
                  likes: '30',
                  coments: '2',
                  reposts: "0",
                  userAvatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
                  postImg: "https://images.unsplash.com/photo-1539651044670-315229da9d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                  postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, pariatur maiores quas doloribus omnis accusantium aliquam similique iusto optio beatae. Temporibus, quis tenetur. Nam dolores est incidunt, reprehenderit expedita a."
            },
            {
                  loginName: '@romankonopelko',
                  likes: '26',
                  coments: '1',
                  reposts: "1",
                  userAvatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
                  postImg: "https://3dnews.ru/assets/external/illustrations/2020/01/20/1001842/01_result.jpg",
                  postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, pariatur maiores quas doloribus omnis accusantium aliquam similique iusto optio beatae. Temporibus, quis tenetur."
            }
      ]
      let postsElements = postsData.map(p => <Post loginName={p.loginName} likes={p.likes} coments={p.coments} reposts={p.reposts} userAvatar={p.userAvatar} postImg={p.postImg} postText={p.postText} />)
      return (
            <div className={`${styles.posts}`}>
                  {postsElements}
            </div>
      );
}

export default Posts;