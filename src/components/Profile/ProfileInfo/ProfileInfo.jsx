import image from '../../../images/gradient-hexagonal-background_79603-1629.avif';
import userDefaultImg from '../../../images/default-profile-s.png';
import './ProfileInfo.css'

const ProfileInfo = (props) => {
    return (
      <div>
        <div className='main_bg_img'>
          <img src={image} alt="preview" />
        </div>
        <div>ava + desc
          <img src={props.profile.photos.large != null ? props.profile.photos.large : userDefaultImg } alt="" />
        </div>
      </div>
    );
  }

export default ProfileInfo
