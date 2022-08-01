/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [btn, setBtn] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState<null | Error>(null);
  const consumerFirebase = useContext(FirebaseContext);
  //
  useEffect(() => {
    if (password.length > 5 && email !== '') {
      setBtn(true);
    } else if (btn === true) {
      setBtn(false);
    }
  }, [password, email, btn]);

  //
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    consumerFirebase?.loginUser(email, password)
      .then((user) => {
        setEmail('');
        setPassword('');
        navigate('/welcome');
      }).catch((err:Error) => {
        setError(err);
        setEmail('');
        setPassword('');
      });
  };
  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftLogin" />
        <div className="formBoxRight">
          <div className="formContent">
            {error !== null && <span>error.message</span>}
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input type="email" value={email} required autoComplete="off" onChange={(e:React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); }} />
                <label htmlFor={email}>Email</label>
              </div>
              <div className="inputBox">
                <input type="password" value={password} required autoComplete="off" onChange={(e:React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); }} />
                <label htmlFor={password}>Mot de passe</label>
              </div>
              {btn ? <button type="submit">connexion</button>
                : <button type="submit" disabled>connexion</button>}
            </form>
            <div className="linkcontainer">
              <Link className="simpleLink" to="/signup">
                Nouveau sur marvel Quiz? inscrivez-vous maintenant
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
