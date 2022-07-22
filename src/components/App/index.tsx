import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../../App.css';
import Header from '../Header/index';
import Landing from '../Landing/index';
import Footer from '../Footer/index';
import Welcome from '../Welcome';
import Login from '../Login';
import Signup from '../Signup';
import ErrorPage from '../ErrorPage';

function App() {
  return (
    <div className="App">
      <Header />
      {/*  */}
      <Welcome />
      <Landing />
      <Login />
      <Signup />
      <ErrorPage />
      {/*  */}
      <Footer />
    </div>
  );
}

export default App;
