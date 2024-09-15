let Users = (props) => {
    if (props.users.length===0) {
        props.setUsers(
            [
                { id: 1, photoUrl: '', followed: false, fullname: 'Roman', status: 'Hello!', location: { city: 'Lviv', country: 'Ukraine' } },
                { id: 2, photoUrl: '', followed: true, fullname: 'Yurii', status: '', location: { city: 'Lviv', country: 'Ukraine' } },
                { id: 3, photoUrl: '', followed: false, fullname: 'Olga', status: 'Hello!', location: { city: 'Lviv', country: 'Ukraine' } },
                { id: 4, photoUrl: '', followed: false, fullname: 'Oksana', status: 'Hi!', location: { city: 'Kyiv', country: 'Ukraine' } },
                { id: 5, photoUrl: '', followed: true, fullname: 'Dima', status: 'Hello!', location: { city: 'Lviv', country: 'Ukraine' } }
            ]
        )
    }
    return (
        <div>sd
            {props.users.map(u => {
                return (
                    <div key={u.id}>
                        <span>
                            <div><img src={u.photoUrl} alt="user photo" /></div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                    : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.fullname}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.city}</div>
                                <div>{u.location.country}</div>
                            </span>
                        </span>
                    </div>
                )

            })}
        </div>
    )
};

export default Users;
