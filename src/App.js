import {Routes, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Sidebar from './components/Sidebar/Sidebar';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContiner';
import Login from './components/Login/Login';

const App = (props) => {
  return (
      <div className="page-wrapper">
        <HeaderContainer />
        <main className='main'>
          <Sidebar />
          <div className='page-container'>
            <Routes>
              <Route path="profile/:userId?" element={<ProfileContainer />} />
              <Route path="dialogs" element={<DialogsContainer />} />
              <Route path="users" element={<UsersContainer />} />
              <Route path="login" element={<Login />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
  );
}

export default App;
