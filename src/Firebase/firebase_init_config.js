// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBK_OCB4Mk0ibckZzIvy5PuO4sI6z0fyOU',
  authDomain: 'privet-route-with-context.firebaseapp.com',
  projectId: 'privet-route-with-context',
  storageBucket: 'privet-route-with-context.appspot.com',
  messagingSenderId: '402165864681',
  appId: '1:402165864681:web:c7ff6cdb48200cbaddf878',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
