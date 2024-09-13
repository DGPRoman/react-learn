import Friends from './Friends';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        friendsData: state.friendsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;
