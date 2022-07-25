import app from 'firebase/app';

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
  constructor() {
    // app.initializeApp(Config);
    if (!app.apps.length) {
      app.initializeApp(Config);
    }
  }
}
export default Firebase;
