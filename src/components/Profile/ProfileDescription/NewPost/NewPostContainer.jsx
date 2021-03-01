import { addPostActionCreator, updateAddPostActionCreator } from '../../../../redux/profile-reducer';
import NewPost from './NewPost';
import { connect } from 'react-redux';

let mapStateToProps = state =>{
  return{
    newPostText : state.profilePage.newPostText
  }
}
let mapDispatchToProps = dispatch=>{
  return{
    onPostTextChange:(text)=>{
      dispatch(updateAddPostActionCreator(text))
    },
    addPost:()=>{
      dispatch(addPostActionCreator())
    }
  }
}

const NewPostContainer = connect(mapStateToProps,mapDispatchToProps)(NewPost)

export default NewPostContainer;