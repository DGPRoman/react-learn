import { NavLink } from 'react-router-dom';
import userDefaultImg from '../../images/default-profile-s.png';

let User = ({ user, followInProgress, unfollow, follow }) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small != null ? user.photos.small : userDefaultImg} alt="user" />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button onClick={() => { unfollow(user.id) }} disabled={followInProgress.some(id => id === user.id)}>Unfollow</button>
                        : <button onClick={() => { follow(user.id) }} disabled={followInProgress.some(id => id === user.id)}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
            </span>
        </div>
    )
};

export default User;
