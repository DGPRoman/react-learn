import Posts from './Posts'
import { addPostActionCreator } from "../../../redux/profile-reducer";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (text) => {
      dispatch(addPostActionCreator(text));
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
