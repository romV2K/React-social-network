const ADD_POST = 'ADD-POST',
      ON_POST_TEXT_CHANGE = 'ON-POST-TEXT-CHANGE';

const ADD_MESSAGE = 'ADD-MESSAGE',
      ON_MESSAGE_TEXT_CHANGE = 'ON-MESSAGE-TEXT-CHANGE';

let store = {
     _state : {
          profilePage: {
               posts: [
                    {
                         id: 1,
                         loginName: '@romankonopelko',
                         likes: '30',
                         coments: '2',
                         reposts: "0",
                         userAvatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
                         postImg: "https://images.unsplash.com/photo-1539651044670-315229da9d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                         postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, pariatur maiores quas doloribus omnis accusantium aliquam similique iusto optio beatae. Temporibus, quis tenetur. Nam dolores est incidunt, reprehenderit expedita a."
                    },
                    {
                         id: 2,
                         loginName: '@romankonopelko',
                         likes: '26',
                         coments: '1',
                         reposts: "1",
                         userAvatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
                         postImg: "https://3dnews.ru/assets/external/illustrations/2020/01/20/1001842/01_result.jpg",
                         postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, pariatur maiores quas doloribus omnis accusantium aliquam similique iusto optio beatae. Temporibus, quis tenetur."
                    }
               ],
               newPostText: ''
          },
          //Messages
          messagesPage: {
               //dialogs
               dialogs: [
                    { id: 1, name: 'Roman', avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' },
                    { id: 2, name: 'Anya', avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' },
                    { id: 3, name: 'Vitalik', avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' },
                    { id: 4, name: 'Boghdan', avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' },
                    { id: 5, name: 'Nazar', avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' },
                    { id: 6, name: 'Nastya', avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' },
                    { id: 7, name: 'Dima', avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' },
                    { id: 8, name: 'Andriy', avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' },
               ],
               //chat
               messages: [
                    { id: 1, chatMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio recusandae culpa iure ducimus perferendis unde sed quae. Adipisci voluptates blanditiis maiores ab recusandae provident dolor porro ea, mollitia vero?', time: '11:44' },
               ],
               newMessageText: ''
          }
     
     },
     _callSubscriber(){},

     getState(){
          return this._state
     },
     subscribe(observer){ 
          this._callSubscriber = observer
     },



     addMessage(){
          let newMessage = {
               id: 1,
               time: '11:44',
               chatMessage: this._state.messagesPage.newMessageText
          };
     
          this._state.messagesPage.messages.push(newMessage)
          this._state.messagesPage.newMessageText = ''
          this._callSubscriber(this._state)
     },
     onMessageTextChange(inputText){
     
          this._state.messagesPage.newMessageText = inputText
          this._callSubscriber(this._state)
     },

     dispatch(action){
          //POSTS
          if(action.type === 'ADD-POST'){ 
               let newPost = {
                    id: 2,
                    loginName: '@romankonopelko',
                    likes: '26',
                    coments: '1',
                    reposts: "1",
                    userAvatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
                    postImg: "https://3dnews.ru/assets/external/illustrations/2020/01/20/1001842/01_result.jpg",
                    postText: this._state.profilePage.newPostText
               };
          
               this._state.profilePage.posts.push(newPost)
               this._state.profilePage.newPostText = ''
               this._callSubscriber(this._state)
          }else if(action.type === 'ON-POST-TEXT-CHANGE'){
               this._state.profilePage.newPostText = action.inputText
               this._callSubscriber(this._state)
          }
          // ----

          //MESSAGES
          if(action.type === 'ADD-MESSAGE' ){
               let newMessage = {
                    id: 1,
                    time: '11:44',
                    chatMessage: this._state.messagesPage.newMessageText
               };
          
               this._state.messagesPage.messages.push(newMessage)
               this._state.messagesPage.newMessageText = ''
               this._callSubscriber(this._state)
          }else if(action.type === 'ON-MESSAGE-TEXT-CHANGE'){
               this._state.messagesPage.newMessageText = action.inputText
               this._callSubscriber(this._state)
          }
          // ----
     }
}

export const addPostActionCreator = () =>({type : ADD_POST})
export const updateAddPostActionCreator = (text) =>({type : ON_POST_TEXT_CHANGE, inputText: text})

export const addMessageActionCreator = () =>({type : ADD_MESSAGE})
export const updateAddMessageActionCreator = (text) =>({type : ON_MESSAGE_TEXT_CHANGE, inputText: text})

export default store;
window.store = store