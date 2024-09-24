import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'
import styles from './Header.module.css'

const Header = (props) => {
    return (
      <header className={styles.header}>
        <div className='logo'>
          <a href='/'><img src={logo} alt='logo'/></a>
        </div>
        <div className="login-block">
          { props.isAuth ? props.login : <NavLink to='login'>Login</NavLink> }
        </div>
      </header>
    );
  }

export default Header
