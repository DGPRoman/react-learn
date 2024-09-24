import FriendsContainer from "./Friends/FriendsContainer";
import Nav from "./Nav/Nav";
import './Sidebar.css'

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <Nav />
            <FriendsContainer />
        </div>
    );
}

export default Sidebar;
