/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

//

interface ILoginData{
  pseudo:string
  email: string
  password: string
  confirmPassword: string
}

function Signup() {
  const data = {
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  //
  const [loginData, setLoginData] = useState < ILoginData>(data);
  const [error, setError] = useState<Error|null>(null);
  const consumerFirebase = useContext(FirebaseContext);
  const navigate = useNavigate();
  //
  const {
    pseudo, email, password, confirmPassword,
  } = loginData;

  //
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const newdata = { ...loginData, [e.target.id]: e.target.value };
    setLoginData(newdata);
  };
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consumerFirebase) return;
    consumerFirebase.signupUser(email, password).then(
      (user) => {
        setLoginData({ ...data });
        navigate('/welcome');
      },
    ).catch((err:Error) => { setError(err); });
  };
  //
  const isDisabled = pseudo === '' || email === '' || password !== confirmPassword;
  // gestion des erreurs
  const errorMsg = error && <span>{error.message}</span>;
  //
  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftSignup" />
        <div className="formBoxRight">
          <div className="formContent">
            {errorMsg}
            <h2>Inscription</h2>

            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input type="text" id="pseudo" value={pseudo} required autoComplete="off" onChange={handleChange} />
                <label htmlFor={pseudo}>Pseudo</label>
              </div>

              <div className="inputBox">
                <input type="email" id="email" value={email} required autoComplete="off" onChange={handleChange} />
                <label htmlFor={email}>Email</label>
              </div>

              <div className="inputBox">
                <input type="password" id="password" value={password} required autoComplete="off" onChange={handleChange} />
                <label htmlFor={password}>Mot de passe</label>
              </div>

              <div className="inputBox">
                <input type="password" id="confirmPassword" value={confirmPassword} required autoComplete="off" onChange={handleChange} />
                <label htmlFor={confirmPassword}> Confirmer le Mot de passe</label>
              </div>
              <button type="submit" disabled={isDisabled}>Inscription</button>
            </form>
            <div className="linkcontainer">
              <Link className="simpleLink" to="/login">
                Déja inscrit? connectez-vous.
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
