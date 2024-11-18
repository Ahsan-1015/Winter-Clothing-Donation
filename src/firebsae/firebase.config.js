// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBpVBZOYNBMdMCXERWe1EP4TsY7bMeTWyU',
  authDomain: 'assignmnet-09-2713d.firebaseapp.com',
  projectId: 'assignmnet-09-2713d',
  storageBucket: 'assignmnet-09-2713d.firebasestorage.app',
  messagingSenderId: '272470731170',
  appId: '1:272470731170:web:acfe33434b85b124562afb',
  measurementId: 'G-CH1B8CGGTX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
