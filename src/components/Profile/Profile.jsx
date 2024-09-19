import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';
import Preloader from '../common/Preloader/Preloader';

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
    return (
      <div className={styles.content}>
        <ProfileInfo profile={props.profile} />
        <PostsContainer store={props.store} />
      </div>
    );
  }

export default Profile
