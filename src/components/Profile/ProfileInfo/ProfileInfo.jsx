import userDefaultImg from '../../../images/default-profile-s.png';
import './ProfileInfo.css'
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  let aboutMe = props.profile.aboutMe;
  let fullName = props.profile.fullName;
  return (
    <div>
      <div className='profile-description'>
        <div className="profile-photo">
          <img src={props.profile.photos.large != null ? props.profile.photos.large : userDefaultImg} alt="" />
        </div>
        {fullName && <div className='full-name'>{fullName}</div>}
        {props.profile.lookingForAJob && <div className='looking-for-job'>{props.profile.lookingForAJobDescription}</div>}
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        {aboutMe && <div className='about-me'>{aboutMe}</div>}
        <div className="contacts">
        {Object.entries(props.profile.contacts).map(([key, value]) => (
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
