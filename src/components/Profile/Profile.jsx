import image from '../../images/gradient-hexagonal-background_79603-1629.avif'
import styles from './Profile.module.css'
import Posts from './Posts/Posts';

const Profile = () => {
    return (
      <div className={styles.content}>
        <div className={styles.main_img}>
          <img src={image} alt="preview" />
        </div>
        <Posts />
      </div>
    );
  }

export default Profile
