const ADD_POST = 'ADD-POST',
     ON_POST_TEXT_CHANGE = 'ON-POST-TEXT-CHANGE';

let intialStore = {
     posts: [
          // {
          //      id: 1,
          //      loginName: '@romankonopelko',
          //      likes: '30',
          //      coments: '2',
          //      reposts: "0",
          //      userAvatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
          //      postImg: "https://images.unsplash.com/photo-1539651044670-315229da9d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          //      postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, pariatur maiores quas doloribus omnis accusantium aliquam similique iusto optio beatae. Temporibus, quis tenetur. Nam dolores est incidunt, reprehenderit expedita a."
          // },
          // {
          //      id: 2,
          //      loginName: '@romankonopelko',
          //      likes: '26',
          //      coments: '1',
          //      reposts: "1",
          //      userAvatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
          //      postImg: "https://3dnews.ru/assets/external/illustrations/2020/01/20/1001842/01_result.jpg",
          //      postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, pariatur maiores quas doloribus omnis accusantium aliquam similique iusto optio beatae. Temporibus, quis tenetur."
          // }
     ],
     newPostText: ''
}

const profileReducer = (state = intialStore, action) => {
     switch (action.type) {
          case ADD_POST: 
               return {
                    ...state,
                    newPostText: '',
                    posts: [...state.posts,
                         {
                         id: 2,
                         loginName: '@romankonopelko',
                         likes: '26',
                         coments: '1',
                         reposts: "1",
                         userAvatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
                         postImg: "https://3dnews.ru/assets/external/illustrations/2020/01/20/1001842/01_result.jpg",
                         postText: state.newPostText
                         }
                    ]
               }

          case ON_POST_TEXT_CHANGE:
               return{
                    ...state,
                    newPostText: action.inputText
               };
          default:
               return state
     }

}

export const addPostAC = () => ({ type: ADD_POST })
export const updateAddPostAC = (text) => ({ type: ON_POST_TEXT_CHANGE, inputText: text })

export default profileReducer