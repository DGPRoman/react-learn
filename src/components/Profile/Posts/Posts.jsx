import React from 'react';
import styles from './Posts.module.css'
import Post from './Post/Post';
import AddPostReduxForm from './AddPostReduxForm';

const Posts = (props) => {
  let posts = props.posts.map(post => <Post content={post.content}
    likesCount={post.likesCount} key={post.id} />);

  let onSubmit = (data) => {
    console.log(data);
    props.onAddPost(data.post_text);
  }

  return (
    <div className={styles.posts}>
      <h3>New post</h3>
      <div className={styles.new_post}>
        <AddPostReduxForm onSubmit={onSubmit} />
      </div>
      {posts}
    </div>
  );
}

export default Posts
