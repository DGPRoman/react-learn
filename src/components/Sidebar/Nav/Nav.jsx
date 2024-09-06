import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css'

const Nav = (props) => {
    return (
      <nav className={styles.nav}>
        <ul>
          <li><NavLink to="/" active={styles.active} >Home</NavLink></li>
          <li><NavLink to="/dialogs">Dialogs</NavLink></li>
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/bews">News</NavLink></li>
        </ul>
      </nav>
    );
  }

export default Nav
