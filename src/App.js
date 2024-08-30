import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <main className='main'>
        <Nav />
        <div className='page-container'>
          <Profile />
          <Dialogs/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
