import React from 'react';
import { addPostActionCreator, updateAddPostActionCreator } from '../../../../redux/profile-reducer';
import NewPost from './NewPost';
import StoreContext from '../../../../storeContext';


const NewPostContainer = props => {
  return (
    <StoreContext.Consumer>
    {
      (store) => {

        let addPost = () =>
          store.dispatch(addPostActionCreator())

        let onPostTextChange = text =>
          store.dispatch(updateAddPostActionCreator(text))

        return (<NewPost onPostTextChange={onPostTextChange} addPost={addPost} 
                newPostText={store.getState().profilePage.newPostText} />)
      }
    }
    </StoreContext.Consumer>
  )
}

export default NewPostContainer;