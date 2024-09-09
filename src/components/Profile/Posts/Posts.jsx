import React from 'react';
import styles from './Posts.module.css'
import Post from './Post/Post';

const Posts = (props) => {
  let newPostElement = React.createRef()
  let posts = props.posts.map(post => <Post content={post.content}
    likesCount={post.likesCount} key={post.id} />);

  let onAddPost = () => {
    props.onAddPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={styles.posts}>
      <h3>New post</h3>
      <div className={styles.new_post}>
        <div className="field required">
          <div className="control">
          <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText} />
            
          </div>
        </div>
        <div className='actions-toolbar'>
          <div className="primary">
          <button onClick={ onAddPost }>Add post</button>
                    </div>
        </div>
      </div>
      {posts}
    </div>
  );
}

export default Posts
