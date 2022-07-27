import app, { auth } from 'firebase/app';
import 'firebase/auth';

//
const Config = {
  apiKey: 'AIzaSyAw3LvIcOWFjvDiT7uHYPDdkoHFwrgowc4',
  authDomain: 'marvel-quiz-cc1b6.firebaseapp.com',
  projectId: 'marvel-quiz-cc1b6',
  storageBucket: 'marvel-quiz-cc1b6.appspot.com',
  messagingSenderId: '667817559457',
  appId: '1:667817559457:web:543266c6d82518bcafb7e0',
  measurementId: 'G-KE9H89F0ZP',
};
//
class Firebase {
  auth;

  constructor() {
    // app.initializeApp(Config);
    if (!app.apps.length) {
      app.initializeApp(Config);
      this.auth = auth();
    }
  }

  // inscription
  signupUser = (email:string, password:string) => this.auth
    ?.createUserWithEmailAndPassword(email, password);

  // connexion
  loginUser = (email:string, password:string) => this.auth
    ?.signInWithEmailAndPassword(email, password);
}
export default Firebase;
