import Friend from  './Friend/Friend';
import './Friends.css'


const Friends = (props) => {
    let friendElements = props.friendsData.map((friend) => <Friend state={friend} key={friend.id} />);

    return (
        <div className="friends-wrapper">
            <div className="friends-title">Friends</div>
            <div className="friends-items">
                {friendElements}
            </div>
        </div>
    );
}

export default Friends;
