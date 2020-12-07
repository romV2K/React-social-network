
let state = {
     //POSTS
     profilePage : {
          //posts
          posts : [
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
          } ],
     },
     //Messages
     messagesPage : {
          //dialogs
          dialogs : [
               { id: 1, name: 'Roman' },
               { id: 2, name: 'Anya' },
               { id: 3, name: 'Vitalik' },
               { id: 4, name: 'Boghdan' },
               { id: 5, name: 'Nazar' },
               { id: 6, name: 'Nastya' },
               { id: 7, name: 'Dima' },
               { id: 8, name: 'Andriy' },
          ],
          //chat
          messages : [
               { id: 1, chatMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio recusandae culpa iure ducimus perferendis unde sed quae. Adipisci voluptates blanditiis maiores ab recusandae provident dolor porro ea, mollitia vero?', time: '11:44' },
          ]
     }
     
}
   
export default state;