import userDefaultImg from '../../../images/default-profile-s.png';
import './ProfileInfo.css'
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  return (
    <div>
      <div className='profile-description'>
        <div className="profile-photo">
          <img src={props.profile.photos.large != null ? props.profile.photos.large : userDefaultImg} alt="" />
        </div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  );
}

export default ProfileInfo;
