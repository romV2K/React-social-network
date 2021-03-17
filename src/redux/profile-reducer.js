const ADD_POST = 'ADD-POST',
     ON_POST_TEXT_CHANGE = 'ON-POST-TEXT-CHANGE',
     SET_USER_PROFILE = 'SET_USER_PROFILE'

let intialStore = {
     posts: [],
     profile: null
     // {
          // "aboutMe": "я круто чувак 1001%",
          // "contacts": {
          //   "facebook": "facebook.com",
          //   "website": null,
          //   "vk": "vk.com/dimych",
          //   "twitter": "https://twitter.com/@sdf",
          //   "instagram": "instagra.com/sds",
          //   "youtube": null,
          //   "github": "github.com",
          //   "mainLink": null
          // },
          // "lookingForAJob": true,
          // "lookingForAJobDescription": "не ищу, а дурачусь",
          // "fullName": "samurai dimych",
          // "userId": 2,
          // "photos": {
          //   "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
          //   "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
          // }
     // }
     ,
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
          case SET_USER_PROFILE:
               return{
                    ...state,
                    profile: action.profile
               };
          default:
               return state
     }

}

export const addPostAC = () => ({ type: ADD_POST })
export const updateAddPostAC = (text) => ({ type: ON_POST_TEXT_CHANGE, inputText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer