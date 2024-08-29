import './App.css';
import Footer from './page-parts/Footer';
import Header from './page-parts/Header';
import Nav from './page-parts/Nav';
import Profile from './page-parts/Profile';

const App = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <Nav />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
