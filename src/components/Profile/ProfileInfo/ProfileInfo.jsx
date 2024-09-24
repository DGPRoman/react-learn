import userDefaultImg from '../../../images/default-profile-s.png';
import './ProfileInfo.css'
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  return (
    <div>
      <div className='profile-description'>
        <div className="profile-photo">
          <img src={props.profile.photos.large != null ? props.profile.photos.large : userDefaultImg} alt="" />
        </div>
        <ProfileStatus status="Hello!" />
      </div>
    </div>
  );
}

export default ProfileInfo;
