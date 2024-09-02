import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Header />
        <main className='main'>
          <Nav />
          <div className='page-container'>
            <Routes>
              <Route path="profile" element={<Profile />} />
              <Route path="dialogs" element={<Dialogs />} />
            </Routes>            
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
