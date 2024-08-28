import './App.css';
import Header from './page-parts/Header';
import Nav from './page-parts/Nav';
import Content from './page-parts/Content';

const App = () => {
  return (
    <div className="page-wrapper">
      <Header />
      <Nav />
      <Content />
    </div>
  );
}

export default App;
