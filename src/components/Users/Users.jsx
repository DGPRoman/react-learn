import './users.css';
import Paginator from './Paginator';
import User from './User';

let Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, follow, unfollow, followInProgress }) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount} pageSize={pageSize} portionSize={7}/>
            {users.map(u => (
                <User user={u} follow={follow}
                    unfollow={unfollow} followInProgress={followInProgress} />
            ))}
        </div>
    )
};

export default Users;
