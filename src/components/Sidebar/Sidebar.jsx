import Nav from "./Nav/Nav";
import Friends from "./Friends/Friends";
import './Sidebar.css'

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <Nav />
            <Friends state={props.state.friends} />
        </div>
    );
}

export default Sidebar;
