const ADD_MESSAGE = 'ADD-MESSAGE',
     ON_MESSAGE_TEXT_CHANGE = 'ON-MESSAGE-TEXT-CHANGE';


let initialState = {
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

const messagesReducer = (state = initialState, action) => {

     switch (action.type) {

          
          case ADD_MESSAGE:{
               let stateCopy = {
                    ...state,
                    messages : [...state.messages]
               };

               let newMessage = {
                    id: 1,
                    time: '11:44',
                    chatMessage: stateCopy.newMessageText
               };

               stateCopy.messages.push(newMessage)
               stateCopy.newMessageText = '';
               return stateCopy
          }
          case ON_MESSAGE_TEXT_CHANGE:{
               let stateCopy = {...state}
               
               stateCopy.newMessageText = action.inputText
               return stateCopy;
          }
          default:
               return state;
     }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateAddMessageActionCreator = (text) => ({ type: ON_MESSAGE_TEXT_CHANGE, inputText: text })


export default messagesReducer