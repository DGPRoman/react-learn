const Friend = (props) => {
    return (
        <div className="friend-item">
            <div className="ava"></div>
            <div className="name"> {props.state.name}</div>
        </div>
    );
}

export default Friend;
