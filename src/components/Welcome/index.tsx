import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from 'firebase';
import Quiz from '../Quiz';
import { FirebaseContext } from '../Firebase';
import Logout from '../Logout';

function Welcome() {
  const [userSession, setUserSession] = useState<null | firebase.User>(null);
  const consumerFirebase = useContext(FirebaseContext);
  const navigate = useNavigate();

  //
  useEffect(() => {
    if (!consumerFirebase) return;
    const listener = consumerFirebase.auth.onAuthStateChanged((user) => {
      if (user) {
        setUserSession(user);
      } else {
        navigate('/');
      }
    });
    // eslint-disable-next-line consistent-return
    return () => {
      listener();
    };
  }, []);
  //
  return userSession === null ? (
    <>
      <div className="loader" />
      <p className="loaderText">Loading...</p>
      P
    </>

  ) : (
    <div className="quiz-bg">
      <div className="container">
        <Logout />
        <Quiz />
      </div>
    </div>
  );
}
export default Welcome;
