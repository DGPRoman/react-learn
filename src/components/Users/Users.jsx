import userDefaultImg from './../../images/default-profile-s.png';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];


    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    // todo remove
    pages = pages.slice(0, 5);

    return (
        <div>
            <div className="pagination">
                <ul>
                    {pages.map(p => {
                        return (
                            <li key={`page${p}`} className={props.currentPage === p ? 'active' : ''}
                                onClick={(e) => { props.onPageChanged(p); }}>
                                <span>{p}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {props.users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div><img src={u.photos.small != null ? u.photos.small : userDefaultImg} alt="user" /></div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                {/* <div>{u.location.city}</div> */}
                                {/* <div>{u.location.country}</div> */}
                            </span>
                        </span>
                    </div>
                )
            })}
        </div>
    )
};

export default Users;
