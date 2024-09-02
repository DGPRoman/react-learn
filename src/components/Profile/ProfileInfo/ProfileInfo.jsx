import image from '../../../images/gradient-hexagonal-background_79603-1629.avif'
import './ProfileInfo.css'

const ProfileInfo = () => {
    return (
      <div>
        <div className='main_bg_img'>
          <img src={image} alt="preview" />
        </div>
        <div>ava + desc</div>
      </div>
    );
  }

export default ProfileInfo
