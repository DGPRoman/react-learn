import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Footer from './components/Footer/Footer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Sidebar from './components/Sidebar/Sidebar';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContiner';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store'

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="page-wrapper" >
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
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

let AppContainer = compose(
  connect(mapStateToProps, { initializeApp })
)(App);

const RopelApp = () => {
  return <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>
}

export default RopelApp;
