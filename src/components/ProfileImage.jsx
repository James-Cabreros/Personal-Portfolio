import { PROFILE_IMG } from '../data';
import profileImg from '../assets/Image1.png';

function ProfileImage() {
  const imageSrc = PROFILE_IMG || profileImg;
  if (imageSrc) {
    return (
      <div className="profile-wrap">
        <img src={imageSrc} alt="James Viencent M. Cabreros" className="profile-real"/>
        <span className="profile-online"/>
      </div>
    );
  }
  return (
    <div className="profile-wrap">
      <div className="profile-placeholder">
        <span>👤</span>
      </div>
      <span className="profile-placeholder-hint">profile-photo.jpg</span>
      <span className="profile-online"/>
    </div>
  );
}

export default ProfileImage;