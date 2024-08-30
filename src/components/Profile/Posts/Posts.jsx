import styles from './Posts.module.css'
import Post from './Post/Post';

const Posts = () => {
    return (
      <div className={styles.posts}>
        <div> New post</div>
        <Post message="Post text 1"/>
        <Post message="Post text 2"/>
      </div>
    );
  }

export default Posts