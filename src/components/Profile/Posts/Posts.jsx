import styles from './Posts.module.css'
import Post from './Post/Post';

const Posts = (props) => {
  
  let posts = props.posts.map(post => <Post content={post.content} likesCount={post.likesCount }/>)
    return (
      <div className={styles.posts}>
        <h3>New post</h3>
        <form className={styles.new_post}>
          <div className="field required">
            <div className="control">
              <textarea name="new_post" id="new_post"></textarea>
            </div>
          </div>
          <div className='actions-toolbar'>
            <div className="primary">
              <button className='action primary'>Save new post</button>
            </div>
          </div>
        </form>
        { posts }
      </div>
    );
  }

export default Posts