import logo from '../../images/logo.svg'
import styles from './Footer.module.css'

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={`${styles.logo} logo`}>
          <a href='/'><img src={logo} alt='logo' /></a>
        </div>
      </footer>
    );
  }

export default Footer
