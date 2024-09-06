import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Sidebar from './components/Sidebar/Sidebar';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Header />
        <main className='main'>
          <Sidebar state={props.state.sidebar} />
          <div className='page-container'>
            <Routes>
              <Route path="profile" element={<Profile state={props.state.profilePage} addPost={props.addPost} />} />
              <Route path="dialogs" element={<Dialogs state={props.state.dialogsPage} />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
