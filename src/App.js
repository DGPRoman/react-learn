import {Routes, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';

const App = (props) => {
  return (
      <div className="page-wrapper">
        <Header />
        <main className='main'>
          <Sidebar state={props.state.sidebar} />
          <div className='page-container'>
            <Routes>
              <Route path="profile" element={<Profile store={props.store} />} />
              <Route path="dialogs" element={<DialogsContainer store={props.store} />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
  );
}

export default App;
