import {Routes, Route } from 'react-router-dom';
import './App.css';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProfileContainer from './components/Profile/ProfileContainer';
import Sidebar from './components/Sidebar/Sidebar';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
      <div className="page-wrapper">
        <Header />
        <main className='main'>
          <Sidebar />
          <div className='page-container'>
            <Routes>
              <Route path="/profile/:userId?" element={<ProfileContainer />} />
              <Route path="dialogs" element={<DialogsContainer />} />
              <Route path="users" element={<UsersContainer />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
  );
}

export default App;
