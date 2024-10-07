import { NavLink } from 'react-router-dom';
import userDefaultImg from '../../images/default-profile-s.png';
import './users.css';

let Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, follow, unfollow, followInProgress }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
    const visiblePages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let fromPage = Math.max(currentPage - 3, 1);
    let toPage = Math.min(currentPage + 2, pagesCount);

    if (fromPage > 1) {
        visiblePages.push(1);
    }
    
    visiblePages.push(...pages.slice(fromPage - 1, toPage));

    if (toPage < pagesCount) {
        visiblePages.push(pagesCount);
    }

    return (
        <div>
            <div className="pagination">
                <ul>
                    {visiblePages.map(p => {
                        return (
                            <li key={`page${p}`} className={currentPage === p ? 'active' : ''}
                                onClick={(e) => { onPageChanged(p); }}>
                                <span>{p}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img src={u.photos.small != null ? u.photos.small : userDefaultImg} alt="user" />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { unfollow(u.id) }}  disabled={followInProgress.some(id => id === u.id)}>Unfollow</button>
                                    : <button onClick={() => { follow(u.id) }} disabled={followInProgress.some(id => id === u.id)}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
};

export default Users;
