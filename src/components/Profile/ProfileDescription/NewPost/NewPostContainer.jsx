import { addPostActionCreator, updateAddPostActionCreator } from '../../../../redux/profile-reducer';
import NewPost from './NewPost';
import { connect } from 'react-redux';

let mapStateToProps = state =>{
  return{
    messagesPage : state.messagesPage
  }
}
let mapDispatchToProps = dispatch=>{
  return{
    onPostTextChange:()=>{
      dispatch(addPostActionCreator())
    },
    addPost:(text)=>{
      dispatch(updateAddPostActionCreator(text))
    }
  }
}

const NewPostContainer = connect(mapStateToProps,mapDispatchToProps)(NewPost)

export default NewPostContainer;