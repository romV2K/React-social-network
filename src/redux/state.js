import { rerenderEntireTree } from "../render";

let state = {
     //Posts
     profilePage : {
          //posts
          posts : [
          {
               id : 1,
               loginName: '@romankonopelko',
               likes: '30',
               coments: '2',
               reposts: "0",
               userAvatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
               postImg: "https://images.unsplash.com/photo-1539651044670-315229da9d2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
               postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, pariatur maiores quas doloribus omnis accusantium aliquam similique iusto optio beatae. Temporibus, quis tenetur. Nam dolores est incidunt, reprehenderit expedita a."
          },
          {
               id : 2,
               loginName: '@romankonopelko',
               likes: '26',
               coments: '1',
               reposts: "1",
               userAvatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
               postImg: "https://3dnews.ru/assets/external/illustrations/2020/01/20/1001842/01_result.jpg",
               postText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, pariatur maiores quas doloribus omnis accusantium aliquam similique iusto optio beatae. Temporibus, quis tenetur."
          } ],
     },
     //Messages
     messagesPage : {
          //dialogs
          dialogs : [
               { id: 1, name: 'Roman', avatar : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' },
               { id: 2, name: 'Anya', avatar : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' },
               { id: 3, name: 'Vitalik', avatar : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' },
               { id: 4, name: 'Boghdan', avatar : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' },
               { id: 5, name: 'Nazar', avatar : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' },
               { id: 6, name: 'Nastya', avatar : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' },
               { id: 7, name: 'Dima', avatar : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' },
               { id: 8, name: 'Andriy', avatar : 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png' },
          ],
          //chat
          messages : [
               { id: 1, chatMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio recusandae culpa iure ducimus perferendis unde sed quae. Adipisci voluptates blanditiis maiores ab recusandae provident dolor porro ea, mollitia vero?', time: '11:44' },
          ]
     }
     
}
   
export let addPost = (postMessage)=>{
     // debugger;
     let newPost = {
          id : 2,
          loginName: '@romankonopelko',
          likes: '26',
          coments: '1',
          reposts: "1",
          userAvatar: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png",
          postImg: "https://3dnews.ru/assets/external/illustrations/2020/01/20/1001842/01_result.jpg",
          postText : postMessage
     };

     state.profilePage.posts.push(newPost)
     rerenderEntireTree(state)
     //email test
}

export default state;