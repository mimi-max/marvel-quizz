import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
