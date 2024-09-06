import React from 'react';
import styles from './Posts.module.css'
import Post from './Post/Post';

const Posts = (props) => {
  let newPostElement = React.createRef()
  let addNewPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  let posts = props.posts.map(post => <Post content={post.content}
    likesCount={post.likesCount} key={post.id} />)
  return (
    <div className={styles.posts}>
      <h3>New post</h3>
      <div className={styles.new_post}>
        <div className="field required">
          <div className="control">
            <textarea name="new_post" ref={newPostElement}></textarea>
          </div>
        </div>
        <div className='actions-toolbar'>
          <div className="primary">
            <button className='action primary' onClick={addNewPost}>Save new post</button>
          </div>
        </div>
      </div>
      {posts}
    </div>
  );
}

export default Posts
