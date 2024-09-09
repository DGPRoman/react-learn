import styles from './Post.module.css'

const Post = (props) => {
  return (
    <div className={styles.post}>
      <div>{props.content}</div>
      <div className="likes">{props.likesCount}</div>
    </div>
  );
}

export default Post
