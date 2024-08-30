import styles from './Nav.module.css'

const Nav = () => {
    return (
      <nav className={styles.nav}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#contacts">Contacts</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="#news">News</a></li>
        </ul>
      </nav>
    );
  }

export default Nav
