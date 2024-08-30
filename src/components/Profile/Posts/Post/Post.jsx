import styles from './Post.module.css'

const Post = (props) => {
    return (
      <div className={styles.post}>
       {props.message}
      </div>
    );
  }

export default Post