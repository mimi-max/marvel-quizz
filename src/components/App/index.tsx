import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../../App.css';
import { useMemo } from 'react';
import Header from '../Header/index';
import Landing from '../Landing/index';
import Footer from '../Footer/index';
import Welcome from '../Welcome';
import Login from '../Login';
import Signup from '../Signup';
import ErrorPage from '../ErrorPage';
import Firebase, { FirebaseContext } from '../Firebase';

function App() {
  const firebaseClient = useMemo(() => new Firebase(), []);
  return (
    <FirebaseContext.Provider value={firebaseClient}>
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
    </FirebaseContext.Provider>
  );
}

export default App;
