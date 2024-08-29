import logo from '../../images/logo.svg'
import styles from './Header.module.css'

const Header = () => {
    return (
      <header className={styles.header}>
        <div className='logo'>
          <a href='/'><img src={logo} /></a>
        </div>
      </header>
    );
  }

export default Header
