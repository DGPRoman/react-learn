import Posts from './Posts'
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import { connect } from 'react-redux';

// const PostsContainer = (props) => {
//   let state = props.store.getState();
//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   }

//   let onPostChange = (text) => {
//     let action = updateNewPostTextActionCreator(text);
//     props.store.dispatch(action);
//   }

//   return (
//     <Posts updateNewPostText={onPostChange} onAddPost={addPost}
//       posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
//   );
// }

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },

    onAddPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
