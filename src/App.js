import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

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
