import logo from '../images/logo.svg'

const Header = () => {
    return (
      <header className='header'>
        <div className='logo'>
          <a href='/'><img src={logo} /></a>
        </div>
      </header>
    );
  }

export default Header
