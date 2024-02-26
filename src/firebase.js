import { initializeApp } from 'firebase/app'
import { applyActionCode, getAuth } from 'firebase/auth'
import App from './App';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBSE_KEY,
    authDomain: process.env.REACT_APP_FIREBSE_Domain,
    storageBucket: process.env.REACT_APP_FIREBSE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBSE_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBSE_APP_ID,

};

const App = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;