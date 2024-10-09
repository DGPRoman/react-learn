import userDefaultImg from '../../../images/default-profile-s.png';
import './ProfileInfo.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, profile: {aboutMe, fullName}, status, updateStatus}) => {
 
  return (
    <div>
      <div className='profile-description'>
        <div className="profile-photo">
          <img src={profile.photos.large != null ? profile.photos.large : userDefaultImg} alt="" />
        </div>
        {fullName && <div className='full-name'>{fullName}</div>}
        {profile.lookingForAJob && <div className='looking-for-job'>{profile.lookingForAJobDescription}</div>}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        {aboutMe && <div className='about-me'>{aboutMe}</div>}
        <div className="contacts">
        {Object.entries(profile.contacts).map(([key, value]) => (
                value && (
                    <div key={key}>
                        <strong>{key}:</strong> <a href={value}>{value}</a>
                    </div>
                )
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
